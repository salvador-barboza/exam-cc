import Question from '../models/Question/Question'
import { Value } from 'slate';
import QuestionVariableMap from 'src/models/Question/QuestionVariableMap';

class QuestionParser {
  /** TODO: cambiar a leer un json si. */
  public parse(json: string, variables: string, answer: string) : Question {
    const state = Value.fromJSON(JSON.parse(json))
    const variableMap = QuestionVariableMap.fromJSON(variables)


    return new Question(0, 0, state, true, answer, variableMap)
  }
}

export default QuestionParser