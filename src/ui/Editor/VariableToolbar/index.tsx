import React from 'react'
import {Container, Button, Pill} from './Components'

interface IVariableToolbarProps {
  onAddVariableClicked: () => void
  onExistingVariableClicked: (id: string) => void
  variableIds: string[]
}

const VariableToolbar = (props: IVariableToolbarProps) => (
  <Container>
    <Button onClick={props.onAddVariableClicked}>
      Nueva Variable
    </Button>
    {props.variableIds.map(variableTag => (
      <Pill 
        key={variableTag}
        onClick={() => props.onExistingVariableClicked(variableTag)}
        focused={false}>{variableTag}</Pill>
      ))}
  </Container>
)

export default VariableToolbar
