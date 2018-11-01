import * as React from 'react';
import './App.css';
//import QuestionBankEditor from './ui/QuestionBank/QuestionBankEditor';
import VariableEditor from './ui/Editor/VariableEditor'

class App extends React.Component {
  public render() {
    return (
      //<QuestionBankEditor />
      <VariableEditor show={true} type={2}/>
    );
  }
}

export default App;
