import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import {IQuestionBankDescription} from 'src/models/QuestionBank/IQuestionBank'


interface QuestionBankPopUpProps{
    show: boolean;
    subjects?: IQuestionBankDescription[];
}

interface QuestionBankPopUpState{
    show: boolean;
}

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

    const ButtonCool = styled('button')((props: selectedProps) =>({
        borderColor: '#6100ED',
        borderRadius: 1,
        backgroundColor: '#E7DFFB',
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
        select: props.selected,
    }));

    interface selectedProps{
        selected: boolean
    }

class QuestionBankPopUp extends React.Component <QuestionBankPopUpProps,QuestionBankPopUpState> {
    public state: QuestionBankPopUpState 
    constructor(props){
        super(props)
        this.state = ({show: props.show})
    }

    public hide = () => {
        this.setState({show:false})
    }

    private listsubject(subjects: IQuestionBankDescription[]){
        return(
        subjects.map((subject) =>
        <ButtonCool>{subject.title}</ButtonCool>
        )
        )
    }

    render(){
        // Render nothing if the "show" prop is false
        var arr:IQuestionBankDescription[] = [{id:"01",title:"sumas"},{id:"02",title:"restas"},{id:"03",title:"multiplicaciones"}]
        if(!this.state.show) {
            return null;
        }
          return (
            //the gray background
            <Background>
                <Popup>
                    {this.props.children}
                    <div className="footer">
                    <div className={css({overflowY:'scroll', height:400})}>
                    <button onClick={this.hide} className={css({position:'absolute', right:10,top:10})}>Close</button>
                    {this.listsubject(arr)}
                    </div>
                    </div>
                </Popup>
            </Background>
          );
    }
}
export default QuestionBankPopUp