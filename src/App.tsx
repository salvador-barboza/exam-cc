import * as React from 'react';
import './App.css';

//import QuestionBankEditor from './ui/QuestionBank/QuestionBankEditor';
import QuestionBankPopUp from './ui/Exam/QuestionBankPopUp'
class App extends React.Component {
  public render() {
    return (
      //<QuestionBankEditor />
      <QuestionBankPopUp show={true}/>
    );
  }
}

export default App;
