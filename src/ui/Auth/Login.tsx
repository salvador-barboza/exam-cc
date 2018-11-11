import React, { Component } from "react";
import AuthService from 'src/services/AuthService';
import { Form, Field, Formik } from 'formik';
import {css} from 'emotion';

interface FormValues {
  email: string,
  password: string
}

const Email = css({
  fontSize: 17,
  padding: 4,
  borderRadius: 2,
  border: '1px solid #e7bdff',
  marginBottom:15
})

const Password = css({
  fontSize: 17,
  padding: 4,
  borderRadius: 2,
  border: '1px solid #e7bdff',
  marginBottom:15
})

const LogInButton = css({
  textAlign:"center",
  width:'40%',
  marginRight:'30%',
  marginLeft:'30%',
  justifyContent:"center",
  height: 35,
})

class Login extends Component {
  private authService = new AuthService()

  private login = (values: FormValues) => {
    this.authService.login(values.email, values.password)  
  }

  // private signup = (values: FormValues) => {
  //   this.authService.signup(values.email, values.password)  
  // }



  public render() {
    return (
      <div className={css({position:"absolute"})}>
      <Formik
        onSubmit={this.login}
        initialValues={{ email: '', password: '' }}
        render={
          () => (
            <Form>
              <p>Email:</p>
              <Field name="email" className={Email} type="email" />
              <br/>
              <p>Password:</p>
              <Field name="password" className={Password} type="password"/>
              <br/>
              <button type="send" className={LogInButton}>login</button>
            </Form>)
      } />
      </div>      
    )
  }
}

export default Login