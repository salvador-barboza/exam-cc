import React from 'react'
import { Value } from 'slate'
import { Editor } from 'slate-react'

import Toolbar from './Toolbar'
import VariableToolbar from './VariableToolbar'
import { BlockTypes } from './shared'
import EditorNodeRenderer from './EditorNodeRenderer';

export default class SlateEditor extends React.Component {
  public state = {
    value: SlateEditor.initialValue,
    showingVariableToolbar: false
  }

  private static schema = {
    inlines: {
      [BlockTypes.VARIABLE]: {
        isVoid: true,
      },
    },
  }

  private static initialValue = Value.fromJSON({
    document: {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',        
        }
      ],
    }
  })

  private editor: Editor

​  private ref = editor => {
    this.editor = editor
  }
  
  // Render the editor.
  render() {    
    return (
      <div>
        <Toolbar 
          onAddImageClicked={this.addImage}
          onBoldClicked={this.toggleBold}
          onUnderlineClicked={this.toggleUnderline}
          onItalicsClicked={this.toggleItalics}
          magicTime={this.swapVariablesForValues}
          onToggleVariablesClicked={this.toggleVariableToolbar}
        />
        {this.state.showingVariableToolbar && <VariableToolbar 
          onAddVariableClicked={this.addVariable}
          onExistingVariableClicked={() => { throw Error('todo') }}
          variables={[]} />}
        <Editor 
        schema={SlateEditor.schema}
        ref={this.ref}
        value={this.state.value} 
        onChange={this.onChange}
        renderNode={EditorNodeRenderer.render} />
      </div>      
    )
  }
  // On change, update the app's React state with the new editor value.
  private onChange = ({ value }) => {
    this.setState({ value })
  }

  private swapVariablesForValues = () => {
    const varMapping = {
      a: 1,
      b: 2,
      c: 14,
      x: 3,
    }

    const doc = this.state.value.document 
    doc
      .getInlinesByTypeAsArray(BlockTypes.VARIABLE)      
      .map(n => {
        console.log(n.data.toObject())
        return n
      })
      .forEach(n => {
        this.editor.change(change => change.replaceNodeByKey(n.key, 
          { object: 'text',   
            leaves: [
            {
              text: varMapping[n.data.get('variableTag')]
            },
          ]}
        ))
      })
  }

  private addImage = () => {

  }
  private toggleBold = () => {

  }
  private toggleUnderline = () => {

  }
  private toggleItalics = () => {

  }

  private addVariable = () => {
    this.editor.change((change, src, target) =>  
      change.insertInline({
        type: BlockTypes.VARIABLE,
        data: { variableTag: window.prompt('tag?') },
        nodes: []
      })
      .focus()
      .moveForward()
    )
  }
  private toggleVariableToolbar = () => 
    this.setState({ 
      ...this.state, 
      showingVariableToolbar: !this.state.showingVariableToolbar 
    })  
}
