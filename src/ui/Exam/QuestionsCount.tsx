import React from 'react'
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank'

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
    this.props.onClicked(this.props.currentnumber + 1) 
  }

  decreaseItem = () => {
    // let qCount = (this.state.questionCount);
    // if (qCount - 1 >= 0){ 
    //   this.setState({ questionCount: qCount - 1 });
    //   this.props.onClicked(qCount - 1) }
  }

  private questionnumber( question: number) {
    return (
      <div>
        <h2> {this.props.questioncollection.title} </h2>
        <h3>  Preguntas  </h3>
        <h4>
          <button onClick={() => this.incrementItem(1, question)}> + </button>
          <h3>{this.props.currentnumber} </h3>
          <button onClick={() => this.decreaseItem()}> - </button>
        </h4>
      </div>
    )

  }

  public render() {
    return (
      <div>
        {this.questionnumber( this.state.countCheck)}
        <button onClick={this.props.onRemove}>remove</button>
      </div>
    );
  }

}

export default QuestionsCount
