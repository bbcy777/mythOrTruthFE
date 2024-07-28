import React from 'react'

//when show answer set to be true, render this component
  //check if user answer match question answer
  //button to lift handle next question
const Answer = ({ question, userAnswer, handleNextQuestion, addFavorite, removeFavorite }) => {
    const isCorrect = (userAnswer === question.answer);

    const userId = localStorage.getItem('userId')
  return (
    <div className='answer'>
        <h2>{question.question}</h2>
        {isCorrect? (              
              <h3>
                <img src={"/confetti.png"} alt="cheer confetti" />Yes! You are correct!
              </h3>
        ) : (
            <h3>
              <img src={"/no.png"} alt="no sign" />
              No...
            </h3>
        )}
        <p>{question.idea}</p>
        <button onClick={handleNextQuestion}>Next Question</button>
        {userId?(<img id='favorite' src={"/star.png"} onClick={()=>addFavorite(question._id)}/>):null}
    </div>
  )
}

export default Answer