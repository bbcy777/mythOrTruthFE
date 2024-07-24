import {useContext} from 'react'
import { QuestionContext } from '../../contexts/questionContext'

const Result = () => {
  const { questions, userAnswers} = useContext(QuestionContext);
  
  return (
    <div>
      <h2>You have completed 10 questions!</h2>
    </div>
  )
}

export default Result