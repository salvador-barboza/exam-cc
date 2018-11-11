import React, { Component } from "react";
import AuthService from 'src/services/AuthService';
import { Form, Field, Formik } from 'formik';



interface FormValues {
  email: string,
  password: string
}
interface LoginProps{
  showSignUp:boolean,
  showLogin:boolean
}
interface LoginState {
  showSignUp:boolean,
  showLogin:boolean
}
class Login extends Component<LoginProps,LoginState> {

  public state: LoginState
    constructor(props) {
        super(props)
        this.state = { showLogin: props.showLogin, showSignUp:props.showSignUp}
    }

  private authService = new AuthService()

  private login = (values: FormValues) => {
    this.authService.login(values.email, values.password)  
  }

   private signup = (values: FormValues) => {
     this.authService.signup(values.email, values.password)  
   }


   private ShowLogin = () => {
    return (
      <div>
        <div> Bienvenido a Easy Exam Inicie Sesion </div> 
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


       
        <div>  Crear nueva cuenta </div>
        <button onClick={this.SignUpState}>  Crear Nueva Cuenta  </button>
      </div>
      )
   }

    private SignUpState = () =>{
      this.setState({showSignUp:true});
    }

    private ShowSignUp = () => {
      return (
        <div>
        <div>  Crear nueva cuenta </div>
        <Formik
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
       )
    }

  public render() {
    let signup = this.state.showSignUp;

    if(signup != true) {
      return (this.ShowLogin())
    }
    else {
      return (this.ShowSignUp())

    }
  }
}

export default Login