import React from 'react';
import { Formik, Field, Form, FormikProps } from 'formik';
import styled from 'react-emotion';
import { css } from 'emotion'
import { GeneratorType } from 'src/models/Generators';
import { RangeVariableGeneratorParams } from 'src/models/Generators/RangeVariableGenerator';
import { ArrayVariableGeneratorParams } from 'src/models/Generators/ArrayVariableGenerator';

const Background = styled('div')({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50,
  zIndex: 1
});

const AnswerTextFieldStyle = css({
  fontSize: 17,
  padding: 4,
  borderRadius: 2,
  border: '1px solid #e7bdff'
})

const Popup = styled('div')({
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30,
  position: 'relative',
});


interface VariableEditorProps {
  type: GeneratorType
  onSubmit: (variableIdentifier: string, type: GeneratorType, params: any) => void
}

interface VariableEditorState {
  type: number;
  RangeFrom?: number;
  RangeTo?: number;
  MultipleNums?: number[];
  fromArrayInputString?: string;
}

interface FormValues {
  rangeFrom?: number
  rangeTo?: number
  fromArrayInputString?: string
  generatorType: GeneratorType
  variableIdentifier: string
}

class VariableEditor extends React.Component<VariableEditorProps, VariableEditorState> {
  public state: VariableEditorState = {
    type: this.props.type,
    RangeFrom: 0,
    RangeTo: 0,
    MultipleNums: [],
    fromArrayInputString: ""
  }

  static defaultProps = {
    onSubmit: (...params) => console.log(params)
  }

  private rangeForm = () => {
    return (
      <Form>
        <p>De:</p>
        <Field 
          placeholder="numero" 
          className={AnswerTextFieldStyle} 
          type="text" 
          name="rangeFrom" />
        <p>A:</p>
        <Field 
          placeholder="numero" 
          className={AnswerTextFieldStyle} 
          type="text" 
          name="rangeTo" />
        <br />
      </Form>
    )
  }

  private multpleForm = () => {
    return (
      <Form>
        <p>Valores separados por las comas</p>
        <Field placeholder="1,2,3,4,5" className={AnswerTextFieldStyle} type="text" name="fromArrayInputString" />
        <br />
      </Form>
    )
  }


  private multipleSplitter = (value?: string) => {
    if (value) {
      return value.split(',').map(n => Number(n))
    } else {
      return [0]
    }
  }

  private onSubmitClicked = (values: FormValues) => {
    switch (Number(values.generatorType) as GeneratorType) {
      case GeneratorType.RANGE: 
        this.props.onSubmit(
          values.variableIdentifier,
          GeneratorType.RANGE, 
          { 
            start: values.rangeFrom, 
            end: values.rangeTo 
          } as RangeVariableGeneratorParams)
        break
      case GeneratorType.ARRAY:
          this.props.onSubmit(
            values.variableIdentifier,
            GeneratorType.ARRAY,
            {
              array: this.multipleSplitter(values.fromArrayInputString)
            } as ArrayVariableGeneratorParams
          )
    }
  }

  render() {
    return (
      <Background>
        <Popup>
          {this.props.children}
          <div className="footer">
            <Formik
              onSubmit={this.onSubmitClicked}
              initialValues={{ }}
              render={({values} :FormikProps<FormValues>) => (
                <Form>
                  <p>Letra de la variable:</p>
                  <Field name="variableIdentifier" type="text" />
                  <p>Como se va a generar el valor de esta variable?</p>
                  <Field 
                    type="radio" 
                    name="generatorType" 
                    value={GeneratorType.RANGE} />   
                  <p>Dentro de un rango</p>                                   
                  <Field 
                    type="radio" 
                    name="generatorType" 
                    value={GeneratorType.ARRAY} />
                  <p>Dentro de una lista de valores</p>
                  {Number(values.generatorType) === GeneratorType.RANGE && this.rangeForm()}
                  {Number(values.generatorType) === GeneratorType.ARRAY && this.multpleForm()}
                  <button type="submit">Agregar</button>
                </Form>
              )} />
          </div>        
        </Popup>
      </Background>
    )
  }
}
export default VariableEditor