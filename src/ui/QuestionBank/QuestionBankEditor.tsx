import React, { Component } from 'react'
import QuestionEditor from '../Editor';
import Question from 'src/models/Question/Question';
import QuestionPreview from './QuestionPreview';
import { Container, TitleInput, AddButton } from './Components';
import QuestionBankService from '../../services/QuestionBankService'


interface QuestionBankEditorProps {}
interface QuestionBankEditorState {
  questions: Question[]
  editingIndex: number
  addingQuestion: boolean
}

class QuestionBankEditor extends Component <QuestionBankEditorProps, QuestionBankEditorState> {
  public state : QuestionBankEditorState = {
    questions: [],
    editingIndex: -1,
    addingQuestion: false
  }   

  private service = new QuestionBankService('123')
       
  constructor(props) {
    super(props)
  
    this.service.data.subscribe(questions => {
      this.setState({...this.state, questions })
    })
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

  public render() {
    return (
      <Container>
        <TitleInput placeholder="Titulo del Banco de Preguntas..."></TitleInput>        
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
         <AddButton onClick={this.onAddQuestion}>Agregar Pregunta</AddButton> }
      </Container>
    )
  }  
}

export default QuestionBankEditor