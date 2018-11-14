import styled from 'react-emotion'
import { css } from 'emotion'

export const AnswerTextFieldStyle = css({
    fontSize: 17,
    padding: 4,
    borderRadius: 2,
    border: '1px solid #e7bdff',
    maxWidth:200,
})
  
export const Card = styled('div')({
    boxShadow: '0 0 5px 1px #e2e2e2',
    padding: 16,
    display: 'flex', flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
    backgroundColor: '#FFF'
})
  
export const Card2 = styled('div')({
    boxShadow: '0 0 5px 1px #e2e2e2',
    padding: 16,
    display: 'flex', flexDirection: 'column',
    marginBottom: 8,
    alignItems: 'left',
    backgroundColor: '#FFF'
})