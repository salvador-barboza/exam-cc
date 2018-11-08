import React from 'react'
import { css } from 'emotion'
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank'
import {EditButton, Background, Popup, ButtonCool} from 'src/ui/Editor/AnswerEditor/Components'

interface QuestionBankPopUpProps {
    show: boolean
    subjects: IQuestionBank[]
    onClicked: (id: string[]) => void
    onHide: () => void
}

interface QuestionBankPopUpState {
    show: boolean
    selected: string[]
}

class QuestionBankPopUp extends React.Component<QuestionBankPopUpProps, QuestionBankPopUpState> {
    public state: QuestionBankPopUpState
    constructor(props) {
        super(props)
        this.state = { show: props.show, selected: []}
    }

    public setSelected(id: string) {
        let temp = this.state.selected
        if (!this.isInArray(id, temp)) {
            temp.push(id)
            this.setState({ selected: temp })
        } else {
            temp.splice(temp.indexOf(id), 1)
            this.setState({ selected: temp })
        }
    }

    private isInArray(value: string, array: string[]) {
        return array.indexOf(value) > -1;
    }

    private listsubject(subjects: IQuestionBank[]) {
        let select = this.state.selected
        return (
            subjects.map((subject, index) =>
                <ButtonCool onClick={() => this.setSelected(subject.id!!)} selected={this.isInArray(subject.id!!, select)}>{subject.title}---{
                    this.props.subjects[index].questionCount
                }</ButtonCool>
            )
        )
    }

    private showArray=()=>{
        
        if (this.state.selected!=[]) {
            let temp = this.state.selected
            temp.sort()
            this.setState({ selected: temp })
            this.props.onClicked(this.state.selected)
            
        }
        this.props.onClicked([])
        this.setState({ selected: [] })
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <Background>
                <Popup>
                    {this.props.children}
                    <div className="footer">
                        <div className={css({ overflowY: 'scroll', height: 400 })}>
                            <button onClick={this.props.onHide} className={css({ position: 'absolute', right: 10, top: 10 })}>Close</button>
                            {this.listsubject(this.props.subjects)}
                            <EditButton color={'green'} onClick={this.showArray}>Confirmar</EditButton>
                        </div>
                    </div>
                </Popup>
            </Background>
        );
    }
}
export default QuestionBankPopUp