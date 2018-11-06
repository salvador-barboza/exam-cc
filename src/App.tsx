import * as React from 'react';
import './App.css';
import SubjectsQuestionBanksCount from './ui/Exam/SubjectQuestionBanksCount'

//import QuestionBankEditor from './ui/QuestionBank/QuestionBankEditor';
import QuestionBankPopUp from './ui/Exam/QuestionBankPopUp'
class App extends React.Component {
  public render() {
    return (
      //<QuestionBankEditor />
      <div>

      <QuestionBankPopUp show={true}/>
      <SubjectsQuestionBanksCount/>
      </div>
    );
  }
}

export default App;
