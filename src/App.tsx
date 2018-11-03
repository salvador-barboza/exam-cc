import * as React from 'react';
import './App.css';
//import QuestionBankEditor from './ui/QuestionBank/QuestionBankEditor';
//import VariableEditor from './ui/Editor/VariableEditor'
//import VariableName from './ui/Editor/VariableName'
//import MateriaName from './ui/MateriaName'
import DeleteQuestion from './ui/Question/DeleteQuestion'


class App extends React.Component {
  public render() {
    return (
      //<QuestionBankEditor />
      //<VariableEditor show={true} type={2}/>
      //<VariableName show={true}/>
      //<MateriaName show={true}/>
      <DeleteQuestion show={true}/>
    );
  }
}

export default App;
