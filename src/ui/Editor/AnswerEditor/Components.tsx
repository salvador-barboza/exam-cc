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

export const EditButton = styled('button')((props: { color: string }) => ({
  borderRadius: 5,
  borderColor: 'green',
  backgroundColor: 'transparent',
  padding: 8,
  fontSize: 14,
  color: props.color,
  cursor: 'pointer',
  textAlign: 'center',
  width: 438,
  height: 40,
}))

export const Background = styled('div')({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50,
});

export const Popup = styled('div')({
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30,
  position: 'relative',
});

interface ButonProp {
  selected: boolean
}

export const ButtonCool = styled('button')((state: ButonProp) => ({
  borderColor: '#6100ED',
  borderRadius: 1,
  backgroundColor: state.selected ? '#E7DFFB' : '#fff',
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  color: '#6100ED',
  textAlign: 'center',
  width: 438,
  height: 40,
  marginBottom: 10,
  fontSize: 17,
}));

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
