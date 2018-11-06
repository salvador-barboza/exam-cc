import styled from 'react-emotion';

export const Title = styled('h1')({
  margin: '32px 0 16px 16px'
})

const BaseCardStyle = {
  background: 'linear-gradient(to right, #4568dc, #b06ab3)',
  padding: 16,
  margin: 16,
  boxShadow: '0 0 10px 0px rgba(165, 165, 165, 0.5)',
  ':hover': {
    boxShadow: '0 0 20px 6px rgba(165, 165, 165, 0.5)'
  },
  transition: 'all .15s ease-in-out',
  fontSize: 24,
  color: 'white',
  borderRadius: 6,
  display: 'inline-block',
}

export const SubjectCard = styled('div')({
  ...BaseCardStyle,
  height: 150,
  width: 200,
})

export const BankCard = styled('div')({
  ...BaseCardStyle,
  height: 150,
  width: 200,
  display: 'flex',
  flexDirection: 'column'
})


export const ButtonContainer = styled('div')({
  flexGrow: 0,
})


export const BankCount = styled('p')({
  padding: 0,
  margin: '8px 0 0 0',
  fontSize: 16,
  flexGrow: 1,
})
