export interface QuestionCount {
  easy: number,
  medium: number,
  hard: number
}

export interface IQuestionBank {
  id?: string
  title?: string,
  subject?: string,
  questionCount?: number
}
