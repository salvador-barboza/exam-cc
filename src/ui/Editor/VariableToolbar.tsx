import React from 'react'
import styled from 'react-emotion'


interface IVariableDescriptor {

}

interface IVariableToolbarProps {
  variables: IVariableDescriptor[]
  onAddVariableClicked: () => void
  onExistingVariableClicked: (id: Number) => void
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
    {props.variables.map(v => <span>{v}</span>)}
  </Container>
)

export default VariableToolbar
