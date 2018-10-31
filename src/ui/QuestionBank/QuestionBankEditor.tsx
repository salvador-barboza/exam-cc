import React, { Component } from 'react'
import styled from 'react-emotion'
import QuestionEditor from '../Editor';
import Question from 'src/models/Question/Question';
import Html from 'slate-html-serializer'
import { BlockTypes } from '../Editor/shared';
import Pill from '../Editor/Pill';


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

const html = new Html({ rules })

const Container = styled('div')({
  padding: 16
})

const TitleInput = styled('input')({
  fontSize: 30,
  marginBottom: 24,
  width: '100%',
  '::placeholder': {    
  }
})

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

  private renderStatic = (q: Question, index) => {
    return  (<div>
      <h1>Pregunta {index+1}</h1>
      <div dangerouslySetInnerHTML={{'__html': html.serialize(q.structure)}} />
      <button onClick={() => this.onEditQuestion(index)}>edit</button>
    </div>)
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
          : this.renderStatic(q, index)
         )}       
         {this.state.addingQuestion && 
          <QuestionEditor onSaveQuestion={this.addQuestion} />}
         <button onClick={this.onAddQuestion}></button> 
      </Container>
    )
  }  
}

export default QuestionBankEditor