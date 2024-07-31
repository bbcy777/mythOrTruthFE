import {createContext, useEffect, useState} from 'react'
import axios from 'axios';

export const QuestionContext = createContext(null);

const QuestionProvider = ({children}) => {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);

    //useEffect to fetch 10 random questions, and set them to questions arrary
    useEffect(()=>{
        const fetchQuestions = async() => {
            try {
                let res = await axios.get('https://truthormyth.onrender.com/questions/random10');
                setQuestions(res.data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchQuestions();
    },[])

  return (
    <QuestionContext.Provider value={{
        questions, setQuestions,

        userAnswers, setUserAnswers,

        }}>
        {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;