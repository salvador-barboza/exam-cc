import React from 'react'
import { Value } from 'slate'
import { Editor } from 'slate-react'

import Toolbar from './Toolbar'
import VariableToolbar from './VariableToolbar'
import { BlockTypes } from './BlockTypes'
import EditorNodeRenderer from './Rendering/EditorNodeRenderer';
import QuestionVariableMap from '../../models/Question/QuestionVariableMap'
import AnswerEditor, { FormValues } from './AnswerEditor/AnswerEditor'
import Question from 'src/models/Question/Question';
import { Container, SaveButton } from './Components';
import { css } from 'emotion';
import VariableEditor from './VariableEditor';
import { GeneratorType } from 'src/models/Generators';
import ImageDialog from './ImageDialog';


interface QuestionEditorProps {
  editable?: boolean,
  question?: Question,
  onSaveQuestion?: (question: Question) => void
}

interface QuestionEditorState {
  value: Value
  showingVariableToolbar: boolean
  variables: QuestionVariableMap
  answers: FormValues  
  id?: string
  questionBankId?: string
  showingVariablePopup: boolean
  showingAddImageDialog: boolean
}

export default class QuestionEditor extends 
  React.Component<QuestionEditorProps, QuestionEditorState> {
  public props: QuestionEditorProps
  public state : QuestionEditorState = {
    value: Value.fromJSON({
      document: { nodes: [{ object: 'block', type: 'paragraph' }] } 
    }),
    showingVariableToolbar: false,
    variables: new QuestionVariableMap(),
    answers: {
      distractors: [],
      answer: {predicate: '', static: false}
    },
    showingVariablePopup: false,
    showingAddImageDialog: false
  }

  private editor: Editor
​  private ref = editor => {
    this.editor = editor
  }

  constructor(props: QuestionEditorProps) {
    super(props)

    if (props.question) {
      this.state.id = props.question.id
      this.state.questionBankId = props.question.questionBankId
      this.state.value = props.question.structure
      this.state.variables = props.question.variableMap
      this.state.answers = { answer: props.question.answer, distractors: props.question.distractors }
    }    
  }
  
  render() {    
    return (
      <div className={css({ display: 'flex', margin: '16px 0' })}>
        {this.state.showingVariablePopup && 
          <VariableEditor 
            onSubmit={this.addVariable}
            type={GeneratorType.RANGE}
        />}
        {this.state.showingAddImageDialog && 
          <ImageDialog onSuccess={this.addImage}/>}
      <Container editable={this.props.editable}>
        {this.props.editable && <Toolbar 
          onAddImageClicked={this.showAddImagePopup}
          onBoldClicked={this.toggleBold}
          onUnderlineClicked={this.toggleUnderline}
          onItalicsClicked={this.toggleItalics}
          onToggleVariablesClicked={this.toggleVariableToolbar}
        />}
        {this.state.showingVariableToolbar && 
          <VariableToolbar 
            variableIds={this.state.variables.variableKeys}
            onAddVariableClicked={this.showVariablePopup}
            onExistingVariableClicked={this.insertVariableBlock}
          />
        }
        <Editor 
          style={{padding: 8}}
          readOnly={!this.props.editable}
          autoFocus={false}
          schema={QuestionEditor.schema}
          ref={this.ref}
          value={this.state.value} 
          onChange={this.onChange}
          renderNode={EditorNodeRenderer.render} />         
      </Container>      
    {this.props.editable && 
      <div className={css({ boxShadow: '0 0 6px 0px #b7b7b7', marginLeft: 16, background: '#FFF', padding: 16, position: 'relative' })}>
        <AnswerEditor
          answer={this.props.question && this.props.question.answer}
          distractors={this.props.question && this.props.question.distractors}
          valueChanged={this.handleAnswerChange}
          variableQuestionRenameMe={false}
          availableVariables={[...this.state.variables.variableKeys]} />

          <SaveButton enabled onClick={this.swapVariablesForValues}>
            Guardar Pregunta
          </SaveButton>
        </div>
      }
     </div>
    )
  }

  private onChange = ({ value }) => 
    this.setState({ value })

  private swapVariablesForValues = () => {
    if (this.props.onSaveQuestion) {
      const { variables, value, answers, id, questionBankId } = this.state
      const { answer, distractors } = answers

      if (!answer) {
        return
      }

      const q = new Question(
        value, 
        answer, 
        variables, 
        distractors,
        id,
        questionBankId)
      this.props.onSaveQuestion(q)
    }
  }

  private addVariable = (tag: string, type: GeneratorType, params: any) => {        
    this.state.variables.addVariable(tag, type, params)
    this.insertVariableBlock(tag)    
    this.setState({ showingVariablePopup: false })
  }

  private addImage = (url: string) => {
    this.editor.change((change) =>  
      change.insertBlock({
        type: BlockTypes.IMAGE,
        data: { url },
      })
        .moveToEndOfBlock()
        .insertBlock('paragraph') 
        .focus()
    )

    this.setState({ showingAddImageDialog: false })

  }

  private toggleBold = () => {

  }

  private toggleUnderline = () => {

  }
  
  private toggleItalics = () => {

  }

  private showVariablePopup = () => {
    this.setState({ showingVariablePopup: true })
  }

  private showAddImagePopup = () => {
    this.setState({ showingAddImageDialog: true })
  }

  private insertVariableBlock = (tag: string) => {
    this.editor.change((change) =>  
      change.insertInline({
        type: BlockTypes.VARIABLE,
        data: { variableTag: tag },
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

  private handleAnswerChange = (answers: any, valid: boolean) => {
    this.setState({ 
      ...this.state, 
      answers
    }) 

  }
  
  static defaultProps : QuestionEditorProps = {
    editable: true,    
  } 

  private static schema = {
    inlines: {
      [BlockTypes.VARIABLE]: {
        isVoid: true,
      },
    },
    blocks: {
      [BlockTypes.IMAGE]: {
        isVoid: true,
      }
    }
  }  
}
