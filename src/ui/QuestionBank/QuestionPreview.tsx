import React from 'react'
import StaticPreviewRenderer from '../Editor/Rendering/StaticPreviewRenderer'
import {Card, HeaderContainer, EditButton, Number, Preview} from './Components'
import Question from 'src/models/Question/Question';

interface QuestionPreviewProps {
  questionIndex: number
  question: Question
  onEditQuestionClicked: () => void
  onEraseQuestionClicked: () => void
}

const QuestionPreview = (props: QuestionPreviewProps) => {
  return  (
    <Card>
        <Number>{props.questionIndex + 1}</Number>
      <Preview 
        dangerouslySetInnerHTML={{'__html': StaticPreviewRenderer.serialize(props.question.structure)}} />      
      <HeaderContainer>
        <EditButton color="#3f51b5" onClick={() => props.onEditQuestionClicked()}>Editar</EditButton>
        <EditButton color="red" onClick={() => props.onEraseQuestionClicked()}>Borrar</EditButton>
      </HeaderContainer>    
    </Card>
  )
}

export default QuestionPreview
