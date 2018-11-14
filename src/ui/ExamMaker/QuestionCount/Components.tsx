import styled from 'react-emotion';
import DeleteIcon from '../../icons/delete.png'

export const Container = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 400,
})
  
export const Name = styled('h2')({
    margin: 0,
    flexGrow: 1,
    fontWeight: 400,
    fontSize: 16,
})
  
export const Count = styled('div')({
    display: 'inline-flex',
    justifyContent: 'space-between',
    flex: '0 1 100px'
})
  
export const DeleteButton = styled('img')({
    src: DeleteIcon,
    width: 24,
    height: 24,
    marginRight: 16,
    cursor: 'pointer',
})
  
export const ChangeButton = styled('div')({
    height: 20,
    width: 20,
    lineHeight: '20px',
    textAlign: 'center',
    borderRadius: '100%',
    backgroundColor: '#FFF',
    boxShadow: '0 0 3px #a2a2a2',
    fontSize: 20,
    cursor: 'pointer',
  })