import { IQuestion } from '../models/Question/IQuestion';
import FormulaEvaluator from '../models/FormulaEvaluator';
import { Value } from 'slate';

export interface Exam {
  incisos: ExamInciso[]
  clave: string[]
}

export interface ExamInciso {
  questionStructure: Value,
  choices: string[],
  variables: any
}

class ExamGenerator {
  constructor(
    private questionList: IQuestion[]
  ) {}    
    
    public generate = (): Exam => {   
      const exam: Exam = {
        clave: [],
        incisos: []
      }


      for (let q of this.questionList) {        
        if (q.variableMap) {
          const formulaEvaluator = new FormulaEvaluator(q.variableMap)          
          const answer = q.answer.static 
            ? q.answer.predicate
            : formulaEvaluator.evaluate(q.answer.predicate)
          let distractors: number[] | string[] = []
          
          if (q.distractors) {
            distractors = q.distractors.map(({ static: isStatic, predicate }) => {
              if (isStatic) {
                return predicate 
              }

              return formulaEvaluator.evaluate(predicate)
            })
          }

          const shuffledAnswers = this.shuffle([...distractors, answer])

          if (distractors) {
            const letterOption = String.fromCharCode(97 + shuffledAnswers.indexOf(answer))
            exam.clave.push(`${letterOption})`)
          } else {
            exam.clave.push(`"${answer}"`)
          }

          exam.incisos.push({
            choices: shuffledAnswers,
            questionStructure: q.structure,
            variables: formulaEvaluator.computedVariableScope
          })
        }                                
    }

    return exam
  }

  private shuffle(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
  } 
}

export default ExamGenerator