import React from 'react'
import { Formik, Field, Form }  from 'formik' 
import { css } from 'emotion'

interface VariableEditorProps{
    show: boolean;
    type: number;
}

interface VariableEditorState{
    show: boolean;
    type: number;
    RangeFrom?: number;
    RangeTo?: number;
    MultipleNums?: number[];
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

public hide = () => {
    this.setState({show:false})
}

private rangeForm = () => {
//probs some css
return(
    <Formik
    onSubmit={console.log}
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
    onSubmit={console.log}
    initialValues={{}}
    render={() => (
        <Form>
            <p>Valores separados por las comas</p>
            <Field placeholder="1,2,3,4,5" type="text" name="MultipleString"></Field>
            <br/>
            <button type="submit">Agregar</button>
        </Form>
    )}
    />
    )
}

/*
private multipleSplitter(){
    var MultipleNums;
    if(this.state.MultipleString!=""){
    MultipleNums = this.state.MultipleString.split(",");
    for(var i=0; i<MultipleNums.length; i++) { MultipleNums[i] = +MultipleNums[i]; }
    console.log(MultipleNums);
    return MultipleNums;
    }else{
        console.log("noMultiple");
        console.log(this.state.MultipleString);
        return 0;
    }
}
*/

private setRange = () => {
    this.setState({type:1})
}

private setMultiple = () => {
    this.setState({type:2})
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
            <p>Como se va a generar el valor de esta variable?</p>
            <input type="radio" name="type" value="rango" onClick={this.setRange}/>Rango<br/>
            <input type="radio" name="type" value="varios" onClick={this.setMultiple}/>Varios valores<br/>
            <p>aqui va el switch</p>
            {this.state.type==1 ? this.rangeForm():this.multpleForm()}  
            </div>
          </div>
        </div>
      );
}



}

export default VariableEditor