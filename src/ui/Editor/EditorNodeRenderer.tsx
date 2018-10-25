import React from 'react'
import styled from 'react-emotion'
import { BlockTypes } from './shared'

interface PillStyleProps {
  focused: Boolean
}
const Pill = styled('div')((props: PillStyleProps) => ({ 
  backgroundColor:  'red',
  borderRadius: '12px', 
  display: 'inline-block', 
  padding: '0 12px', 
  fontWeight: 'bold', 
  color: 'rgba(255,255,255,0.85)', 
  margin: '0 2px',
  boxSizing: 'border-box',
  border: props.focused ? '1px solid blue' : 'none', 
}))

export default class EditorNodeRenderer {
  static render(props, next) {
      switch (props.node.type) {
        case BlockTypes.VARIABLE:
          return (
            <Pill focused={props.isFocused} {...props.attributes}>
              {props.children}{props.node.data.get('variableTag')}
            </Pill>
          )
        default:
          return next()      
    }
  }
}