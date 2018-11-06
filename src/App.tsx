import * as React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import QuestionBankEditor from './ui/QuestionBank/QuestionBankEditor';
import ExamMaker from './ui/ExamMaker';
import styled from 'react-emotion';
import { User, auth } from 'firebase';
import AuthService from './services/AuthService';
import Login from './ui/Auth/Login';
import SubjectList from './ui/QuestionBankExplorer/SujectList';
import QuestionBankExplorer from './ui/QuestionBankExplorer/QuestionBankBySubjectList';


const Shell = styled('div')({
  display: 'flex'
})
const Toolbar = styled('div')({
  height: 64,
  width: '100%',
  boxShadow: '0 0px 8px #4c4c4c',
  background: 'linear-gradient(113deg, rgb(0, 149, 255), rgb(51, 51, 153))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: 24,
  fontWeight: 100,
  zIndex: 1,
})


const MenuItem = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 64,
  fontWeight: 500
})

const SidePanel = styled('div')({
  backgroundColor: '#FFF',
  height: '100vh',
  minWidth: 200,
  boxShadow: '0 0 8px 1px #dadada',
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
        <div>
          <Toolbar>Exam CC <button onClick={async () => auth().signOut()}>log out</button></Toolbar>
          <Shell>
            <SidePanel>              
              <MenuItem to="/question_banks">Banco de Preguntas</MenuItem>
              <MenuItem to="/exam_editor">Crear examen</MenuItem>
            </SidePanel>
            <Switch>
            {this.state.user && 
              <div style={{flexGrow: 1}}>
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

              </div>}
            {!this.state.user && <Login />}
            </Switch>                  
          </Shell>          
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
