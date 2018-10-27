import React from 'react'
import styled from 'react-emotion'
import Pill from './Pill';


interface IVariableToolbarProps {
  onAddVariableClicked: () => void
  onExistingVariableClicked: (id: Number) => void
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
    {props.variableIds.map(v => <Pill focused={false}>{v}</Pill>)}
  </Container>
)

export default VariableToolbar
