import styled from 'react-emotion'
import { css } from 'emotion'

export const Container = styled('div')({
  padding: 16,
  lineHeight: 1.5, 
  position: 'absolute', 
  left: 0,
  right: 0,
  width: 900,
  margin: 'auto',
  top: 100,
})

export const Title = styled('h1')({
  margin: '32px 0 16px 16px',
  color: '#FFF',
})

export const Subtitle = styled('h2')({
  fontSize: 20,
  color: '#444444',
  fontWeight: 400,
})


export const EditButton = styled('button')((props: { color: string }) => ({
    borderRadius: 5,
    borderColor: 'green',
    backgroundColor: 'transparent',
    padding: 8,
    fontSize: 14,
    color: props.color,
    cursor: 'pointer',
    textAlign: 'center',
    width: 438,
    height: 40,
  }))
  
  export const Background = styled('div')({
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,
  });
  
  export const Popup = styled('div')({
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
    position: 'relative',
    zIndex: 2,
  });
  
  interface ButonProp {
    selected: boolean
  }
  
  export const ButtonCool = styled('button')((state: ButonProp) => ({
    borderColor: '#6100ED',
    borderRadius: 1,
    backgroundColor: state.selected ? '#E7DFFB' : '#fff',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    color: '#6100ED',
    textAlign: 'center',
    width: 438,
    height: 40,
    marginBottom: 10,
    fontSize: 17,
  }));

  export const DeleteButton = styled('button')({
    border: 'none',
    backgroundColor: 'transparent',
    padding: 8,
    marginLeft: 8,
    fontSize: 14,
    color: 'red',
    cursor: 'pointer',
  })
  
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
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 8,
    alignItems: 'stretch',
    backgroundColor: '#FFF'
  })

  