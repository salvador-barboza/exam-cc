import QuestionBankCollectionService from "src/services/QuestionBankCollectionService";
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank';
import styled from 'react-emotion';
import { AddButton } from '../shared';


const Card = styled('div')({
  height: 200,
  width: 300,
})


interface QuestionBankExplorerProps {
  subject: string
}

interface QuestionBankExplorerState {
  redirectToQuestionBankId?: string
  questionBanks: IQuestionBank[]
}

class QuestionBankExplorer extends 
  Component<QuestionBankExplorerProps, QuestionBankExplorerState> {
  public state: QuestionBankExplorerState = {
    redirectToQuestionBankId: undefined,
    questionBanks: []
  }
  private questionBankCollectionService = new QuestionBankCollectionService()

  constructor(props) {
    super(props)    

    this.questionBankCollectionService.banks.subscribe(banks => {      
      this.setState({ questionBanks: banks.get(this.props.subject) || [] })
    })
  }

  private onAddQuestionBank = async () => {
    const id = await this.questionBankCollectionService
      .addQuestionBank(this.props.subject)       
    this.setState({ redirectToQuestionBankId: id })
  }

  private onEditQuestionBank = (id) => {
    this.setState({ redirectToQuestionBankId: id })
  }

  private onDeleteQuestionBank = (id) => {
    this.questionBankCollectionService.deleteQuestionBank(id)
  }

  public render() {
    if (this.state.redirectToQuestionBankId) {
      return <Redirect push to={`/bank_editor/${this.state.redirectToQuestionBankId}`} />
    }    

    return (
      <div>
        {this.state.questionBanks.map(x => 
            <Card>
              <button onClick={() => this.onDeleteQuestionBank(x.id)}>borrar</button>
              <button onClick={() => this.onEditQuestionBank(x.id)}>editar</button>
              {x.title}
            </Card>)
        }
        <AddButton 
          onClick={this.onAddQuestionBank}>
          Crear Banco de Preguntas 
        </AddButton>
      </div>
    )
  }
}

export default QuestionBankExplorer