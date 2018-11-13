import styled from 'react-emotion';

export const Container = styled('div')({
  padding: 16,
  lineHeight: 1.5, 
  position: 'absolute', 
  left: 0,
  right: 0,
  width: 900,
  margin: 'auto',
  top: 100,
})
 
export const TitleInput = styled('input')({
  fontSize: 40,
  marginBottom: 24,
  width: '100%',
  padding: 8,
  border: 'none',
  color: '#FFF',
  borderBottom: '4px solid rgba(255, 255, 255, .2)',
  ':focus': {
    borderBottom: '4px solid #c96dff'
  },
  transition: 'border-bottom .15s ease-in-out',  
  backgroundColor: 'transparent',
  '::placeholder': {
    color: 'rgba(255, 255, 255, .6)',
  }
})
