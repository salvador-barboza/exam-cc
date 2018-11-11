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

   private signup = (values: FormValues) => {
     this.authService.signup(values.email, values.password)  
   }

  public render() {
    return (
      <div>
        <div> Bienvenido a Easy Exam <div>  Inicie Sesion </div></div>

      <Formik
        onSubmit={this.login}
        initialValues={{ email: '', password: '' }}
        render={
          () => (
            <Form>
              <div>Usuario</div>
              <Field name="email" type="email" />
              <div> Contraseña </div>
              <Field name="password" type="password" 
              />
              <button type="send">login</button>
            </Form>)
      } />     

       <div> <div></div></div>
        <div>  Crear nueva cuenta </div>
        <div><Formik
        onSubmit={this.signup}
        initialValues={{ email: 'E-Mail', password: '' }}
        render={
          () => (
            <Form>
              <div>Usuario</div>
              <Field name="email" type="email" />
              <div> Contraseña </div>
              <Field name="password" type="password" 
              />
              <button type="send"> Sign Up </button>
            </Form>)
      } />  </div>
      </div>
      )
  }
}

export default Login