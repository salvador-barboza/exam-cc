import React, { Component } from 'react'
import QuestionEditor from '../Editor';
import Question from 'src/models/Question/Question';
import QuestionPreview from './QuestionPreview';
import { Container, TitleInput } from './Components';
import QuestionBankService from '../../services/QuestionBankService'
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank';
import { AddButton } from '../shared';


interface QuestionBankEditorProps {
  questionbBankId: string  
}

interface QuestionBankEditorState {
  questions: Question[]
  editingIndex: number
  addingQuestion: boolean
  description: IQuestionBank
}

class QuestionBankEditor extends Component <QuestionBankEditorProps, QuestionBankEditorState> {
  public props: QuestionBankEditorProps
  public state : QuestionBankEditorState = {
    questions: [],
    editingIndex: -1,
    addingQuestion: false,
    description: {}
  }   

  private service: QuestionBankService
       
  constructor(props) {
    super(props)

    this.service = new QuestionBankService(this.props.questionbBankId)
  
    this.service.questions.subscribe(questions => this.setState({ ...this.state, questions }))
    this.service.description.subscribe(description => this.setState({ ...this.state, description}))
  }

  private onEditQuestion = (index: number) => {
    this.setState({ ...this.state, editingIndex: index })
  }

  private onAddQuestion = () => {
    this.setState({ ...this.state, addingQuestion: true })
  }

  private addQuestion = (q: Question) => {
    this.setState({
      ...this.state,
      addingQuestion: false,
    })  

    this.service.addQuestion(q)
  }

  private updateQuestion = (q: Question) => {
    this.setState({
      ...this.state,
      editingIndex: -1
    })  

    this.service.editQuestion(q)
  }

  private onEraseQuestion = (q: Question) => {
    // TODO(salvador-barboza): SHOW CONFIRMATION
    this.service.eraseQuestion(q)
  }

  private onTitleChange = (ev) => {
    const title = ev.target.value
    this.service.setTitle(title)
  }

  public render() {
    return (
      <Container>
        <TitleInput
          onChange={this.onTitleChange}
          value={this.state.description.title}
          placeholder="Titulo del Banco de Preguntas..." />
        {this.state.questions.map((q, index) => 
          this.state.editingIndex === index 
          ? <QuestionEditor 
            question={q} 
            onSaveQuestion={(updatedQuestion) => this.updateQuestion(updatedQuestion)}/> 
          : <QuestionPreview 
            question={q}
            questionIndex={index} 
            onEditQuestionClicked={() => this.onEditQuestion(index)}
            onEraseQuestionClicked={() => this.onEraseQuestion(q)} />
         )}       
         {this.state.addingQuestion && 
          <QuestionEditor onSaveQuestion={this.addQuestion} />}
         {!this.state.addingQuestion && this.state.editingIndex === -1 && 
         <AddButton 
            onClick={this.onAddQuestion}>
            Agregar Pregunta
          </AddButton> }
      </Container>
    )
  }  
}

export default QuestionBankEditor