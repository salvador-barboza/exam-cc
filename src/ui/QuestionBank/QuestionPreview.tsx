import React from 'react'
import StaticPreviewRenderer from '../Editor/Rendering/StaticPreviewRenderer'
import styled from 'react-emotion';
import Question from 'src/models/Question/Question';

const HeaderContainer = styled('div')({
  display: 'flex', justifyContent:'space-between' 
})

const EditButton = styled('button')({

})

interface QuestionPreviewProps {
  questionIndex: number
  question: Question
  onEditQuestionClicked: () => void
}

const QuestionPreview = (props: QuestionPreviewProps) => {
  return  (
    <div>
      <HeaderContainer>
        <h1>Pregunta {props.questionIndex+1}</h1>
        <EditButton onClick={() => props.onEditQuestionClicked()}>edit</EditButton>
      </HeaderContainer>      
      <div 
        dangerouslySetInnerHTML={{'__html': StaticPreviewRenderer.serialize(props.question.structure)}} />      
    </div>
  )
}

export default QuestionPreview
