import QuestionBankService from "src/services/QuestionBankService"
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { AddButton } from '../shared';
import { Title, SubjectCard } from './Components';
import { css } from 'emotion';

interface QuestionBankExplorerState {
  subjects: string[]
  goToSubject?: string
}

class SubjectList extends Component<{}, QuestionBankExplorerState> {
  public state: QuestionBankExplorerState = {
    subjects: []
  }
  private questionBankCollectionService = new QuestionBankService()

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
    const subject = window.prompt("Porfavor ingrese el nombre de la nueva materia")!!
    this.setState({ goToSubject: subject })
  }

  
  public render() {
    if (this.state.goToSubject) {
      return <Redirect push to={`/question_banks/${this.state.goToSubject}`} />
    }    

    return (
      <div>
        <Title>Materias</Title>
        {this.state.subjects.map(x => 
          <SubjectCard onClick={() => this.goToSubject(x)}>
          <div className={css({textOverflow:'Ellipsis',overflow:'hidden',whiteSpace:'nowrap'})}>
          {x}
          </div>
          </SubjectCard>)}
        <AddButton onClick={() => this.createSubject()}>
          Agregar Materia
        </AddButton>
      </div>
    )
  }
}

export default SubjectList