import React, { Component } from 'react'
import QuestionBankService from '../../services/QuestionCollectionService'
import { IQuestion } from 'src/models/Question/IQuestion';
import ExamGenerator from '../ExamGenerator';
import ExamRender from '../ExamGenerator/ExamRenderer';

interface ExamMakerProps {
}

interface ExamMakerState {
  selectedQuestionBanks: IQuestion[]
}
// TODO: finsih
class ExamMaker extends Component<ExamMakerProps, ExamMakerState> {
  public state : ExamMakerState
  private service = new QuestionBankService('RpWLrGWSsHFPHCF4OPDo')

  constructor(props) {
    super(props)
  
    this.service.questions.subscribe(questions => {
      this.setState({
        ...this.state, 
        selectedQuestionBanks: questions})
    })

  }

  public render() {
    return (      
      <div>
        <button onClick={this.todo}>boton</button>
        <p>{JSON.stringify(this.state)}</p>
      </div>
    )
  }

  private todo = () => {
    const gen = new ExamGenerator(this.state.selectedQuestionBanks)
    for (let i = 0; i < 3; i++) {
      const exam = gen.generate()
      const renderer = new ExamRender(exam)
      renderer.render(`examen_tipo_${String.fromCharCode(97 + i)}`)
    }    
  }
}

export default ExamMaker
