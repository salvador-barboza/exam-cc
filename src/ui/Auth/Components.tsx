import {css} from 'emotion';
import styled from 'react-emotion';

export const Container = styled('div')({
    padding: 16,
    lineHeight: 1.5, 
    position: 'absolute', 
    left: 0,
    right: 0,
    width: 400,
    margin: 'auto',
    top: 100,
    backgroundColor: '#FFF',
    borderRadius: 6,
    boxShadow: '0 0 15px 2px #808080'
  })

export const Email = css({
    fontSize: 17,
    padding: 4,
    borderRadius: 2,
    border: '1px solid #e7bdff',
    marginBottom:15
})
  
export const Password = css({
    fontSize: 17,
    padding: 4,
    borderRadius: 2,
    border: '1px solid #e7bdff',
    marginBottom:15
})
  
export const Log_In_Button = css({
    textAlign:"center",
    width:'40%',
    justifyContent:"center",
    height: 35,
    float:"left",
  
})
  
export const Signup_Button = css({
    textAlign:"center",
    width:'40%',
    justifyContent:"center",
    height: 35,
    float: "right",
})
  
export const Cancel_Button = css({
    textAlign:"center",
    width:'40%',
    justifyContent:"center",
    height: 35,
    float:"right",
  
})