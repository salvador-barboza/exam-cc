import styled from 'react-emotion'

export interface PillStyleProps {
  focused: Boolean
}

const Pill = styled('div')((props: PillStyleProps) => ({ 
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

export default Pill
