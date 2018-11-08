import React from 'react'
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank'
import QuestionBankPopUp from'./QuestionBankPopUp'
import QuestionCount from './QuestionsCount'

interface QuestionBankCollectionProps{
  questioncollections:IQuestionBank[]
}

interface QuestionBankCollectionState{   
    activeBanks:IQuestionBank[],
    showingpopup:boolean,
    bankMap:Map<string,number>
}

class QuestionBankCollection extends React.Component<QuestionBankCollectionProps, QuestionBankCollectionState>{
    
    constructor(props) {
        super(props) 
        this.state = { 
            activeBanks:[],
            showingpopup:false,
            bankMap: new Map<string,number>()
        }
        
    }

    private listBanks(banks: IQuestionBank[]) {
        return (
            banks.map((bank) =>
            <QuestionCount questioncollection={bank} currentnumber={0} 
            onClicked={(questioncount)=>this.AddQuestionCount(questioncount,bank.id!!)}/>
            )
        )
    }

    private AddQuestionCount(questioncount:number,id:string){
        
        let bMap = this.state.bankMap;
        bMap.set(id,questioncount);
        
    }
     private AddQuestionBank(id:string){
        //let questionColl = this.props.questioncollections;
        //let temp = this.state.activeBanks
        //temp.push(this.props.QuestionBankCollection.find('id' == id))
        let temp = this.props.questioncollections.find(x=> x.id == id)
        if(temp!=null){
        let temparray = this.state.activeBanks
        temparray.push(temp)
        this.setState({activeBanks:temparray})
        }else{

        }
        console.log(this.state.bankMap)
        console.log(temp)
       //  myArray.find(x => x.id === '45').foo;
     }
               


    public render(){
       return (
        <div>
            {this.state.showingpopup && <QuestionBankPopUp show={this.state.showingpopup} subjects={this.props.questioncollections} onClicked={(id)=>this.AddQuestionBank(id)}/>}
            {this.listBanks(this.state.activeBanks)}
            <button onClick={()=>this.setState({showingpopup:true})}>Add bank</button>
          
        </div>
        );
    }
    
    

}
export default QuestionBankCollection