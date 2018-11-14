import React from 'react'
import { Formik, Field, Form }  from 'formik' 
import { css } from 'emotion'
import {AnswerTextFieldStyle, Background, Popup} from './Components'

interface VariableNameProps{
    show: boolean;
    //valueChanged: (values) => void
}

interface VariableNameState{
    show: boolean;
    varName: string;
}
    

class VariableName extends React.Component <VariableNameProps> {

    public state : VariableNameState = {
        show: this.props.show,
        varName: ""
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
                    <Formik
                    onSubmit={console.log}
                    initialValues={{}}
                    render={() => ( 
                    <Form>
                    <p>Nombre de la variable</p>
                    <Field placeholder="Nombre" className={AnswerTextFieldStyle} type="text" name="VarName"></Field>
                    <br></br>
                    <button type="submit">Agregar</button>
                    </Form>
                    )}
                    />
                    </div>
                </Popup>
            </Background>
            
          );
    }
}
export default VariableName