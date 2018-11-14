import React, { Component, Fragment } from 'react'
import { Formik, Form, FieldArray, FormikProps }  from 'formik' 
import AnswerFormulaValidator from 'src/models/AnswerFormulaValidator';
import { R } from 'src/Resources';
import { IAnswer } from 'src/models/Question/IQuestion';
import { Title } from './Components';
import Answer from './Answer';

interface AnswerEditorProps {
  answer?: IAnswer
  distractors?: IAnswer[]
  availableVariables: string[]  
  variableQuestionRenameMe?: boolean
  valueChanged: (values, valid: boolean) => void
}

export interface FormValues {
  answer: IAnswer,
  distractors?: IAnswer[]
}

export interface FormError {
  answer: boolean,
  distractors: boolean[]
}


class AnswerEditor extends Component<AnswerEditorProps> {      
  private validator = new AnswerFormulaValidator()
  private validate = (values: FormValues) => {        
    let errors : FormError = {
      answer: false,
      distractors: []
    }

    let valid = false

    errors.answer = values.answer.predicate.length === 0 ||
      !this.validator.checkFormulaValitidy(values.answer.predicate, this.props.availableVariables)

    valid = valid || errors.answer
  
    if (values.distractors) {
      for (let i in values.distractors) {
        const distractor = values.distractors[i]

        if (!distractor.static) {        
          errors.distractors[i] = 
            distractor.predicate.length === 0 ||
            !this.validator.checkFormulaValitidy(
              distractor.predicate, 
              this.props.availableVariables)
            valid = valid || errors.distractors[i]
        }        
      }
    }    
   
    this.props.valueChanged(values, !valid) // Super hacky :v
    return errors
  }

  public render = () => {
    return (      
        <Formik
          validate={this.validate}
          onSubmit={() => {}}
          isInitialValid={true}
          on
          initialValues={{ 
            answer: this.props.answer || { static: true, predicate: '' }, distractors: this.props.distractors || [] 
          }}
          render={({ values, errors, setFieldValue } : FormikProps<FormValues>) => (
            <Form>
              <Title>Respuesta</Title>                                           
              <Answer 
                name="answer.predicate"
                static={!!values.answer && !!values.answer.static}
                error={!!errors.answer}
                onStaticToggleClicked={() => setFieldValue('answer.static', !values.answer.static)}
                onDeleteClicked={()=>{}}
              />                                                 
              <Fragment>
                <Title>{R.Text.DISTRACTOR_INPUT_LABEL}</Title>
                <FieldArray                 
                  name="distractors"
                  render={({ insert, remove, replace }) => (
                      <Fragment>
                        {values.distractors && values.distractors.map((distractor: IAnswer, i) => (
                          <Answer 
                            name={`distractors.${i}.predicate`}
                            static={distractor.static}
                            error={!!errors.distractors && !!errors.distractors[i]}
                            onStaticToggleClicked={() => replace(i, { ...distractor, static: !distractor.static})}
                            onDeleteClicked={()=>remove(i)}
                          />                                                   
                          ) )}
                          <button onClick={() => insert(4, { static: true, predicate: '' } as IAnswer)}>Agregar distractor</button>
                      </Fragment>                      
                    )} />
                  </Fragment>         
            </Form>
          )} />        
    )
  }
}

export default AnswerEditor