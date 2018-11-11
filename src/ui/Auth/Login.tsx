import React, { Component } from "react";
import AuthService from 'src/services/AuthService';
import { Form, Field, Formik } from 'formik';



interface FormValues {
  email: string,
  password: string
}

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
      <div> Bienvenido a Easy Exam porfavor inice sesion
      <Formik
        onSubmit={this.login}
        initialValues={{ email: '', password: '' }}
        render={
          () => (
            <Form>
              <Field name="email" type="email" />
              <Field name="password" type="password" 
              />
              <button type="send">login</button>
            </Form>)
      } />      
      </div>
      )
  }
}

export default Login