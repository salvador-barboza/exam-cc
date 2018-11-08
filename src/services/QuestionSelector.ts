import { IQuestion } from '../models/Question/IQuestion'

export class QuestionSelector {
    constructor(
        private questionBanks: Map<string, IQuestion[]>,
        private requiredQuestions: Map<string, number>
    ) { }

    result: IQuestion[] = [];

    public compute = () => {
        [...this.questionBanks].forEach(([key, value]) => {

            if (this.requiredQuestions.get(key) != undefined) {
                const usedQuestion: boolean[] = [];

                for (let i = 0; i < value.length; i++) {
                    usedQuestion.push(false);
                }

                for (let i = 0; i < this.requiredQuestions.get(key)!; i++) {
                    let generatedIndex = Math.floor(Math.random() * value.length);
                   
                    while (usedQuestion[generatedIndex]) {
                        generatedIndex = Math.floor(Math.random() * value.length);
                    }
                    
                    usedQuestion[generatedIndex] = true;
                    this.result.push(value[generatedIndex]);
                }
            }
        })

        return this.result;
    }
}