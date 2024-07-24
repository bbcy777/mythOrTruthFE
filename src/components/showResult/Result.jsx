import {useContext} from 'react';
import { QuestionContext } from '../../contexts/questionContext';


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
    <div>
      <h2>You got {score} correct out of 10 questions!</h2>
      <ul>
        {questions.map((question,index)=>(
          <li key={index}>
            <p>{question.question}</p>
            <p>Your answer: {userAnswers[index]? 'True' : 'False'}</p>
            <p>Correct answer: {question.answer? 'True' : 'False'}</p>
            {question.source && 
              <p>Source: <a href={question.source} target='_black' rel='noopenr noreferrer'>{question.source}</a></p>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Result