import styled from 'react-emotion';

export const Container = styled('div')({
  padding: 16,
  lineHeight: 1.5
})
 
export const TitleInput = styled('input')({
  fontSize: 30,
  marginBottom: 24,
  width: '100%',
  padding: 8,
  border: 'none',
  color: '#25252',
  borderBottom: '4px solid #cccccc',
  ':focus': {
    borderBottom: '4px solid #c96dff'
  },
  transition: 'border-bottom .15s ease-in-out',  
  backgroundColor: 'transparent',
})
