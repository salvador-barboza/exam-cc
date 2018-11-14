import React from 'react'
import { css } from 'emotion'
import {Background, Popup} from './Components'

interface DeleteQuestionProps{
    show: boolean;
    //valueChanged: (values) => void
}

interface DeleteQuestionState{
    show: boolean;
}

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