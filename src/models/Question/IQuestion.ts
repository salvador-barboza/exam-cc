import { IQuestionVariableMap } from './QuestionVariableMap';
import { Value } from 'slate';

export interface IQuestion {
  id: Number
  difficulty: Difficulty    
  structure: Value

  variableQuestion: boolean

  variableMap?: IQuestionVariableMap
  choices?: string[]  
  answer: string
}

export enum Difficulty {
  LOW,
  NORMAL,
  HIGH,
}