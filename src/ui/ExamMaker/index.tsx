import React, { Component } from 'react'
import QuestionBankService from '../../services/QuestionBankService'
import QuestionBankCollection from './QuestionBankCollection';
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank';
import { QuestionSelector } from 'src/services/QuestionSelector';
import QuestionCollectionService from 'src/services/QuestionCollectionService';
import ExamGenerator from '../../exam-generation';
import ExamKeyRenderer from '../../exam-generation/ExamKeyRenderer';
import ExamRender from '../../exam-generation/ExamRenderer';
import { Container, Title, Subtitle } from './Components'
import styled from 'react-emotion'
import { css } from 'emotion'
import { toast } from 'react-toastify';


interface ExamMakerProps {
}

const EditButton = styled('button')({
  border: 'none',
  backgroundColor: 'transparent',
  padding: 8,
  marginLeft: 8,
  fontSize: 14,
  color: 'red',
  cursor: 'pointer',
})

const AnswerTextFieldStyle = css({
  fontSize: 17,
  padding: 4,
  borderRadius: 2,
  border: '1px solid #e7bdff',
  maxWidth:200,
})

const Card = styled('div')({
  boxShadow: '0 0 5px 1px #e2e2e2',
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 8,
  alignItems: 'stretch',
  backgroundColor: '#FFF'
 })


 

interface ExamMakerState {
  subjects: string[]
  questionBankBySubject: Map<string, IQuestionBank[]>
  questionCount: Map<string, number>
  selectedSubject: string,
  examCount: number,
}
// TODO: finsih
class ExamMaker extends Component<ExamMakerProps, ExamMakerState> {
  public state : ExamMakerState = {
    subjects: [],
    questionBankBySubject: new Map(),
    selectedSubject: '',
    questionCount: new Map(),
    examCount: 1
  }

  private service = new QuestionBankService()
  private servic2 = new QuestionCollectionService('asdf')


  constructor(props) {
    super(props)
  
    this.service.banks.subscribe(banks => { 
      const subjects = Array.from(banks.keys())      
      const newState: ExamMakerState = {
        ...this.state,
        subjects,
        questionBankBySubject: banks
      }

      if (!this.state.selectedSubject) {
        newState.selectedSubject = subjects[0]
      }

      this.setState(newState)
    })
  }

  public render() {
    return (      
      <Container>
        <Title>Generar Examen</Title>      
        <Card>
        <div>
          <Subtitle>Materia del examen:</Subtitle>
          <select onChange={this.onSubjectSelected}>
            {this.state.subjects.map(s =><option value={s}>{s}</option>)}
          </select>

        </div>
        <div>
          <Subtitle>Seleccionar temas</Subtitle>
          <QuestionBankCollection 
            onChange={this.onCountChange}
            questioncollections={this.subjects} />
        </div>        
        
        <Subtitle>Cuantos tipos de examenes se necesitan? </Subtitle>
        <input className={AnswerTextFieldStyle} placeholder="1" onChange={this.onExamCountChanged} value={this.state.examCount}></input>
        <EditButton className={AnswerTextFieldStyle} onClick={this.generateExams}>Generar examenes</EditButton>    
        </Card>    
      </Container>
    )
  }


  private generateExams = () => {
    const banks = Array.from(this.state.questionCount.keys())

    this.servic2.getQuestionsForBank(banks).then((banks => {
      const a = new QuestionSelector(banks, this.state.questionCount)
      const questions = a.compute()
      const gen = new ExamGenerator(questions)
      const claves: string[][] = []
      
      for (let i = 0; i < this.state.examCount; i++) {
        const exam = gen.generate()
        claves.push(exam.clave)
        const renderer = new ExamRender(exam.incisos)
        renderer.render(`examen_tipo`)
      }    

      const keyRenderer = new ExamKeyRenderer(claves)
      keyRenderer.render()
      toast.info("Estamos procesando los examenes. Al finalizar, el archivo se guardara automaticamente.")
    }))
  }

  private onSubjectSelected = (event) => {    
    this.setState({ ...this.state, selectedSubject: event.target.value })
  }

  private onExamCountChanged = (event) => {
    this.setState({ ...this.state, examCount: event.target.value })
  }
  
  private onCountChange = (questionCount: Map<string, number>) => {
    this.setState({ ...this.state, questionCount })
  }

  private get subjects() {
    const { questionBankBySubject, selectedSubject } = this.state
    return questionBankBySubject.get(selectedSubject) || []
  }
}

export default ExamMaker
