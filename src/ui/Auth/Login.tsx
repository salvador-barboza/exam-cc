import React, { Component } from "react";
import AuthService from 'src/services/AuthService';
import { Form, Field, Formik } from 'formik';
import {css} from 'emotion';

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
  justifyContent:"center",
  height: 35,
  float:"left",

})

const SignUpButton = css({
  textAlign:"center",
  width:'40%',
  justifyContent:"center",
  height: 35,
  float: "right",
})

const CancelButton = css({
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
        this.state = { showLogin: props.showLogin, showSignUp:props.showSignUp}
    }
  private authService = new AuthService()

  private login = (values: FormValues) => {
    this.authService.login(values.email, values.password)  
  }

   private signup = (values: FormValues) => {
     this.authService.signup(values.email, values.password)  
   }


   private SignUpState = (id:number) =>{
    if(id == 1)
    this.setState({showSignUp:true})
    else 
      this.setState({showSignUp:false})
    }

   private ShowLogin = () => {
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
              <button type="send" className={LogInButton}>Login</button>
            </Form>)
      } />
        <button  className={SignUpButton} onClick={() => this.SignUpState(1)}>   Nueva Cuenta  </button>
        </div> </div>
      )
   }

   private ShowSignUp = () => {
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
            <button type="send" className={LogInButton}>Login</button>
          </Form>)
    } />  
      <button  className = {CancelButton} onClick={() => this.SignUpState(2)}>  Cancelar  </button>
      </div> 
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


/*
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
        <button onClick={() => this.SignUpState(1)}>  Crear Nueva Cuenta  </button>
      </div>
      )
   }

    private SignUpState = (id:number) =>{
      if(id == 1)
      this.setState({showSignUp:true})
      else 
        this.setState({showSignUp:false})
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
              <button type="send"> Crear Cuenta </button>
            </Form>)
      } />  
        <button onClick={() => this.SignUpState(2)}>  Cancelar  </button>
        </div> 
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
*/