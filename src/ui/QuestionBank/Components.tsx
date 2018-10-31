import styled from 'react-emotion';

export const Container = styled('div')({
  padding: 16
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
})

export const AddButton = styled('button')({
  margin: 'auto',
  display: 'block',
  backgroundColor: '#FFF',
  border: 'none',
  borderRadius: 30,
  padding: 10,
  fontSize: 15,
  color: '#c96dff',
  boxShadow: '#dadada 0px 2px 2px 0px',
  ':hover': {
    boxShadow: '#DADADE 0px 3px 9px 0px'
  },
  transition: 'box-shadow .25s ease-in-out'
})