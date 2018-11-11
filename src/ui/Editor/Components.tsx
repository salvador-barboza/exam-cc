import styled from 'react-emotion';

export const Container = styled('div')((props: { editable?: Boolean }) => ({
  width: '100%',
  minHeight: props.editable ? 300 : 'auto',
  border: '1px solid #E0E0E0',
  padding: 8,
  backgroundColor: '#FFF',
}))

export const Pill = styled('div')((props: { focused: Boolean }) => ({ 
  backgroundColor:  'red',
  borderRadius: '12px', 
  display: 'inline-block', 
  padding: '0 12px', 
  fontWeight: 'bold', 
  color: 'rgba(255,255,255,0.85)', 
  margin: '0 2px',
  boxSizing: 'border-box',
  border: props.focused ? '1px solid blue' : 'none', 
}))
