import React from 'react'
import {List, ListElement} from './Components'

interface MultipleChoiceAnswerProps {
  answers: string[]
}

const MultipleChoiceAnswer = (props: MultipleChoiceAnswerProps) => (
  <List type="a">
    {props.answers.map(a => <ListElement>{a}</ListElement>)}
  </List>
)

export default MultipleChoiceAnswer