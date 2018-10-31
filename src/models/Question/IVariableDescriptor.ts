import { IQuestion } from './IQuestion';

export interface IVariableQuestion extends IQuestion {
  answerFormula: string,
  choiceCount?: number
}