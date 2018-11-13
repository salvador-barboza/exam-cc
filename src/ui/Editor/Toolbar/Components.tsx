import styled from 'react-emotion';

export const BUTTON_SIZE = 58

export const Container = styled('div')({
  height: BUTTON_SIZE-20,
  width: '100%',
  border: '1px solid #bfbfbf'
})

export const Button = styled('button')({
  width: BUTTON_SIZE,
  border: 'none',
  borderRight: '1px solid #bfbfbf',
  height: BUTTON_SIZE-20,
  backgroundColor: 'transparent',
})