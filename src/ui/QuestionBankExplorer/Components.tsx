import styled from 'react-emotion';
import DeleteIcon from '../../icons/delete.png'

export const Container = styled('div')({
  padding: 16,
  lineHeight: 1.5, 
  position: 'absolute', 
  left: 0,
  right: 0,
  width: 900,
  margin: 'auto',
  top: 80,
})

export const Title = styled('h1')({
  margin: '32px 0 16px 16px',
  color: '#FFF'
})

const BaseCardStyle = {
  padding: 16,
  margin: 16,
  boxShadow: '0 0 10px 0px rgba(165, 165, 165, 0.5)',
  ':hover': {
    boxShadow: '0 0 20px 6px rgba(165, 165, 165, 0.5)'
  },
  transition: 'all .15s ease-in-out',
  fontSize: 24,
  borderRadius: 6,
  display: 'inline-flex',
  height: 150,
  width: 200,
  background: '#FFF',
}

export const SubjectCard = styled('div')({
  ...BaseCardStyle,
  justifyContent: 'start',
  alignItems: 'center',
})

export const BankCard = styled('div')({
  ...BaseCardStyle,  
  flexDirection: "column",
  position: 'relative'
})


export const ButtonContainer = styled('div')({
  position: 'absolute',
  top: 5,
  right: 5,
  height: 25,
  width: 25,
  backgroundImage: `url(${DeleteIcon})`,
  backgroundSize: 'contain',
  cursor: 'pointer'
})

export const BankCount = styled('p')({
  padding: 0,
  margin: '8px 0 0 0',
  fontSize: 16,
  flexGrow: 1,
})
