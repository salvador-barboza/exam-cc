import styled from 'react-emotion';

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