import React from 'react'
import styled from 'react-emotion';

const Container = styled('div')({
  marginTop: 24,
})

const Decoration = styled('div')({
  borderBottom: '1px solid black',
  width: 150,
  display: 'inline-block'
})

export default () => (
  <Container>
    <span>Respuesta: </span><Decoration>&nbsp;</Decoration>
  </Container>
)