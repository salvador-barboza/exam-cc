import { css } from 'emotion';

export namespace R {
  export enum Text {
    CORRECT_ANSWER_INPUT_LABEL = 'Respuesta correcta',
    CORRECT_ANSWER_FORMULA_INPUT_LABEL = 'Formula para calcular la respuesta correcta',
    DISTRACTOR_INPUT_LABEL = 'Distractores',
    DISTRACTOR_FORMULA_INPUT_LABEL = 'Formula para calcular el distractor',
    CORRECT_FORMULA = 'Formula Correcta ✓',
    INCORRECT_FORMULA = '❌ No pudimos entender tu formula',
    FORMULA = 'Fx',
    FORMULA_PLACEHOLDER = 'ej. x+2*sin(x*y)',
    STATIC_PLACEHOLDER = 'Respuesta'
  }  

  export namespace Styles {
    export const FLEX_VERTICAL = css({ display: 'flex', flexDirection: 'row'})
    export const FLEX_HORIZONTAL = css({ display: 'flex', flexDirection: 'column'})
  }
}