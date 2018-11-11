import { IQuestion, IAnswer } from "./IQuestion";
import { Value } from 'slate';
import QuestionVariableMap from './QuestionVariableMap';

class Question implements IQuestion {
  constructor(  
  public structure: Value,
  public answer: IAnswer,
  public variableMap: QuestionVariableMap = new QuestionVariableMap(),
  public distractors?: IAnswer[],
  public id?: string,
  public questionBankId?: string
  ) {}
}

export default Question
