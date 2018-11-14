import styled from 'react-emotion';

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
 
export const TitleInput = styled('input')({
  fontSize: 40,
  marginBottom: 24,
  width: '100%',
  padding: 8,
  border: 'none',
  color: '#FFF',
  borderBottom: '4px solid rgba(255, 255, 255, .2)',
  ':focus': {
    borderBottom: '4px solid #c96dff'
  },
  transition: 'border-bottom .15s ease-in-out',  
  backgroundColor: 'transparent',
  '::placeholder': {
    color: 'rgba(255, 255, 255, .6)',
  }
})

export const Card = styled('div')({
  borderBottom: '1px solid #c3c3c3',
  padding: 16,
  display: 'flex', flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#FFF'
})

export const HeaderContainer = styled('div')({
  display: 'flex', justifyContent:'space-between' 
})

export const EditButton = styled('button')((props: { color: string }) => ({
  border: 'none',
  backgroundColor: 'transparent',
  padding: 8,
  marginLeft: 8,
  fontSize: 14,
  color: props.color,
  cursor: 'pointer',
}))

export const Number = styled('div')({
  flexGrow: 0,
  fontSize: 25,
  fontWeight: 600,
  color: '#737373',
  marginRight: 19,
  borderRight: '2px solid #c3c3c3',
  paddingRight: 16,
})

export const Preview = styled('div')({
  flexGrow: 1
})
