import { IQuestionVariableMap } from './QuestionVariableMap';
import { Value } from 'slate';

export interface IAnswer {
  predicate: string,
  static: boolean
}

export interface IQuestion {    
  structure: Value
  variableMap?: IQuestionVariableMap
  distractors?: IAnswer[]  
  answer: IAnswer
  id?: string
  questionBankId?: string
}
