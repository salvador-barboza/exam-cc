import React from 'react'

interface SubjectsQuestionBanksCountProps{
    userArray: number[];
    dataBaseArray: number[];
}

class SubjectsQuestionBanksCount extends React.Component <SubjectsQuestionBanksCountProps>{

    constructor(props){
        super(props)
    }

    private same = () => {
        return (this.props.userArray[0]==this.props.dataBaseArray[0]&&
            this.props.userArray[1]==this.props.dataBaseArray[1]&&
            this.props.userArray[2]==this.props.dataBaseArray[2])
    }


 render(){
   // No  regresa nada
   {this.props.children}
   return  "hola";
 }

}

export default SubjectsQuestionBanksCount 
