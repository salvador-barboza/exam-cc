import { IQuestion, Difficulty } from "./IQuestion";
import { Value } from 'slate';
import QuestionVariableMap from './QuestionVariableMap';

class Question implements IQuestion {
  constructor(
  public id: number,
  public difficulty: Difficulty,
  public structure: Value,
  public variableQuestion: boolean,  
  public answer: string,
  public variableMap: QuestionVariableMap = new QuestionVariableMap(),
  public choices?: string[]  
  ) {}
}

export default Question