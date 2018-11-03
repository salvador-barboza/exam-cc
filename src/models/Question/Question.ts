import { IQuestion, Difficulty, IAnswer } from "./IQuestion";
import { Value } from 'slate';
import QuestionVariableMap from './QuestionVariableMap';

class Question implements IQuestion {
  constructor(  
  public difficulty: Difficulty,
  public structure: Value,
  public answer: IAnswer,
  public variableMap: QuestionVariableMap = new QuestionVariableMap(),
  public distractors?: IAnswer[],
  public id?: string,
  ) {}
}

export default Question