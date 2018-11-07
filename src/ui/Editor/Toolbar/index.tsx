import React from 'react'
import {Container, Button} from './Components'

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