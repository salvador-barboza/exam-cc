import app from './firebase'
import { fromCollectionRef } from 'rxfire/firestore'
import { Observable } from 'rxjs';
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank';
import { auth } from 'firebase';
import { map, tap } from 'rxjs/operators';


class QuestionBankService {
  private questionCollectionRef: firebase.firestore.CollectionReference

  constructor(
    private userId = auth().currentUser!!.uid, 
  ) {
    this.questionCollectionRef = app.firestore()
      .collection(`/test/${this.userId}/question_banks`)
  }

  get banks(): Observable<Map<string, IQuestionBank[]>> {
    return fromCollectionRef(this.questionCollectionRef)
      .pipe(
        map(
          val => val.docs
            .map(x => ({  id: x.id, ...x.data() }) as IQuestionBank)),
        tap(console.log),
        map(x => x.reduce((acc, curr) => {
          if (!acc.has(curr.subject!!)) {
            acc.set(curr.subject!!, [])
          }

          const arr = acc.get(curr.subject!!)!!
            arr.push(curr)
            return acc
          }
        , new Map<string, IQuestionBank[]>()))      
      )
  }

  get subjects(): Observable<string[]> {
    return this.banks.pipe(
      map(x => new Set(x.keys())),
      map(x => Array.from(x))
    )
  }
  
  public addQuestionBank = (subject: string) => { 
    const questionBank: IQuestionBank = { 
      subject, 
      questionCount: 0
    }

    return this.questionCollectionRef.add(questionBank)
      .then(x => x.id)      
  }
  
  public deleteQuestionBank = (questionBankId: string) => {
    return this.questionCollectionRef.doc(questionBankId).delete()
  }
}

export default QuestionBankService 
