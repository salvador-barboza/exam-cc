import styled, { css } from 'react-emotion';

export const Label = styled('label')({
  paddingRight: 16,
  color: '#636363'
})

export const Title = styled('h2')({
  fontSize: 24,
  fontWeight: 500,
  color: '#808080',
  borderBottom: '2px solid #c96dff',
  width: 'fit-content',
  paddingBottom: 8,
})

interface FormulaErrorProps {
  error: boolean
}

export const FormulaError = styled('i')((props: FormulaErrorProps) => ({
  color: props.error ? 'red' : '#4fc153',
  fontWeight: 'bold',
  boxShadow: '0px 1px 3px 0px #d4d4d4',
  padding: 4,
  fontSize: 12
}))


interface FormulaToggleButtonProps {
  selected: boolean
}

export const FormulaToggleButton = styled('div')((props: FormulaToggleButtonProps) => ({
  padding: '6px',
  color: 'white',
  borderRadius: '4px',
  backgroundColor: props.selected ? '#4CAF50' : '#BDBDBD',
  marginLeft: '22px',
  boxShadow: props.selected ? '0 2px 10px 2.2px #43A047' : '0 2px 7px 0px #9e9999',  
  transition: 'all .25s ease-in-out',
  cursor: 'pointer'
}))

export const AnswerContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
})


export namespace Styles {
  export const AnswerTextField = css({
    fontSize: 17,
    padding: 8,
    borderRadius: 2,
    border: '1px solid #e7bdff'
  })
}
