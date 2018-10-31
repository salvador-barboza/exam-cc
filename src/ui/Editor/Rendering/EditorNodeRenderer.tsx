import React from 'react'
import { BlockTypes } from '../shared'
import Pill from '../Pill'

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
