import * as React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import QuestionBankEditor from './ui/QuestionBank/QuestionBankEditor';
import ExamMaker from './ui/ExamMaker';
import styled from 'react-emotion';
import { User, auth } from 'firebase';
import AuthService from './services/AuthService';
import Login from './ui/Auth/Login';
import SubjectList from './ui/QuestionBankExplorer/SujectList';
import QuestionBankExplorer from './ui/QuestionBankExplorer/QuestionBankBySubjectList';
import { ToastContainer } from 'react-toastify';

const Shell = styled('div')({
  display: 'flex'
})
const Toolbar = styled('div')({
  height: 256,
  width: '100%',
  boxShadow: '0 0px 8px #4c4c4c',
  background: 'linear-gradient(113deg, rgb(0, 149, 255), rgb(51, 51, 153))',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  color: 'white',
  fontSize: 24,
  fontWeight: 100,
  zIndex: 1,
  padding: 16,
})

const LeftContainer = styled('div')({
  flexGrow: 1
})

const MenuItem = styled(Link)({
  height: 64,
  fontWeight: 500,
  marginLeft: 24,
  fontSize: 20,
})


interface AppState {
  user?: User
}

class App extends React.Component<{}, AppState> {
  public state: AppState = {} 
  private authService = new AuthService()

  constructor(props) {    
    super(props)

    this.authService.status.subscribe(user => {
      this.setState({ user })          
    })
  }
  
  public render() {
    return (
      <BrowserRouter>      
        <React.Fragment>
          <ToastContainer />
          <Toolbar>
            <LeftContainer>
              Exam CC 
              <MenuItem to="/question_banks">Materias</MenuItem>
              <MenuItem to="/exam_editor">Crear examen</MenuItem>
            </LeftContainer>
            <button onClick={async () => auth().signOut()}>Cerrar Sesion</button>
            </Toolbar>
          <Shell>            
            <Switch>
            {this.state.user && 
              <React.Fragment>
                <Route path="/bank_editor/:id" render={props => {
                  const questionBankId = props.match.params.id
                  return <QuestionBankEditor questionbBankId={questionBankId} /> 
                }} />
                <Route path="/exam_editor" component={ExamMaker} /> 
                <Route exact path="/question_banks" component={SubjectList} /> 
                <Route path="/question_banks/:id" render={props => {
                  const subject = props.match.params.id
                  return <QuestionBankExplorer subject={subject} /> 
                }} />
              </React.Fragment>}
            {!this.state.user && <Login />}
            </Switch>                  
          </Shell>          
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
