import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import {IQuestionBank,QuestionCount} from 'src/models/QuestionBank/IQuestionBank'

interface QuestionBankPopUpProps{
    show: boolean
    subjects: IQuestionBank[]
}

interface QuestionBankPopUpState{
    show: boolean
    selected:number[]
}

const EditButton = styled('button')((props: { color: string }) => ({
    borderRadius:5,
    borderColor:'green',
    backgroundColor: 'transparent',
    padding: 8,
    fontSize: 14,
    color: props.color,
    cursor: 'pointer',
    textAlign: 'center',
    width: 438,
    height: 40,
  }))

const Background = styled('div')({
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,
    });

    const Popup = styled('div')({
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 500,
        minHeight: 300,
        margin: '0 auto',
        padding: 30,
        position: 'relative',
    });

    interface ButonProp{
        selected: boolean
    }

    const ButtonCool = styled('button')((state: ButonProp) =>({
        borderColor: '#6100ED',
        borderRadius: 1,
        backgroundColor: state.selected? '#E7DFFB': '#fff',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        color: '#6100ED',
        textAlign: 'center',
        width: 438,
        height: 40,
        marginBottom: 10,
        fontSize: 17,
    }));

class QuestionBankPopUp extends React.Component <QuestionBankPopUpProps,QuestionBankPopUpState> {
    public state: QuestionBankPopUpState 
    constructor(props){
        super(props)
        this.state = ({show: props.show,selected:[]})
    }

    public hide = () => {
        this.setState({show:false})
    }

    public setSelected(id: number){
        let temp = this.state.selected
        if(!this.isInArray(id,temp)){
        temp.push(id)
        this.setState({selected:temp})
        console.log(this.state.selected)
        }else{
        temp.splice(temp.indexOf(id),1)
        this.setState({selected:temp})
        console.log(this.state.selected)
        }
    }

    private isInArray(value:number, array:number[]) {
        return array.indexOf(value) > -1;
      }
      
    private listsubject(subjects: IQuestionBank[]){
        let select = this.state.selected
        return(
        subjects.map((subject,index) => 
        <ButtonCool onClick={()=>this.setSelected(index)} selected={this.isInArray(index,select)}>{subject.title}---{
            this.formatQuestionBankCount(subject.questionCount!!)
        }</ButtonCool>
        )
        )
    }

    private formatQuestionBankCount = ({ easy, medium, hard}: QuestionCount) => {
        const total = easy + medium + hard
        return `${total} pregunta${total === 1 ? '' : 's'}.`
    }

    private showArray = () => {
        if(this.state.selected){
        let temp = this.state.selected
        temp.sort()
        this.setState({selected:temp})
        console.log(this.state.selected)
        }
    }

    render(){
        if(!this.state.show) {
            return null;
        }
          return (
            <Background>
                <Popup>
                    {this.props.children}
                    <div className="footer">
                    <div className={css({overflowY:'scroll', height:400})}>
                    <button onClick={this.hide} className={css({position:'absolute', right:10,top:10})}>Close</button>
                    {this.listsubject(this.props.subjects)}
                    <EditButton color={'green'} onClick={this.showArray}>Confirmar</EditButton>
                    </div>
                    </div>
                </Popup>
            </Background>
          );
    }
}
export default QuestionBankPopUp