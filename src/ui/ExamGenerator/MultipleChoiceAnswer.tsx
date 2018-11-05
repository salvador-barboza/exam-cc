import React from 'react'
import styled from 'react-emotion'

interface MultipleChoiceAnswerProps {
  answers: string[]
}

const List = styled('ol')({  
})

const ListElement = styled('li')({
})

const MultipleChoiceAnswer = (props: MultipleChoiceAnswerProps) => (
  <List type="a">
    {props.answers.map(a => <ListElement>{a}</ListElement>)}
  </List>
)

export default MultipleChoiceAnswer