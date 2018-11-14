import styled from 'react-emotion'

export const Container = styled('div')({
    height: 30,
    width: '100%',
    border: '1px solid #bfbfbf',
    borderTop: 'none'
})
  
export const Button = styled('button')({  
    border: 'none',
    borderRight: '1px solid #bfbfbf',
    height: 30,
    backgroundColor: 'transparent',
    width: 100,
})

export interface PillStyleProps {
    focused: Boolean
}
  
export const Pill = styled('div')((props: PillStyleProps) => ({ 
    backgroundColor:  '#EAE2FF',
    borderRadius: '12px', 
    display: 'inline-block', 
    padding: '0 12px', 
    fontWeight: 'bold', 
    color: '#6100ED', 
    margin: '0 2px',
    boxSizing: 'border-box',
    border: props.focused ? '1px solid blue' : 'none', 
}))