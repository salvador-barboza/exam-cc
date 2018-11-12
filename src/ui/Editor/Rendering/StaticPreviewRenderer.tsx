import React from 'react'
import Html from 'slate-html-serializer'
import { BlockTypes } from "../BlockTypes";
import { Pill } from '../Components';

const rules = [
  {   
    serialize(obj, children) {
      if (obj.object == 'block') {
        switch (obj.type) {
          case 'code':
            return (
              <pre>
                <code>{children}</code>
              </pre>
            )
          case 'paragraph':
            return <span className={obj.data.get('className')}>{children}</span>
          case 'image':
            return <img 
              style={{height: 100, display: 'block' }} 
              src={obj.data.get('url')} />
          case 'quote':
            return <blockquote>{children}</blockquote>
          }
      } else {
        switch(obj.type) {
          case BlockTypes.VARIABLE:
          return (<Pill focused={false}>
              {obj.data.get('variableTag')}
          </Pill>)
        }
      }       
      return null
    },
  }
]

export default new Html({ rules })