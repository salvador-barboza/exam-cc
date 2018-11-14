import React from 'react'
import {Container, Button} from './Components'
import Photo from './insert_image.png'
import Variable from './insert_variable.png'

console.log(Photo)
export interface ToolbarProps {
  onBoldClicked: (params) => void,
  onUnderlineClicked: (params) => void,
  onItalicsClicked: (params) => void,
  onAddImageClicked: (params) => void,
  onToggleVariablesClicked: (params) => void,
}

const Toolbar = (props: ToolbarProps) => (
  <Container>
    <Button onClick={props.onAddImageClicked} style={{flexGrow: 1}}>
      <img src={Photo} style={{width: 24, height: 24 }}></img>
      <span style={{ marginLeft: 8 }}>Agrega una imagen</span>
    </Button>
    <Button onClick={props.onToggleVariablesClicked}>
    <img src={Variable} style={{width: 24, height: 24 }}></img>
      <span style={{ marginLeft: 8 }}>Agrega una variable</span>
    </Button>
  </Container>
)

export default Toolbar