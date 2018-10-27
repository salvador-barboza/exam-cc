import React, { Component, Fragment } from 'react'
import Question from 'src/models/Question/Question';
import VariableToolbar from '../Editor/VariableToolbar';

class QuestionView extends Component {
  private question = new Question()
  state = { variables: [] }

  public addVariable = () => {
    const id = window.prompt()
    if (!id) return
    this.question.addRangeVariable(id, { start: 2, end: 1})
    this.setState({ variables: this.question.variables });
    
  }

  public render() {
    return (
      <Fragment>
      <VariableToolbar
        variableIds={this.state.variables}
        onAddVariableClicked={(this.addVariable)}
        onExistingVariableClicked={() => {}}
      />
      </Fragment>
    )
  }
}

export default QuestionView