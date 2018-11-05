import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion';

interface QuestionBankPopUpProps{
    show: boolean;

}

interface QuestionBankPopUpState{
    show: boolean;
    MateriaName: string;
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

const subjects = ["1", "2", "3", "4", "5"];
const listSubjects = subjects.map((subject) =>
  <button>{subject}</button>
);


class QuestionBankPopUp extends React.Component <QuestionBankPopUpProps> {

    public state : QuestionBankPopUpState = {
        show: this.props.show,
        MateriaName: ""
    } 
    
    constructor(props){
        super(props)
    }

    public hide = () => {
        this.setState({show:false})
    }

    render(){
        // Render nothing if the "show" prop is false
        
        if(!this.state.show) {
            return null;
        }
          return (
            //the gray background
            <Background>
                <Popup>
                    {this.props.children}
                    <div className="footer">
                    <button onClick={this.hide} className={css({position:'absolute', right:10,top:10})}>Close</button>
                    <button>{listSubjects}</button>
                    </div>
                </Popup>
            </Background>
          );
    }
}
export default QuestionBankPopUp