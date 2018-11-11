import React from 'react'
import { css } from 'emotion'
import { IQuestionBank } from 'src/models/QuestionBank/IQuestionBank'
import { EditButton, Background, Popup, ButtonCool } from './Components'

interface QuestionBankPopUpProps {
    subjects: IQuestionBank[]
    onSubmit: (id: string[]) => void
}

interface QuestionBankPopUpState {
    selected: string[]
}

class QuestionBankPopUp extends React.Component<QuestionBankPopUpProps, QuestionBankPopUpState> {
    public state: QuestionBankPopUpState = { 
        selected: [] 
    }
    
    public toggleSelection(id: string) {
        let temp = this.state.selected
        if (!this.isInArray(id, temp)) {
            temp.push(id)
        } else {
            temp.splice(temp.indexOf(id), 1)
        }

        this.setState({ selected: temp })
    }

    
    render() {
        return (
            <Background>
                <Popup>
                    {this.props.children}
                    <div className="footer">
                        <div className={css({ overflowY: 'scroll', height: 400 })}>
                            {this.props.subjects.map((subject, index) => (
                                <ButtonCool 
                                    onClick={() => this.toggleSelection(subject.id!!)} 
                                    selected={this.isInArray(subject.id!!, this.state.selected)}>
                                    {subject.title}---{this.props.subjects[index].questionCount}
                                </ButtonCool>
                            ))}
                            <EditButton color={'green'} onClick={this.onConfirmClicked}>Confirmar</EditButton>
                        </div>
                    </div>
                </Popup>
            </Background>
        );
    }

    private isInArray = (value: string, array: string[]) => array.indexOf(value) > -1;
    private onConfirmClicked = () => this.props.onSubmit(this.state.selected)
}
export default QuestionBankPopUp