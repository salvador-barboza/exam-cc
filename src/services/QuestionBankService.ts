import app from './firebase'
import { IQuestion } from "src/models/Question/IQuestion";
import { fromCollectionRef, docData } from 'rxfire/firestore'
import QuestionSerialization, { ISerializedQuestion } from 'src/serialization/QuestionSerialization';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Question from 'src/models/Question/Question';
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank';
import { auth } from 'firebase';


class QuestionService {
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
    this.questionCollectionRef.add(serializedQuestion).then(console.log)
  }

  public editQuestion = (question: IQuestion) => {    
    const serializedQuestion = this.questionParser.serialize(question)
    this.questionCollectionRef.doc(question.id).set(serializedQuestion).then(console.log)
  }

  public eraseQuestion = (question: IQuestion) => {
    this.questionCollectionRef.doc(question.id).delete().then(console.log)
  }

  public setTitle = (title: string) => {
    this.questionBankRef.update({
      title
    })
  }
}

export default QuestionService 
