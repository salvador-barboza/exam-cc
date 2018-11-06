import QuestionBankCollectionService from "src/services/QuestionBankCollectionService"
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import styled from 'react-emotion'
import { AddButton } from '../shared';


const Card = styled('div')({
  height: 150,
  width: 200,
  background: 'linear-gradient(to right, #4568dc, #b06ab3)',
  padding: 16,
  margin: 16,
  boxShadow: '0 0 10px 0px rgba(165, 165, 165, 0.5)',
  ':hover': {
    boxShadow: '0 0 20px 6px rgba(165, 165, 165, 0.5)'
  },
  transition: 'all .15s ease-in-out',
  fontSize: 24,
  color: 'white',
  borderRadius: 6,
  display: 'inline-block',
})

interface QuestionBankExplorerState {
  subjects: string[]
  goToSubject?: string
}

class SubjectList extends Component<{}, QuestionBankExplorerState> {
  public state: QuestionBankExplorerState = {
    subjects: []
  }
  private questionBankCollectionService = new QuestionBankCollectionService()

  constructor(props) {
    super(props)

    this.questionBankCollectionService.subjects.subscribe(subjects => {
      this.setState({ subjects })
    })
  }

  private goToSubject = (subject: string) => {
    this.setState({ goToSubject: subject })
  }

  private createSubject = () => {
    const subject = window.prompt("subject")!!
    this.setState({ goToSubject: subject })
  }

  
  public render() {
    if (this.state.goToSubject) {
      return <Redirect push to={`/question_banks/${this.state.goToSubject}`} />
    }    

    return (
      <div>
        {this.state.subjects.map(x => <Card onClick={() => this.goToSubject(x)}>{x}</Card>)}
        <AddButton onClick={() => this.createSubject()}>
          Agregar Materia
        </AddButton>
      </div>
    )
  }
}

export default SubjectList