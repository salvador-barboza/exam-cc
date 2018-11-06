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
import { Container } from './Components';
import { css } from 'emotion';
import { Difficulty } from 'src/models/Question/IQuestion';

interface QuestionEditorProps {
  editable?: boolean,
  question?: Question,
  onSaveQuestion?: (question: Question) => void
}

interface QuestionEditorState {
  value: Value,
  showingVariableToolbar: boolean,
  variables: QuestionVariableMap,
  answers: FormValues
  difficulty: Difficulty
  id?: string
  questionBankId?: string,
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
    difficulty: Difficulty.EASY
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
      <div className={css({ maxWidth: 600, margin: 'auto' })}>
      <Container editable={this.props.editable}>
        {this.props.editable && <Toolbar 
          onAddImageClicked={this.addImage}
          onBoldClicked={this.toggleBold}
          onUnderlineClicked={this.toggleUnderline}
          onItalicsClicked={this.toggleItalics}
          magicTime={this.swapVariablesForValues}
          onToggleVariablesClicked={this.toggleVariableToolbar}
        />}
        {this.state.showingVariableToolbar && 
          <VariableToolbar 
            variableIds={this.state.variables.variableKeys}
            onAddVariableClicked={this.addVariable}
            onExistingVariableClicked={this.insertVariableBlock}
          />
        }
        <Editor 
          readOnly={!this.props.editable}
          autoFocus={false}
          schema={QuestionEditor.schema}
          ref={this.ref}
          value={this.state.value} 
          onChange={this.onChange}
          renderNode={EditorNodeRenderer.render} />         
      </Container>      
    {this.props.editable && 
        <AnswerEditor
          answer={this.props.question && this.props.question.answer}
          distractors={this.props.question && this.props.question.distractors}
          valueChanged={this.handleAnswerChange}
          variableQuestionRenameMe={false}
          availableVariables={[...this.state.variables.variableKeys]} />
      }
     </div>
    )
  }

  private onChange = ({ value }) => 
    this.setState({ value })

  private swapVariablesForValues = () => {
    if (this.props.onSaveQuestion) {
      const { variables, value, answers, id, questionBankId, difficulty } = this.state
      const { answer, distractors } = answers

      if (!answer) {
        return
      }

      const q = new Question(
        difficulty, 
        value, 
        answer, 
        variables, 
        distractors,
        id,
        questionBankId)
      this.props.onSaveQuestion(q)
    }
  }

  private addVariable = () => {
    const tag = window.prompt('tag?') || 'x'
    const start = Number(window.prompt('start?'))
    const end = Number(window.prompt('end?'))

    this.state.variables.addRangeVariable(tag, { start, end })
    this.insertVariableBlock(tag)    
  }

  private addImage = () => {

  }

  private toggleBold = () => {

  }

  private toggleUnderline = () => {

  }
  
  private toggleItalics = () => {

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
  }  
}
