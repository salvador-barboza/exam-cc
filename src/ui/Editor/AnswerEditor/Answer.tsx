import React from 'react'
import { AnswerContainer, FormulaError, FormulaToggleButton, Styles } from './Components';
import { Field } from 'formik';
import { R } from 'src/Resources';
import { css } from 'emotion';


interface IAnswerProps {
  static: boolean
  error: boolean
  name: string
  onStaticToggleClicked: () => void
}

const Answer = (props: IAnswerProps) => (
  <AnswerContainer>   
    <div className={`
      ${R.Styles.FLEX_HORIZONTAL}
      ${css({ margin: '8px 0', flexGrow: 1 })}`}>               
      <Field 
        placeholder={props.static 
          ? R.Text.STATIC_PLACEHOLDER
          : R.Text.FORMULA_PLACEHOLDER
        } 
        className={Styles.AnswerTextField} 
        name={props.name} 
        type="text" />
        {!props.static && 
          <FormulaError error={props.error}>
            {props.error 
              ? R.Text.INCORRECT_FORMULA 
              : R.Text.CORRECT_FORMULA } 
          </FormulaError>}
    </div>                            
    <FormulaToggleButton
      selected={!props.static} 
      onClick={props.onStaticToggleClicked}>
      {R.Text.FORMULA}
    </FormulaToggleButton>                            
  </AnswerContainer>   
)

export default Answer
