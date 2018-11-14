import React from 'react'
import { BlockTypes } from '../BlockTypes'
import { Pill } from '../Components'
import styled from 'react-emotion';

const Image = styled('img')((props: { selected }) => ({
  maxWidth: '100%',
  maxHeight: 100,
  display: 'block',
  boxShadow: props.selected ? '0 0 0 2px blue;' : 'none'
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
          case BlockTypes.IMAGE:
            return <Image  
              selected={props.isFocused} 
              src={props.node.data.get('url')} 
              {...props.attributes}  />          
        default:
          return next()      
    }
  }
}
