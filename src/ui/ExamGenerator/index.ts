import { IQuestion } from '../../models/Question/IQuestion';
import FormulaEvaluator from '../../models/FormulaEvaluator';
import { Value } from 'slate';

export interface ExamInciso {
  questionStructure: Value,
  choices: string[],
  variables: any
}
// TODO(salvador-barboza) sacar a models
class ExamGenerator {
  constructor(
    private questionList: IQuestion[]
  ) {}    
    
    public generate = () => {   
      const exam : ExamInciso[] = []
      const clave: any[] = []

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
          // const indexOfAnswer = shuffledAnswers.indexOf(answer)

          clave.push(shuffledAnswers.indexOf(answer))
          exam.push({
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