import React from 'react'
import { css } from 'emotion'
import { IQuestionBank} from 'src/models/QuestionBank/IQuestionBank'
import {Background, Popup, ButtonCool} from './Components'

interface QuestionBankPopUpProps {
    show: boolean
    subjects: IQuestionBank[]
    onClicked: (id: string) => void
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

    public hide = () => {
        this.setState({ show: false })
    }

    private listsubject(subjects: IQuestionBank[]) {
        return (
            subjects.map((subject, index) =>
                <ButtonCool onClick={() => this.props.onClicked(this.props.subjects[index].id)}>{subject.title}---{
                    this.props.subjects[index].questionCount
                }</ButtonCool>
            )
        )
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
                            <button onClick={this.hide} className={css({ position: 'absolute', right: 10, top: 10 })}>Close</button>
                            {this.listsubject(this.props.subjects)}
                        </div>
                    </div>
                </Popup>
            </Background>
        );
    }
}
export default QuestionBankPopUp