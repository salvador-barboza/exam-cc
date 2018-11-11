/* tslint:ignore-next */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import QuestionBankCollection from './ui/Exam/QuestionBankCollection'
ReactDOM.render(
  <QuestionBankCollection questioncollections={[{id:"01",questionCount:3,title:"suma"},{id:"02",questionCount:6,title:"resta"},{id:"03",questionCount:4,title:"multiplicacion"}]} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
