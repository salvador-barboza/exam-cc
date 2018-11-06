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
  IncrementItem = (id:number) => {
  if(id == 1)
    this.setState({ clicks_easy: this.state.clicks_easy + 1 });
  else if(id == 2)
   this.setState({clicks_medium:this.state.clicks_medium + 1 });
   else
   this.setState({clicks_hard:this.state.clicks_hard + 1});

  }
  DecreaseItem = (id:number) => {
    if(id == 1)
    this.setState({ clicks_easy: this.state.clicks_easy - 1 });
    else if(id == 2)
    this.setState({clicks_medium: this.state.clicks_medium - 1 });
    else
    this.setState({clicks_hard:this.state.clicks_hard - 1 });
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

    <button onClick={() => this.IncrementItem(1)}> + </button>
     <h2>{ this.state.clicks_easy } </h2>
      <button onClick={()=>this.DecreaseItem(1)}> -</button>

<div />
      Medium
      <button onClick={()=>this.IncrementItem(2)}> + </button>
        <h2>{ this.state.clicks_medium }</h2>
        <button onClick={()=>this.DecreaseItem(2)}> -</button>
<div / >
        Hard
        <button onClick={()=>this.IncrementItem(3)}> + </button>
          <h2>{ this.state.clicks_hard }</h2>
          <button onClick={()=>this.DecreaseItem(3)}> -</button>


    </div>
  );
 }

}

export default SubjectsQuestionBanksCount
