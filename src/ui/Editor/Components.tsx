import styled from 'react-emotion';

export const Container = styled('div')((props: { editable?: Boolean }) => ({
  width: '100%',
  minHeight: props.editable ? 300 : 'auto',
  border: '1px solid #E0E0E0',
  padding: 8,
  backgroundColor: '#FFF',
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
