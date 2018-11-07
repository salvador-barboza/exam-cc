import styled from 'react-emotion'

export const Container = styled('div')({
    height: 30,
    width: '100%',
})
  
export const Button = styled('button')({  
    border: 'none',
    borderRight: '1px solid #F0F0F0',
    height: 30,
    backgroundColor: 'transparent',
})

export interface PillStyleProps {
    focused: Boolean
}
  
export const Pill = styled('div')((props: PillStyleProps) => ({ 
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