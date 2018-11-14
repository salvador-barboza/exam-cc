import React from 'react'
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank'
import {css} from 'emotion'
import styled from 'react-emotion';
import DeleteIcon from '../../icons/delete.png'

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

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 400,
})

const Name = styled('h2')({
  margin: 0,
  flexGrow: 1,
  fontWeight: 400,
  fontSize: 16,
})

const Count = styled('div')({
  display: 'inline-flex',
  justifyContent: 'space-between',
  flex: '0 1 100px'
})

const DeleteButton = styled('img')({
  src: DeleteIcon,
  width: 24,
  height: 24,
  marginRight: 16,
  cursor: 'pointer',
})

const ChangeButton = styled('div')({
  height: 20,
  width: 20,
  lineHeight: '20px',
  textAlign: 'center',
  borderRadius: '100%',
  backgroundColor: '#FFF',
  boxShadow: '0 0 3px #a2a2a2',
  fontSize: 20,
  cursor: 'pointer',
})