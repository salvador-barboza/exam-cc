import React from 'react'

interface SubjectsQuestionBanksCountProps{
    userArray?: number[];
    dataBaseArray?: number[];
    easy?: number;
}

class SubjectsQuestionBanksCount extends React.Component < SubjectsQuestionBanksCountProps,{clicks_easy:number, clicks_medium:number,clicks_hard:number , show:boolean} >{

    constructor(props){
        super(props)
        this.state = {
      clicks_easy: 0,
      clicks_medium:0,
      clicks_hard:0,
      show: true
    };
    }
  IncrementItem = () => {

    this.setState({ clicks_easy: this.state.clicks_easy + 1 });

  }
  DecreaseItem = () => {

    this.setState({ clicks_easy: this.state.clicks_easy - 1 });

  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  /*  private same = () => {
        if(this.props.userArray!=null && this.props.dataBaseArray!=null){
        return (this.props.userArray[0]==this.props.dataBaseArray[0]&&
            this.props.userArray[1]==this.props.dataBaseArray[1]&&
            this.props.userArray[2]==this.props.dataBaseArray[2])
        }else{
            return null;
        }

    } */


 render(){
   // No  regresa nada

  return (
    //the gray background
    <div>
    Easy
    <button onClick={this.IncrementItem}> + </button>
    { this.state.show ? <h2>{ this.state.clicks_easy }</h2> : '' }
      <button onClick={this.DecreaseItem}> -</button>
      <button onClick={this.ToggleClick}>
        { this.state.show ? 'Hide number' : 'Show number' }
      </button>

      Medium
      <button onClick={this.IncrementItem}> + </button>
      { this.state.show ? <h2>{ this.state.clicks_medium }</h2> : '' }
        <button onClick={this.DecreaseItem}> -</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>

    </div>
  );
 }

}

export default SubjectsQuestionBanksCount
