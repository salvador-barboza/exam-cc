import { IQuestionVariableMap } from './QuestionVariableMap';
import { Value } from 'slate';

export interface IAnswer {
  predicate: string,
  static: boolean
}

export interface IQuestion {  
  difficulty: Difficulty    
  structure: Value
  variableMap?: IQuestionVariableMap
  distractors?: IAnswer[]  
  answer: IAnswer
  id?: string
}

export enum Difficulty {
  LOW,
  NORMAL,
  HIGH,
}