import React from 'react'
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank'
import {css} from 'emotion'

interface QuestionsCountProps {
  questioncollection: IQuestionBank,
  currentnumber:number
  onClicked: (questioncount: number) => void
  onRemove: (questioncollection) => void
}

interface QuestionCountState {
  countCheck: number;
}

class QuestionsCount extends
  React.Component<QuestionsCountProps, QuestionCountState>{

  constructor(props) {
    super(props)
    this.state = {
      countCheck: this.props.questioncollection.questionCount!!
    }
  }

  incrementItem = (difficulty: number, banknumber: number) => {
    if (this.props.currentnumber < this.state.countCheck) {
      this.props.onClicked(this.props.currentnumber + 1) 

    }
  }

  decreaseItem = () => {
    if(this.props.currentnumber > 0) {
      this.props.onClicked(this.props.currentnumber - 1) 

    }
  }

  private questionnumber( question: number) {
    return (
      <div>
        <h2 className={css({marginBottom:0,marginTop:20})}> {this.props.questioncollection.title} </h2>
        <div className={css({display:'flex'})}>
        <h3 className={css({marginBottom:0,marginTop:0})}>  Preguntas:  </h3>
          <button className={css({maxHeight:20,marginTop:0})} onClick={() => this.incrementItem(1, question)}> + </button>
          <h3 className={css({marginBottom:0,marginTop:0})}>{this.props.currentnumber} </h3>
          <button className={css({maxHeight:20,marginTop:0})} onClick={() => this.decreaseItem()}> - </button>
        </div>
      </div>
    )

  }

  public render() {
    return (
      <div>
        {this.questionnumber( this.state.countCheck)}
        <button className={css({borderRadius:5, borderColor:'#ff001d'})} onClick={this.props.onRemove}>remove</button>
      </div>
    );
  }

}

export default QuestionsCount
