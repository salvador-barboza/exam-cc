import { IQuestionVariableMap } from './QuestionVariableMap';
import { Value } from 'slate';

export interface IAnswer {
  predicate: string,
  static: boolean
}

export interface IQuestion {
  id: Number
  difficulty: Difficulty    
  structure: Value

  variableQuestion: boolean

  variableMap?: IQuestionVariableMap
  distractors?: IAnswer[]  
  answer: IAnswer
}

export enum Difficulty {
  LOW,
  NORMAL,
  HIGH,
}