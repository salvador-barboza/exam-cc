import styled  from 'react-emotion';

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