import React from 'react'
import styled from 'react-emotion'
import { Pill } from './Components';


interface IVariableToolbarProps {
  onAddVariableClicked: () => void
  onExistingVariableClicked: (id: string) => void
  variableIds: string[]
}

const Container = styled('div')({
  height: 30,
  width: '100%',
})

const Button = styled('button')({  
  border: 'none',
  borderRight: '1px solid #F0F0F0',
  height: 30,
  backgroundColor: 'transparent',
})

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
