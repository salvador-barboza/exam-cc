import styled from 'react-emotion';

export const BUTTON_SIZE = 58

export const Container = styled('div')({
  width: '100%',
  borderBottom: '1px solid #d4d4d4',
  padding: 8,
  backgroundColor: '#f7f7f7',
  display: 'flex',
})

export const Button = styled('button')({
  border: 'none',
  borderRight: '1px solid #bfbfbf',
  height: BUTTON_SIZE-20,
  backgroundColor: 'transparent',
  display: 'inline-flex',
  alignItems: 'center',
  color: '#7c7c7c',
})