import React from 'react'
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank'
import QuestionBankPopUp from './QuestionBankPopUp'
import QuestionCount from './QuestionsCount'

interface QuestionBankCollectionProps {
    questioncollections: IQuestionBank[]
}

interface QuestionBankCollectionState {
    showingpopup: boolean,
    bankMap: Map<string, number>
}

class QuestionBankCollection extends React.Component<QuestionBankCollectionProps, QuestionBankCollectionState>{

    constructor(props) {
        super(props)
        this.state = {
            showingpopup: false,
            bankMap: new Map<string, number>()
        }
    }

    private removeBank(bank: IQuestionBank) {
        let { bankMap } = this.state
        bankMap.delete(bank.id!!)
        this.setState({ bankMap })
    }

    private AddQuestionCount(questioncount: number, id: string) {
        let bMap = this.state.bankMap
        bMap.set(id, questioncount)
        this.setState({ bankMap: bMap })
    }

    private CheckQuestionBank(): IQuestionBank[] {
        let temp: IQuestionBank[] = []
        let qBanks = this.props.questioncollections
        let bMap = this.state.bankMap
        qBanks.map((bank) => {
            if (!bMap.has(bank.id!!)) {
                temp.push(bank);
            }
        }
        )
        return temp
    }

    private AddQuestionBank(ids: string[]) {
        let bMap = this.state.bankMap;
        ids.map((id) => {

            if (!bMap.has(id)) {
                bMap.set(id, 0)
            }
        })

        this.setState({ showingpopup: false })
    }

    // refactorizen esto lo deje del recto
    public render() {
        return (
            <div>
                {this.state.showingpopup && <QuestionBankPopUp onHide={() => this.setState({ showingpopup: false })}
                    show={this.state.showingpopup} subjects={this.CheckQuestionBank()} onClicked={(id) => this.AddQuestionBank(id)} />}
                {this.props.questioncollections
                    .filter(x => this.state.bankMap.has(x.id!!))
                    .map((bank) =>
                        (
                            <QuestionCount
                                onRemove={() => this.removeBank(bank)}
                                questioncollection={bank}
                                currentnumber={this.state.bankMap.get(bank.id!!)!!}
                                onClicked={(questioncount) => this.AddQuestionCount(questioncount, bank.id!!)} />))}
                <button onClick={() => this.setState({ showingpopup: true })}>Add bank</button>
            </div>
        );
    }



}
export default QuestionBankCollection
