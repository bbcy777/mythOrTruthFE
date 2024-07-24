import React from 'react'

const Answer = ({ question, userAnswer, handNextQuestion }) => {
    const isCorrect = (userAnswer === question.answer);
  return (
    <div>
        <h2>{question.question}</h2>
        {isCorrect? (
            <h3>Yes! You are correct!</h3>
        ) : (
            <h3>No...</h3>
        )}
        <p>{question.idea}</p>
        <button onClick={handNextQuestion}>Next Question</button>
    </div>
  )
}

export default Answer