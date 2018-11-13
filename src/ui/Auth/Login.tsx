import React, { Component } from "react";
import AuthService from 'src/services/AuthService';
import { Form, Field, Formik } from 'formik';
import {css} from 'emotion';

interface FormValues {
  email: string,
  password: string,
  confirmpassword:string
}

interface LoginProps { }
interface LoginState {
  showSignUp:boolean,
  showLogin:boolean
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

const Log_In_Button = css({
  textAlign:"center",
  width:'40%',
  justifyContent:"center",
  height: 35,
  float:"left",

})

const Signup_Button = css({
  textAlign:"center",
  width:'40%',
  justifyContent:"center",
  height: 35,
  float: "right",
})

const Cancel_Button = css({
  textAlign:"center",
  width:'40%',
  justifyContent:"center",
  height: 35,
  float:"right",

})

class Login extends Component<LoginProps,LoginState> {
  public state: LoginState
    constructor(props) {
        super(props)
        this.state = { showLogin: true , showSignUp:false }
    }
  private authService = new AuthService()

  private login = (values: FormValues) => {
    this.authService.login(values.email, values.password)  
  }

   private signup = (values: FormValues) => {
     if(values.password == values.confirmpassword)
     this.authService.signup(values.email, values.password)  
   }


   private signUpState = (id:number) =>{
    if(id == 1)
    this.setState({showSignUp:true})
    else 
      this.setState({showSignUp:false})
    }

   private showLogin = () => {
    return (
      <div> 
      <div className={css({position:"absolute"})}>
       <h2> Iniciar sesion </h2> 
       
      <Formik
        onSubmit={this.login}
        initialValues={{ email: '', password: '' }}
        render={
          () => (
            <Form>
              <p>Email</p>
              <Field name="email" className={Email} type="email" />
              <br/>
              <p>Contraseña</p>
              <Field name="password" className={Password} type="password"/>
              <br/>
              <button type="send" className={Log_In_Button}>Iniciar Sesion</button>
            </Form>)
      } />
        <button  className={Signup_Button} onClick={() => this.signUpState(1)}>   Nueva Cuenta  </button>
        </div> </div>
      )
   }

   private showSignUp = () => {
    return (
     
        <div className={css({position:"absolute"})}>
        <h2> Nueva Cuenta </h2> 
      <Formik
      onSubmit={this.signup}
      initialValues={{ email: 'usuario@ejemplo.com', password: '' }}
      render={
        () => (
          <Form>
            <p>Email</p>
            <Field name="email" className={Email} type="email" />
            <br/>
            <p>Contraseña</p>
            <Field name="password" className={Password} type="password"/>
            <br/>
            <p> Confirmar Contraseña</p>
            <Field name = "confirmpassword" className={Password} type="password"/>
            <button type="send" className={Log_In_Button}>Crear Cuenta</button>
          </Form>)
    } />  
      <button  className = {Cancel_Button} onClick={() => this.signUpState(2)}>  Cancelar  </button>
      </div> 
     )
  }



  public render() {
    let signup = this.state.showSignUp;

    if(signup != true) {
      return (this.showLogin())
    }
    else {
      return (this.showSignUp())

    }
  }
}

export default Login


