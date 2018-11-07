import React from 'react'
import { css } from 'emotion'
import { IQuestionBank, QuestionCount } from 'src/models/QuestionBank/IQuestionBank'
import {EditButton, Background, Popup, ButtonCool} from 'src/ui/Editor/AnswerEditor/Components'

interface QuestionBankPopUpProps {
    show: boolean
    subjects: IQuestionBank[]
    onClicked: (id: number[]) => void
}

interface QuestionBankPopUpState {
    show: boolean
    selected: number[]
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

    public setSelected(id: number) {
        let temp = this.state.selected
        if (!this.isInArray(id, temp)) {
            temp.push(id)
            this.setState({ selected: temp })
        } else {
            temp.splice(temp.indexOf(id), 1)
            this.setState({ selected: temp })
        }
    }

    private isInArray(value: number, array: number[]) {
        return array.indexOf(value) > -1;
    }

    private listsubject(subjects: IQuestionBank[]) {
        let select = this.state.selected
        return (
            subjects.map((subject, index) =>
                <ButtonCool onClick={() => this.setSelected(index)} selected={this.isInArray(index, select)}>{subject.title}---{
                    this.formatQuestionBankCount(subject.questionCount!!)
                }</ButtonCool>
            )
        )
    }

    private formatQuestionBankCount = ({ easy, medium, hard }: QuestionCount) => {
        const total = easy + medium + hard
        return `${total} pregunta${total === 1 ? '' : 's'}.`
    }

    private showArray = () => {
        if (this.state.selected!=[]) {
            let temp = this.state.selected
            temp.sort()
            this.setState({ selected: temp })
            this.props.onClicked(this.state.selected)
        }
        this.props.onClicked([])
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
                            <EditButton color={'green'} onClick={this.showArray}>Confirmar</EditButton>
                        </div>
                    </div>
                </Popup>
            </Background>
        );
    }
}
export default QuestionBankPopUp