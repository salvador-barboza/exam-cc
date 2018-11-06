import React from 'react'
import {IQuestionBankNumber} from 'src/models/QuestionBank/IQuestionBank'

interface SubjectsQuestionBanksCountProps{
    userArray?: number[];
    QuestionNumber?: IQuestionBankNumber[];
}

class SubjectsQuestionBanksCount extends React.Component < SubjectsQuestionBanksCountProps,{clicks_easy:number, clicks_medium:number,clicks_hard:number , show:boolean} >{

    constructor(props){
        super(props)
        this.state = {
      clicks_easy: 0,
      clicks_medium:0,
      clicks_hard:0,
      show: true
    };
    }
  IncrementItem = (id:number,banknumber:number) => {
  if(id == 1){
    if(this.state.clicks_easy+1 <= banknumber)
    this.setState({ clicks_easy: this.state.clicks_easy + 1 });
  }
  else if(id == 2){
    if(this.state.clicks_medium+1 <= banknumber)
   this.setState({clicks_medium:this.state.clicks_medium + 1 });}
   else{
    if(this.state.clicks_hard+1 <= banknumber)
   this.setState({clicks_hard:this.state.clicks_hard + 1});}

  }
  DecreaseItem = (id:number) => {
    if(id == 1) {
      if(this.state.clicks_easy-1 >= 0)
    this.setState({ clicks_easy: this.state.clicks_easy - 1 });}
    else if(id == 2){
      if(this.state.clicks_medium - 1 >= 0)
    this.setState({clicks_medium: this.state.clicks_medium - 1 });}
    else{
      if(this.state.clicks_hard -1 >= 0)
    this.setState({clicks_hard:this.state.clicks_hard - 1 });}
  }




private questionnumber(questions: IQuestionBankNumber){
  return (

  <div>
    <h2> {questions.title} </h2>
    <h3>Easy </h3>
    <h4>
    <button onClick={() => this.IncrementItem(1,questions.easy)}> + </button>
     <h3>{ this.state.clicks_easy } </h3>
     <button onClick={()=>this.DecreaseItem(1)}> - </button>
      </h4>

      <h3>Medium</h3>
      <h5>
      <button onClick={()=>this.IncrementItem(2,questions.medium)}> + </button>
        <h3>{ this.state.clicks_medium }</h3>
         <button onClick={()=>this.DecreaseItem(2)}> -</button>
      </h5>
      <h4>
              <h3>Hard </h3>
              <button onClick={()=>this.IncrementItem(3,questions.hard)}> + </button>
                <h3>{ this.state.clicks_hard }</h3>
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
    //the gray background
    /*  Easy
     <h1>
      <button onClick={() => this.IncrementItem(1)}> + </button>
       <h2>{ this.state.clicks_easy } </h2>
        <button onClick={()=>this.DecreaseItem(1)}> - </button>
      </h1>
      Medium
      <h3>
      <button onClick={()=>this.IncrementItem(2)}> + </button>
        <h2>{ this.state.clicks_medium }</h2>
         <button onClick={()=>this.DecreaseItem(2)}> -</button>
     </h3>
     <h4>
             Hard
             <button onClick={()=>this.IncrementItem(3)}> + </button>
               <h2>{ this.state.clicks_hard }</h2>
               <button onClick={()=>this.DecreaseItem(3)}> -</button>
     </h4>
       */
<div>

   {this.questionnumber(question)}
    </div>
  );
 }

}

export default SubjectsQuestionBanksCount
