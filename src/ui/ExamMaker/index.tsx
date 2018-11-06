import React, { Component } from 'react'
import QuestionBankService from '../../services/QuestionBankService'
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
  private service = new QuestionBankService( 'yihEXP3ewJVV35COsowN')

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
    const exam = gen.generate(1)
    const renderer = new ExamRender(exam)
    renderer.render()
  }
}

export default ExamMaker
