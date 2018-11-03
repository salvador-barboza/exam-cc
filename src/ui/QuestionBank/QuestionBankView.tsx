import React from 'react'
import styled from 'react-emotion'

const Frame= styled('div')({
    borderRadius: '25px',
    border: '2px solid #000000',
    padding: '20px',
    width: '50%',
    height: '150px' 
})

const DeleteButton= styled('button')({
    backgroundColor:'red',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px'
})

const EditButton= styled('button')({
    backgroundColor:'blue',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px'
})

interface questionBankViewProps {
    BankTitle: string
    CreationDate: string
    numberOfQuestions: number
}

const QuestionBankView = (props: questionBankViewProps) => {
    return(
        <div>
            <Frame>
                <h2>{props.BankTitle}</h2>
                <h4>{props.CreationDate}</h4>
                <h3>{props.numberOfQuestions} preguntas</h3>
            </Frame>
            <EditButton>Editar</EditButton>
            <DeleteButton>Borrar</DeleteButton>
        </div>
    )
}

export default QuestionBankView
