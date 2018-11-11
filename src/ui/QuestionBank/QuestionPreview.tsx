import React from 'react'
import StaticPreviewRenderer from '../Editor/Rendering/StaticPreviewRenderer'
import styled from 'react-emotion';
import Question from 'src/models/Question/Question';


const Card = styled('div')({
 boxShadow: '0 0 5px 1px #e2e2e2',
 padding: 16,
 display: 'flex', flexDirection: 'row',
 marginBottom: 8,
 alignItems: 'center',
 backgroundColor: '#FFF'
})

const HeaderContainer = styled('div')({
  display: 'flex', justifyContent:'space-between' 
})

const EditButton = styled('button')((props: { color: string }) => ({
  border: 'none',
  backgroundColor: 'transparent',
  padding: 8,
  marginLeft: 8,
  fontSize: 14,
  color: props.color,
  cursor: 'pointer',
}))

const Number = styled('div')({
  flexGrow: 0,
  fontSize: 25,
  fontWeight: 600,
  color: '#737373',
  marginRight: 19,
  borderRight: '2px solid #c3c3c3',
  paddingRight: 16,
})

const Preview = styled('div')({
  flexGrow: 1
})

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
