import styled from 'react-emotion';

export interface ContainerProps {
  editable?: Boolean
}

export const Container = styled('div')((props: ContainerProps) => ({
  width: '100%',
  minHeight: props.editable ? 300 : 'auto',
  border: '1px solid #E0E0E0',
}))


export interface PillStyleProps {
  focused: Boolean
}

export const Pill = styled('div')((props: PillStyleProps) => ({ 
  backgroundColor:  '#6200EE',
  borderRadius: '12px', 
  display: 'inline-block', 
  padding: '0 12px', 
  fontWeight: 'bold', 
  color: 'rgba(255,255,255,0.85)', 
  margin: '0 2px',
  boxSizing: 'border-box',
  border: props.focused ? '1px solid blue' : 'none', 
}))
