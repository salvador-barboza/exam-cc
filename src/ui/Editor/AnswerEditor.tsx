import React, { Component, Fragment } from 'react'
import { Formik, Field, Form, FieldArray, FormikProps }  from 'formik' 
// import AnswerFormulaValidator from 'src/models/AnswerFormulaValidator';
import styled, { css } from 'react-emotion';
import AnswerFormulaValidator from 'src/models/AnswerFormulaValidator';

const Label = styled('label')({
  display: 'block'
})

namespace R {
  export enum Text {
    CORRECT_ANSWER_INPUT_LABEL = 'Respuesta correcta',
    CORRECT_ANSWER_FORMULA_INPUT_LABEL = 'Formula para calcular la respuesta correcta',
    DISTRACTOR_INPUT_LABEL = 'Distractores',
    DISTRACTOR_FORMULA_INPUT_LABEL = 'Formula para calcular el distractor'
  }  
}

interface AnswerEditorProps {
  answer?: string
  distractors?: string[]
  availableVariables: string[]  
  variableQuestionRenameMe?: boolean
  valueChanged: (values) => void
}

export interface FormValues {
  formula?: string,
  distractors?: string[]
}

class AnswerEditor extends Component<AnswerEditorProps> {  
  constructor(props) {
    super(props)
    if (this.props.distractors) {
      this.state.multipleChoice = true
    }
  }
  public state = {
    multipleChoice: false
  }
  
  private toggleMultipleChoice = () => {
    console.log(this.state.multipleChoice)
    this.setState({...this.state, multipleChoice: !this.state.multipleChoice })
  }

  private validator = new AnswerFormulaValidator()
  private validate = (values: FormValues) => {        
    let errors = {
      formula: false,
      distractors: []
    } as any;

    if (this.props.variableQuestionRenameMe) {
      if (values.formula) {
        errors.formula = this.validator.checkFormulaValitidy(values.formula, this.props.availableVariables)
      }
  
      if (values.distractors) {
        for (let i in values.distractors) {
          errors.distractors[i] = this.validator.checkFormulaValitidy(
            values.distractors[i], 
            this.props.availableVariables)
        }
      }  
    }
   

    this.props.valueChanged(values)
// 
    // if () {
    //   errors.formula = 'Required';
    // }

    console.log(errors)

    return errors
  }

  private staticTest = () => {
    return (      
        <Formik
          validate={this.validate}
          onSubmit={console.log}
          isInitialValid={true}
          initialValues={{ formula: this.props.answer, distractors: this.props.distractors || [undefined] }}
          render={({ values, errors } : FormikProps<FormValues>) => (
            <Form>
              <button onClick={this.toggleMultipleChoice}>
                Opcion Multiple? {this.state.multipleChoice ? 'si' : 'no'}
              </button>              
              <Label>{this.props.variableQuestionRenameMe ? R.Text.CORRECT_ANSWER_INPUT_LABEL : R.Text.CORRECT_ANSWER_FORMULA_INPUT_LABEL}</Label>
              <Field placeholder="formula" type="text" name="formula" />          
              {JSON.stringify(errors)}
              {this.state.multipleChoice && 
              <Fragment>
                <Label>{R.Text.DISTRACTOR_INPUT_LABEL}</Label>
                <FieldArray 
                  name="distractors"
                  render={({ insert, remove }) => (
                      <Fragment>
                        {values.distractors && values.distractors.map((_, i) => (
                            <div className={css({ display: 'flex' })}>
                              <Field 
                                placeholder="formula" 
                                className={css({
                                  display: 'block',
                                  backgroundColor: errors.distractors && errors.distractors[i] ? 'none' : 'red'
                                })} 
                                name={`distractors.${i}`} 
                                type="text" />
                              <button onClick={() => remove(i)}>delete</button>
                            </div>
                          ) )}
                        <button onClick={() => insert(4, undefined)}>add</button>
                      </Fragment>
                    )} />
                  </Fragment>}                  
            </Form>
          )} />        
    )
  }

  public render() {
    return (
      <Fragment>
        {this.staticTest()}
      </Fragment>
    )
  }  
}

export default AnswerEditor