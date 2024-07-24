import {useContext} from 'react';
import { QuestionContext } from '../../contexts/questionContext';


const AddQuestionForm = () => {
  
  const {questions, setQuestions} = useContext(QuestionContext)
    
  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleClick = () => {

  }
  return (
    <div>
        <h3>Add a Question</h3>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <label htmlFor="question">Question: </label>
            <input 
                type="text" 
                onChange={handleChange}
                name='question'
                placeholder='Please add question'
            />
            <label htmlFor="answer">Answer: </label>
            <label htmlFor="true"></label>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddQuestionForm