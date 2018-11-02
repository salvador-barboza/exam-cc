import React from 'react'
import { Formik, Field, Form }  from 'formik' 
import { css } from 'emotion'

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
            <div className={css({
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
            })}>
                <div className={css({
                  backgroundColor: '#fff',
                  borderRadius: 5,
                  maxWidth: 500,
                  minHeight: 300,
                  margin: '0 auto',
                  padding: 30
                })}>
                    {this.props.children}
                    <div className="footer">
                    <button onClick={this.hide} >Close</button>
                    <Formik
                    onSubmit={console.log}
                    initialValues={{}}
                    render={() => ( 
                    <Form>
                    <p>Nombre de la variable</p>
                    <Field placeholder="Nombre" type="text" name="VarName"></Field>
                    <br></br>
                    <button type="submit">Agregar</button>
                    </Form>
                    )}
                    />
                    </div>
                </div>
                
            </div>
            
          );
    }
}
export default VariableName