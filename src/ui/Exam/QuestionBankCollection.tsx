import React from 'react'
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank'
import QuestionBankPopUp from './QuestionBankPopUp'
import QuestionCount from './QuestionsCount'

interface QuestionBankCollectionProps {
    questioncollections: IQuestionBank[]
}

interface QuestionBankCollectionState {
    activeBanks: IQuestionBank[],
    showingpopup: boolean,
    bankMap: Map<string, number>
}

class QuestionBankCollection extends React.Component<QuestionBankCollectionProps, QuestionBankCollectionState>{

    constructor(props) {
        super(props)
        this.state = {
            activeBanks: [],
            showingpopup: false,
            bankMap: new Map<string, number>()
        }
    }

    private listBanks(banks: IQuestionBank[]) {
         

        return (
            banks.map((bank) =>
                <QuestionCount onRemove={()=>this.removeBank(bank)} questioncollection={bank} currentnumber={0}
                    onClicked={(questioncount) => this.AddQuestionCount(questioncount, bank.id!!)} />
            )
        )
    }

    private removeBank(bank:IQuestionBank){
        let bMap = this.state.bankMap
        let index = this.state.activeBanks.indexOf(bank)
        console.log(bMap)
        bMap.delete(bank.id!!)
        console.log(bMap)
        this.setState({bankMap:bMap})
        let aBanks = this.state.activeBanks
        if (index > -1) {
            aBanks.splice(index, 1);
          }
        this.setState({activeBanks:aBanks})
    }

    private AddQuestionCount(questioncount: number, id: string) {
        let bMap = this.state.bankMap
        bMap.set(id, questioncount)
        this.setState({ bankMap: bMap })
        console.log(this.state.bankMap)
    }

    private CheckQuestionBank():IQuestionBank[] {
        let temp:IQuestionBank[] = []
        let qBanks = this.props.questioncollections
        let bMap = this.state.bankMap
        qBanks.map((bank) =>
        {
                    if(!bMap.has(bank.id!!)){
                    temp.push(bank);                        
                    }
        }
        )
        return temp
    }
     
    private AddQuestionBank(ids: string[]) {
        let bMap = this.state.bankMap;
        ids.map((id) => {
            
            if(!bMap.has(id)){  
                bMap.set(id,0)}
           
            let temp = this.props.questioncollections.find(x => x.id == id)
            if (temp != null) {
                let temparray = this.state.activeBanks
                temparray.push(temp)
                this.setState({ activeBanks: temparray })
            } else {

            }
            console.log(this.state.bankMap)
            console.log(temp)
        })

        this.setState({showingpopup:false})
        //  myArray.find(x => x.id === '45').foo;
    }

    public render() {
        return (
            <div>
                {this.state.showingpopup && <QuestionBankPopUp onHide={()=>this.setState({showingpopup:false})}
                show={this.state.showingpopup} subjects={this.CheckQuestionBank()} onClicked={(id) => this.AddQuestionBank(id)} />}
                {this.listBanks(this.state.activeBanks)}
                <button onClick={() => this.setState({ showingpopup: true })}>Add bank</button>

            </div>
        );
    }



}
export default QuestionBankCollection