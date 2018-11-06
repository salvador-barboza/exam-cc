import React from 'react'
import {IQuestionBankNumber} from 'src/models/QuestionBank/IQuestionBank'

interface SubjectsQuestionBanksCountProps{
    userArray?: number[];
    QuestionNumber?: IQuestionBankNumber[];
}

class SubjectsQuestionBanksCount extends React.Component < SubjectsQuestionBanksCountProps,{questioncount_easy:number, questioncount_medium:number,questioncount_hard:number} >{

    constructor(props){
        super(props)
        this.state = {
      questioncount_easy: 0,
      questioncount_medium:0,
      questioncount_hard:0,

          };
    }
  IncrementItem = (id:number,banknumber:number) => {
  if(id == 1){
    if(this.state.questioncount_easy+1 <= banknumber)
    this.setState({ questioncount_easy: this.state.questioncount_easy + 1 });
  }
  else if(id == 2){
    if(this.state.questioncount_medium+1 <= banknumber)
   this.setState({questioncount_medium:this.state.questioncount_medium + 1 });}
   else{
    if(this.state.questioncount_hard+1 <= banknumber)
   this.setState({questioncount_hard:this.state.questioncount_hard + 1});}

  }
  DecreaseItem = (id:number) => {
    if(id == 1) {
      if(this.state.questioncount_easy-1 >= 0)
    this.setState({ questioncount_easy: this.state.questioncount_easy - 1 });}
    else if(id == 2){
      if(this.state.questioncount_medium - 1 >= 0)
    this.setState({questioncount_medium: this.state.questioncount_medium - 1 });}
    else{
      if(this.state.questioncount_hard -1 >= 0)
    this.setState({questioncount_hard:this.state.questioncount_hard - 1 });}
  }




private questionnumber(questions: IQuestionBankNumber){
  return (

  <div>
    <h2> {questions.title} </h2>
    <h3>Easy </h3>
    <h4>
    <button onClick={() => this.IncrementItem(1,questions.easy)}> + </button>
     <h3>{ this.state.questioncount_easy } </h3>
     <button onClick={()=>this.DecreaseItem(1)}> - </button>
      </h4>

      <h3>Medium</h3>
      <h5>
      <button onClick={()=>this.IncrementItem(2,questions.medium)}> + </button>
        <h3>{ this.state.questioncount_medium }</h3>
         <button onClick={()=>this.DecreaseItem(2)}> -</button>
      </h5>
      <h4>
              <h3>Hard </h3>
              <button onClick={()=>this.IncrementItem(3,questions.hard)}> + </button>
                <h3>{ this.state.questioncount_hard }</h3>
                <button onClick={()=>this.DecreaseItem(3)}> -</button>
      </h4>
    </div>
   )

}

 render(){
   // No  regresa nada
    var question:IQuestionBankNumber =
    {id:"01",
    title:"sumas",
    easy:10,
    medium:5,
    hard:2
  }
  return (
<div>
   {this.questionnumber(question)}
    </div>
  );
 }

}

export default SubjectsQuestionBanksCount
