import React from 'react'
import styled from 'react-emotion'

const BUTTON_SIZE = 40

const Container = styled('div')({
  height: BUTTON_SIZE,
  width: '100%',
  border: '1px solid #FAFAFA'
})

const Button = styled('button')({
  width: BUTTON_SIZE,
  border: 'none',
  borderRight: '1px solid #F0F0F0',
  height: BUTTON_SIZE,
  backgroundColor: 'transparent',
})

export interface ToolbarProps {
  onBoldClicked: (params) => void,
  onUnderlineClicked: (params) => void,
  onItalicsClicked: (params) => void,
  onAddImageClicked: (params) => void,
  onToggleVariablesClicked: (params) => void,
  magicTime: (params) => void,
}

const Toolbar = (props: ToolbarProps) => (
  <Container>
    <Button>B</Button>
    <Button>U</Button>
    <Button>I</Button>
    <Button>Image</Button>
    <Button onClick={props.magicTime}>save</Button>
    <Button onClick={props.onToggleVariablesClicked}>Variables</Button>
  </Container>
)

export default Toolbar