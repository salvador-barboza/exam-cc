import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion';

interface DeleteQuestionProps{
    show: boolean;
    //valueChanged: (values) => void
}

interface DeleteQuestionState{
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

class DeleteQuestion extends React.Component <DeleteQuestionProps> {
    public state : DeleteQuestionState = {
        show: this.props.show
    }

    constructor(props){
        super(props)
    }

    public hide = () => {
        this.setState({show:false})
    }
/*
    public delete = () => {

    }
*/
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
                    <h2>Estas seguro de que quieres borrar la pregunta?</h2>
                    <p>Una vez borrada la preugnta no se podra recuperar</p>
                    <button onClick={this.hide}>No</button>
                    <button>Si</button>
                    </div>
                </Popup>
            </Background>
          );
    }
}
export default DeleteQuestion