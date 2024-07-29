import { useUser } from '../../contexts/userContext'


//when show answer set to be true, render this component
  //check if user answer match question answer
  //button to lift handle next question
const Answer = ({ question, userAnswer, handleNextQuestion }) => {
    const isCorrect = (userAnswer === question.answer);

    //use userId to check if user logged in, and offer add to favorate option
    const userId = localStorage.getItem('userId')

    //adding favorite button if user is logged in
    const { handleFavorite, isFavorite} = useUser()
    //if the question is already in the favorite list, show different image
    // const isFavorite = favQuestions.some((el) => el == question._id)

  return (
    <div className='answer'>
        <h2>{question.question}</h2>
        {isCorrect? (              
              <h3>
                <img src={"/confetti.png"} alt="cheer confetti" />Yes! You are correct!
              </h3>
        ) : (
            <h3>
              <img src={"/no.png"} alt="a sign shows 'No'" />
              No...
            </h3>
        )}
        <p>{question.idea}</p>
        <button onClick={handleNextQuestion}>Next Question</button>
        
        <div className='favDiv' onClick={()=>handleFavorite(question._id)}>
          {userId && isFavorite(question._id) && <img id='favorite' src={"/star.png"} alt='filled star to show item in favorite'/>}
          {userId && !isFavorite(question._id) && <img id = 'notFav' src={"/star_empty.png"} alt="hollow star to show not in favorite" />}
        </div>
        
    </div>
  )
}

export default Answer