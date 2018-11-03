import app from './firebase'
import { IQuestion } from "src/models/Question/IQuestion";
import { fromCollectionRef } from 'rxfire/firestore'
import QuestionSerialization, { ISerializedQuestion } from 'src/serialization/QuestionSerialization';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Question from 'src/models/Question/Question';



class QuestionService {
  private questionRef: firebase.firestore.CollectionReference
  private serialization = new QuestionSerialization()
  constructor(
    private userId: string, 
    private questionParser = new QuestionSerialization()) {
    this.questionRef = app.firestore().collection(`/test/${this.userId}/questions`);
  }

  get data(): Observable<Question[]> {
    return fromCollectionRef(this.questionRef).pipe(
      map(
        val => val.docs
          .map(x => ({  id: x.id, data: x.data() }))
          .map(({ data, id }) => this.serialization.parse(data as ISerializedQuestion, id))
      ))
  }

  public addQuestion = (question: IQuestion) => {
    const serializedQuestion = this.questionParser.serialize(question)
    this.questionRef.add(serializedQuestion).then(console.log)
  }

  public editQuestion = (question: IQuestion) => {
    const serializedQuestion = this.questionParser.serialize(question)
    this.questionRef.doc(question.id).set(serializedQuestion).then(console.log)
  }

  public eraseQuestion = (question: IQuestion) => {
    this.questionRef.doc(question.id).delete().then(console.log)
  }
}

export default QuestionService 
