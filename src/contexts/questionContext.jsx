import {createContext, useEffect, useState} from 'react'
import axios from 'axios';

export const QuestionContext = createContext(null);

const QuestionProvider = ({children}) => {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [favorite, setFavorite] = useState(0)

    //useEffect to fetch 10 random questions, and set them to questions arrary
    useEffect(()=>{
        const fetchQuestions = async() => {
            try {
                let res = await axios.get('http://localhost:3000/questions/random10');
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

        favorite, setFavorite
        }}>
        {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;