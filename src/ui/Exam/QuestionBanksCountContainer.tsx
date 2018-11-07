// recibe n QuestionBanks
//
//necesita regresar un arreglo con id del question bank y el numero de easy , medium, hard
import React from 'react'
import {IQuestionBank} from 'src/models/QuestionBank/IQuestionBank'
interface QuestionBanksCountContainerProps{
  questionbanks?: IQuestionBank[];
}

class QuestionBanksCountContainer extends React.Component <QuestionBanksCountContainerProps>{
constructor(props){
  super(props)
}


private Count = (questionbanks:IQuestionBank[]) => {

  var obj = questionbanks.map(function(questionbank) {
    return({
    id:questionbank.id,
    easy:questionbank.easy,
    medium:questionbank.medium,
    hard:questionbank.medium });
  })

  return (obj);

}


 render(){
  return (<div></div>);
}

}


 export default QuestionBanksCountContainer
