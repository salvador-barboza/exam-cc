import React, { Component } from 'react'
import QuestionEditor from '../Editor';
import Question from 'src/models/Question/Question';
import QuestionPreview from './QuestionPreview';
import { Container, TitleInput, AddButton } from './Components';


interface QuestionBankEditorProps {}
interface QuestionBankEditorState {
  questions: Question[],
  editingIndex: number,
  addingQuestion: boolean
}

/** Distractores */
class QuestionBankEditor extends Component <QuestionBankEditorProps, QuestionBankEditorState> {
  public state : QuestionBankEditorState = {
    questions: [],
    editingIndex: -1,
    addingQuestion: false
  }   

  private onEditQuestion = (index: number) => {
    this.setState({ ...this.state, editingIndex: index })
  }

  private onAddQuestion = () => {
    this.setState({ ...this.state, addingQuestion: true })
  }

  private addQuestion = (q: Question) => {
    this.state.questions.push(q)
    this.setState({
      ...this.state,
      questions: this.state.questions,
      addingQuestion: false,
    })  
  }

  private updateQuestion = (q: Question, index: number) => {
    this.state.questions[index] = q
    this.setState({
      ...this.state,
      questions: this.state.questions,
      editingIndex: -1
    })  
  }

  public render() {
    return (
      <Container>
        <TitleInput placeholder="Titulo del Banco de Preguntas..."></TitleInput>        
        {this.state.questions.map((q, index) => 
          this.state.editingIndex === index 
          ? <QuestionEditor 
            question={q} 
            onSaveQuestion={(updatedQuestion) => this.updateQuestion(updatedQuestion, index)}/> 
          : 
          <QuestionPreview 
            question={q}
            questionIndex={index} 
            onEditQuestionClicked={() => this.onEditQuestion(index)} />
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