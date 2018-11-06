import { IAnswer, IQuestion, Difficulty } from 'src/models/Question/IQuestion';
import Question from 'src/models/Question/Question';
import { Value } from 'slate';
import QuestionVariableMap from 'src/models/Question/QuestionVariableMap';


export interface ISerializedQuestion {  
  answer: IAnswer
  difficulty: Difficulty
  structure: string
  variableMap?: string
  distractors?: IAnswer[]
  questionBankId?: string
}

class QuestionSerialization {
  public serialize(question: IQuestion) : ISerializedQuestion {
    const serializedValue: ISerializedQuestion =  {
      answer: question.answer,
      difficulty: question.difficulty,
      structure: JSON.stringify(question.structure.toJSON()),            
    }

    if (question.variableMap) {
      serializedValue.variableMap = question.variableMap.serialize()
    }

    if (question.distractors) {
      serializedValue.distractors = question.distractors
    }

    if (question.questionBankId) {
      serializedValue.questionBankId = question.questionBankId
    }

    return serializedValue
  }

  public parse(serializedQuestion: ISerializedQuestion, id?: string) {
    const difficulty = serializedQuestion.difficulty
    const structure = Value.fromJSON(JSON.parse(serializedQuestion.structure))
    const answer = serializedQuestion.answer
    const distractors = serializedQuestion.distractors

    let variableMap
    let questionBankId
    
    if (serializedQuestion.variableMap) {
      variableMap = QuestionVariableMap.fromJSON(serializedQuestion.variableMap)
    }

    if (serializedQuestion.questionBankId) {
      questionBankId = serializedQuestion.questionBankId
    }
      
    return new Question(      
      difficulty, 
      structure, 
      answer,
      variableMap,
      distractors,
      id, 
      questionBankId)
  }
}

export default QuestionSerialization