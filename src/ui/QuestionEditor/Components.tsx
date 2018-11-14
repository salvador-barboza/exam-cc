import styled from 'react-emotion';
import { css } from 'emotion'

export const Background = styled('div')({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50,
  zIndex: 1
});

export const AnswerTextFieldStyle = css({
  fontSize: 17,
  padding: 4,
  borderRadius: 2,
  border: '1px solid #e7bdff'
})

export const Popup = styled('div')({
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30,
  position: 'relative',
});

export const Container = styled('div')((props: { editable?: Boolean }) => ({
  width: '100%',
  minHeight: props.editable ? 300 : 'auto',
  backgroundColor: '#FFF',
  boxShadow: '0 0 6px 0px #b7b7b7',
}))

export const Pill = styled('div')((props: { focused: Boolean }) => ({ 
  backgroundColor: props.focused ? '#AD91F5' : '#E7DFFB',
  borderColor: '#6100ED',
  borderRadius: '12px', 
  display: 'inline-block', 
  padding: '0 12px', 
  fontWeight: 'bold', 
  color: '#6100ED', 
  margin: '0 2px',
  marginTop: '5px',
  boxSizing: 'border-box',
  border:'1px solid blue', 
}))

export const SaveButton = styled('button')((props: { enabled: Boolean }) => ({
  position: 'absolute',
  width: '100%',
  bottom: 0,
  left: 0,
  right: 0,
  background: '#007af8',
  color: '#FFF',
  fontSize: 14,
  padding: 8,
}))