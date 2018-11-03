import React from 'react';
import { Formik, Field, Form }  from 'formik';
import styled from 'react-emotion';
import {css} from 'emotion';
interface VariableEditorProps{
    show: boolean;
    type: number;
    //valueChanged: (values) => void
}

const Background = styled('div')({
position: 'fixed',
top: 0,
bottom: 0,
left: 0,
right: 0,
backgroundColor: '#000000',
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


interface VariableEditorState{
    show: boolean;
    type: number;
    RangeFrom?: number;
    RangeTo?: number;
    MultipleNums?: number[];
    MultipleString?: string;
}

interface FormValues{
    RangeFrom?: number;
    RangeTo?: number;
    MultipleString?: string;
}

class VariableEditor extends React.Component <VariableEditorProps> {

public state : VariableEditorState = {
    show: this.props.show,
    type: this.props.type,
    RangeFrom: 0,
    RangeTo: 0,
    MultipleNums: [],
    MultipleString: ""
} 

constructor(props){
    super(props)
}

public hide = (): void => {
    this.setState({show:false})
}

private rangeForm = () => {
//probs some css
return(
    <Formik
    onSubmit={this.onSubmitClicked}
    initialValues={{}}
    render={() => (
    <Form>
        <p>De:</p>
        <Field placeholder="numero" type="text" name="RangeFrom"/>
        <p>A:</p>
        <Field placeholder="numero" type="text" name="RangeTo"/>
        <br/>
        <button type="submit">Agregar</button>
    </Form>
    )}
    />
)
}

private multpleForm = () => {
    //probs some css
    return(
    <Formik
    onSubmit={this.onSubmitClicked}
    initialValues={{}}
    render={() => (
        <Form>
            <p>Valores separados por las comas</p>
            <Field placeholder="1,2,3,4,5" type="text" name="MultipleString"/>
            <br/>
            <button type="submit">Agregar</button>
        </Form>
    )}
    />
    )
}


private multipleSplitter = (value:string) =>{

    if(value!=undefined){
        return value.split(',').map(n => Number(n))
    }else{
        return [0]
    }
}



private setRange = (): void => {
    this.setState({type:1})

}

private setMultiple = (): void => {
    this.setState({type:2})
}

private setArray = (value:number[]): void => {
    this.setState({MultipleNums:value})
}
private onSubmitClicked = (values: FormValues) => { 
    if(this.state.type==1){
        values.MultipleString='';
    }else{
        values.RangeFrom=0;
        values.RangeTo=0;
        if(values.MultipleString!=undefined){
        this.setArray(this.multipleSplitter(values.MultipleString));
        console.log(this.state.MultipleNums)
        }
    }
}

render(){
    // Render nothing if the "show" prop is false
    
    if(!this.state.show) {
        return null;
    }
      return (
        //the gray background
        //<div className={backgroundDiv})}>
        //<div className='backgroundDiv'>
        <Background>
            <Popup>
            {this.props.children}
            <div className="footer">
            <button onClick={this.hide} className={css({position:'absolute', right:10,top:10})}>Close</button>
            <p>Como se va a generar el valor de esta variable?</p>
            <input type="radio" name="type" value="rango" checked={this.state.type==1?true:false} onClick={this.setRange}/>Rango<br/>
            <input type="radio" name="type" value="varios" checked={!(this.state.type==1)?true:false} onClick={this.setMultiple}/>Varios valores<br/>
            <p>aqui va el switch</p>
            {this.state.type==1 ? this.rangeForm():this.multpleForm()}  
            </div>
            </Popup>
        </Background>
      );
}
}
export default VariableEditor