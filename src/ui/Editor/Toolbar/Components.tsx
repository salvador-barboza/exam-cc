import styled from 'react-emotion';

export const BUTTON_SIZE = 40

export const Container = styled('div')({
  height: BUTTON_SIZE,
  width: '100%',
  border: '1px solid #FAFAFA'
})

export const Button = styled('button')({
  width: BUTTON_SIZE,
  border: 'none',
  borderRight: '1px solid #F0F0F0',
  height: BUTTON_SIZE,
  backgroundColor: 'transparent',
})