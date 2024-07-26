import React from 'react';
import './question.css'

//Display current question
    //when answer button is clicked, lift answer through handleSubmitAnswer
const Question = ({question, handleSubmitAnswer}) => {
    function handleSubmit(answer) {
        handleSubmitAnswer(answer)
    }
    
  return (
    <div className='question'>
        <h2>{question.question}</h2>
        <button className='answerBtn' onClick={() => handleSubmit(true)}>True</button>
        <button className='answerBtn' onClick={() => handleSubmit(false)}>False</button>
    </div>
  )
}

export default Question