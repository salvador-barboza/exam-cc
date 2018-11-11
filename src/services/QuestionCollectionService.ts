import app from './firebase'
import { IQuestion } from "src/models/Question/IQuestion";
import { fromCollectionRef, docData } from 'rxfire/firestore'
import QuestionSerialization, { ISerializedQuestion } from 'src/serialization/QuestionSerialization';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Question from 'src/models/Question/Question';
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank';
import { auth, firestore } from 'firebase';


class QuestionCollectionService {
  private questionBankRef: firebase.firestore.DocumentReference
  private questionCollectionRef: firebase.firestore.CollectionReference

  private serialization = new QuestionSerialization()
  constructor(
    private questionBankId: string,
    private userId = auth().currentUser!!.uid, 
    private questionParser = new QuestionSerialization()) {

    this.questionCollectionRef = app.firestore()
      .collection(`/test/${this.userId}/questions`)

    this.questionBankRef = app.firestore().doc(`/test/${this.userId}/question_banks/${questionBankId}`)    
  }

  get description(): Observable<IQuestionBank> {
    return docData(this.questionBankRef)
  }

  get questions(): Observable<Question[]> {
    return fromCollectionRef(this.questionCollectionRef.where('questionBankId', '==', this.questionBankId)).pipe(
      map(
        val => val.docs
          .map(x => ({  id: x.id, data: x.data() }))
          .map(({ data, id }) => this.serialization.parse(data as ISerializedQuestion, id))
      ))
  }

  public addQuestion = (question: IQuestion) => {    
    const serializedQuestion = this.questionParser.serialize(question)
    serializedQuestion.questionBankId = this.questionBankId
    this.questionCollectionRef
      .add(serializedQuestion)
      .then(() => this.updateQuestionCount(true))
  }

  public editQuestion = (question: IQuestion) => {    
    const serializedQuestion = this.questionParser.serialize(question)
    this.questionCollectionRef.doc(question.id).set(serializedQuestion).then(console.log)
  }

  public eraseQuestion = (question: IQuestion) => {
    this.questionCollectionRef.doc(question.id)
      .delete()
      .then(() => this.updateQuestionCount(false))
  }

  //TODO: sacar esto a QuestionBankCollectionService
  public setTitle = (title: string) => {
    this.questionBankRef.update({
      title
    })
  }

  public getQuestionsForBank = async (questionBankIds: string[]): Promise<Map<string, Question[]>> => {
    const questionBanks = new Map<string, Question[]>()

    for (let id of questionBankIds) {
      const doc = await this.questionCollectionRef.where('questionBankId', '==', id).get()
      if (!doc.empty) {
        questionBanks.set(id, doc.docs.map(x => this.serialization.parse(x.data() as ISerializedQuestion)))
      }
    }

    return questionBanks
  } 

  private updateQuestionCount = (increment = true) => {
    return firestore().runTransaction(transaction => {
      return transaction.get(this.questionBankRef).then((doc) => {
        if (!doc.exists) {
          throw 'QuestionBank not Found'
        }


        const data = doc.data()! as IQuestionBank    
        const questionCount = data.questionCount! += (increment ? 1 : -1)
  
        transaction.update(this.questionBankRef, { questionCount });
      })
    }).then(() => console.debug('transaction OK'))
  }
}

export default QuestionCollectionService 
