import React from 'react'
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank'
import QuestionBankPopUp from './QuestionBankPopUp'
import QuestionCount from './QuestionsCount'
import { css } from 'emotion'

interface QuestionBankCollectionProps {
  questioncollections: IQuestionBank[]
  onChange: (count: Map<string, number>) => void
}

interface QuestionBankCollectionState {
  showingpopup: boolean,
  questionBankSelectedCount: Map<string, number>
}

class QuestionBankCollection extends React.Component<QuestionBankCollectionProps, QuestionBankCollectionState>{
  public state = {
    showingpopup: false,
    questionBankSelectedCount: new Map<string, number>()
  }

  private removeBank(bank: IQuestionBank) {
    let { questionBankSelectedCount } = this.state
    questionBankSelectedCount.delete(bank.id!!)
    this.setState({ questionBankSelectedCount })
  }

  private addQuestionCount(questioncount: number, id: string) {
    let { questionBankSelectedCount } = this.state
    questionBankSelectedCount.set(id, questioncount)
    
    this.setState(
      { questionBankSelectedCount }, 
      () => this.props.onChange(this.state.questionBankSelectedCount))    
  }

  private get nonSelectedQuestionBanks(): IQuestionBank[] {
    let qBanks = this.props.questioncollections
    let bMap = this.state.questionBankSelectedCount

    return qBanks
      .filter(b => !bMap.has(b.id!))
  }

  private get selectedQuestionBanks(): IQuestionBank[] {
    let qBanks = this.props.questioncollections
    let bMap = this.state.questionBankSelectedCount

    return qBanks
      .filter(b => bMap.has(b.id!))
  }

  private onQuestionBankSubmited = (ids: string[]) => {
    let bMap = this.state.questionBankSelectedCount
    ids.forEach(id => !bMap.has(id) && bMap.set(id, 0))        

    this.setState({ questionBankSelectedCount: bMap, showingpopup: false })
  }

  public render() {
    return (
      <div>
        {this.state.showingpopup &&
          <QuestionBankPopUp
            subjects={this.nonSelectedQuestionBanks}
            onSubmit={this.onQuestionBankSubmited} />}
        {this.selectedQuestionBanks.map((bank) => ( 
          <QuestionCount
            onRemove={() => this.removeBank(bank)}
            questioncollection={bank}
            currentnumber={this.state.questionBankSelectedCount.get(bank.id!!)!!}
            onClicked={questioncount => this.addQuestionCount(questioncount, bank.id!!)} />
          )
        )}
        <button className={css({borderRadius:5, borderColor:'#03db00', fontSize:20, marginTop:20})} 
        onClick={() => this.setState({ showingpopup: true })}>Add bank</button>
      </div>
    );
  }



}
export default QuestionBankCollection
