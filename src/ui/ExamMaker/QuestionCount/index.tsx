import React from 'react'
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank'
import {css} from 'emotion'
import DeleteIcon from '../../icons/delete.png'
import {Container, Name, Count, DeleteButton, ChangeButton} from './Components'

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

  incrementItem = () => {
    if (this.props.currentnumber < this.state.countCheck) {
      this.props.onClicked(this.props.currentnumber + 1) 
    }
  }

  decreaseItem = () => {
    if(this.props.currentnumber > 0) {
      this.props.onClicked(this.props.currentnumber - 1) 

    }
  }

  public render() {
    return (
      <Container>
        <DeleteButton src={DeleteIcon} onClick={this.props.onRemove}></DeleteButton>
        <Name> {this.props.questioncollection.title} </Name>
        <Count>
        <ChangeButton onClick={() => this.decreaseItem()}> - </ChangeButton>
        <h3 className={css({marginBottom:0,marginTop:0})}>{this.props.currentnumber} </h3>
        <ChangeButton onClick={() => this.incrementItem()}> + </ChangeButton>        
        </Count>
      </Container>
    );
  }

}

export default QuestionsCount