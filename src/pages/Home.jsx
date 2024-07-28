import { useContext, useState } from 'react';
import { QuestionContext } from '../contexts/questionContext';
import Question from '../components/quiz/Question';
import Answer from '../components/quiz/Answer';
import Result from '../components/showResult/Result';
import axios from 'axios';

//Home Component 
    //manage the current question index
    //handle moving to next question
    //toggle show answer component or question component 
const Home = () => {
    const {questions, userAnswers, setUserAnswers} = useContext(QuestionContext);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleNextQuestion = () => {
        setShowAnswer(false);
        setQuestionIndex((prevIndex)=> prevIndex + 1);
        console.log(questionIndex);
    };

    const handleSubmitAnswer =(answer) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = answer
        setUserAnswers(updatedAnswers);
        setShowAnswer(true);
    }

    if(questions.length === 0) {
        return <h2>Loading Questions...</h2>
    }

    if(questionIndex >= questions.length) {
        return <Result handleFavorite= {handleFavorite}/>
    }

    //Adding favorite button for logged in user
    const userId = localStorage.getItem('userId')
    const addFavorite = async (questionId) => {
        try {
            await axios.post(`http://localhost:3000/favcart/${userId}/${questionId}`)
        } catch (error) {
            console.error(error)
        }
    }
    const removeFavorite = async (questionId) => {
        try {
            await axios.delete(`http://localhost:3000/favcart/${userId}/${questionId}`)
        } catch (error) {
            console.error(error)
        }
    }

    // const [isFavorite, setIsFavorite] = useState(false)

    const handleFavorite =  async(questionId) => {
        try {
            let res = await axios.get(`http://localhost:3000/favcart/${userId}`)
            const favQuestions = res.data
            let newQuestion = favQuestions.find(el => el == questionId)
            if (newQuestion) {
                removeFavorite(questionId)
                setIsFavorite(true)
            }
            else {
                addFavorite(questionId)
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        {showAnswer ? (
        <Answer 
            question = {questions[questionIndex]}
            userAnswer = {userAnswers[questionIndex]}
            handleNextQuestion={handleNextQuestion}
            handleFavorite= {handleFavorite}/>
        ) : (
        <Question 
            question = {questions[questionIndex]}
            handleSubmitAnswer={handleSubmitAnswer}/>
        )}
    </>
  );
};

export default Home;