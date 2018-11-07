import { IQuestion } from "../Question/IQuestion";
import { QuestionCount } from "../QuestionBank/IQuestionBank";

interface QuestionSetProps{
    questionBank: IQuestion[];
    requiredQuestions: QuestionCount;
}

class QuestionSet {
    
    constructor(
        private props: QuestionSetProps
    ) {}

    result: IQuestion[] = [];
    usedQuestion: boolean[] = [];

    public getQuestions = ( difficulty: string, difficultyCount: number) =>{
        for(let i = 0; i < difficultyCount ; i++){
            
            var generatedValue = Math.floor( Math.random() * this.props.questionBank.length);
            
            while(this.usedQuestion[generatedValue] && this.props.questionBank[generatedValue].difficulty!=difficulty){
                generatedValue = Math.floor( Math.random() * this.props.questionBank.length);
            }

            this.usedQuestion[generatedValue]=true;
            this.result.push(this.props.questionBank[generatedValue]);
        }
    }

    private compute = () =>{

        for(let i = 0; i < this.props.questionBank.length; i++){
            this.usedQuestion.push(false);
        }

        this.getQuestions("easy", this.props.requiredQuestions.easy);
        this.getQuestions("medium", this.props.requiredQuestions.medium);
        this.getQuestions("hard", this.props.requiredQuestions.hard);

        return this.result;
    }
}