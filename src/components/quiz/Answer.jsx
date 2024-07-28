import React from 'react'

//when show answer set to be true, render this component
  //check if user answer match question answer
  //button to lift handle next question
const Answer = ({ question, userAnswer, handleNextQuestion, handleFavorite }) => {
    const isCorrect = (userAnswer === question.answer);

    //use userId to check if user logged in, and offer add to favorate option
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
        {userId?(
          <div className='favDiv' onClick={()=>handleFavorite(question._id)}>
            <img id = 'notFav' src={"/star_empty.png"} alt="hollow star to show not in favorite" />
            <img id='favorite' src={"/star.png"} alt='filled star to show item in favorite'/>
          </div>
          ):null}
    </div>
  )
}

export default Answer