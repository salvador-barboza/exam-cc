import { IQuestion } from "src/models/Question/IQuestion";

export interface QuestionService {
  getQuestion: () => IQuestion
}

