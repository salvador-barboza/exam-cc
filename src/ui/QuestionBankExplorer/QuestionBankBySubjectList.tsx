import QuestionBankService from "src/services/QuestionBankService";
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank';
import { AddButton } from '../shared';
import { Title, BankCard, ButtonContainer, BankCount } from './Components';


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
  private questionBankCollectionService = new QuestionBankService()

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

  private formatQuestionBankCount = (count: number) => {
    return `${count} pregunta${count === 1 ? '' : 's'}.`
  }

  public render() {
    if (this.state.redirectToQuestionBankId) {
      return <Redirect push to={`/bank_editor/${this.state.redirectToQuestionBankId}`} />
    }    

    return (
      <div>
        <Title>{this.props.subject}</Title>
        {this.state.questionBanks.map(x => 
            <BankCard>
              <div>              
                {x.title}
                {x.questionCount &&
                     <BankCount>{this.formatQuestionBankCount(x.questionCount)}</BankCount>}
              </div>
              <ButtonContainer>
                <button onClick={() => this.onDeleteQuestionBank(x.id)}>borrar</button>
                <button onClick={() => this.onEditQuestionBank(x.id)}>editar</button>              
              </ButtonContainer>
            </BankCard>)}
        <AddButton 
          onClick={this.onAddQuestionBank}>
          Crear Banco de Preguntass
        </AddButton>
      </div>
    )
  }
}

export default QuestionBankExplorer