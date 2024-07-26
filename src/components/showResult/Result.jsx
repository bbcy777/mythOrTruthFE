import {useContext} from 'react';
import { QuestionContext } from '../../contexts/questionContext';
import './result.css'

//show user a result page with all questions take and answers
const Result = () => {
  const { questions, userAnswers} = useContext(QuestionContext);

  const caculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.answer == userAnswers[index])
        score += 1;
    });
    return score;
  }

  const score = caculateScore();
  console.log(score);

  return (
    <div className='result'>
      <h2>You got {score} correct out of 10 questions!</h2>
      <ul>
        {questions.map((question,index)=>(
          <li key={index}>
            <p>
              {userAnswers[index]===question.answer && <img src={'/correct.png'} alt='check image' />}
              {userAnswers[index]!==question.answer && <img src={'/wrong.png'} style={{ width: '25px'}} alt='no image' />}
              {question.question}
            </p>
            <div>
              Correct answer: {question.answer? 'True' : 'False'}
              {/* <p>Your answer: {userAnswers[index]? 'True' : 'False'}</p> */}
      
            </div>
            {question.source && 
              <div>Source: <a href={question.source} target='_black' rel='noopenr noreferrer'>{question.source}</a></div>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Result