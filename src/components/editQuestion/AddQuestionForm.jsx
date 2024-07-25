import {useState} from 'react';
import axios from 'axios';

const AddQuestionForm = () => {
  
  const [formData, setFormData] = useState({
    question: '',
    answer: null,
    idea: '',
    source: '',
    category: '',
  })
    
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
        ...formData,
        [name]: type === 'radio' ? value === 'true' : value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    addQuestion(formData)
  }

  const addQuestion = async (formData) => {
    try {
        await axios.post('http://localhost:3000/questions', formData);
    } catch (err) {
        console.error(err);
    }
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
                required
                value={formData.question}
            />
            <br />
            <label htmlFor="answer">Answer: </label>
            <label htmlFor="true">True</label>
            <input 
                type="radio" 
                onChange={handleChange} 
                className='radio' 
                value='true' 
                name='answer' 
                required
                checked={formData.answer === true}
            />
            <label htmlFor="false">False</label>
            <input 
                type="radio" 
                onChange={handleChange} 
                className='radio' 
                value='false'
                name='answer' 
                required
                checked={formData.answer === false}
                />
            <br />
            <label htmlFor="fact">Fact: </label> 
            <input 
                type="text" 
                onChange={handleChange}
                name='idea'
                placeholder='Fact'
                required
                value={formData.idea}
            />
            <br />
            <label htmlFor="source">Source: </label>
            <input 
                type="text" 
                onChange={handleChange}
                name='source'
                placeholder='Source Link'
                value={formData.source}
            />
            <br />
            <label htmlFor="category">Category: </label>
            <select 
                name="category" 
                onChange={handleChange}
                value={formData.category}
                required
            >
                <option value="">Select a category</option>
                <option value="environment">Environment</option>
                <option value="energy">Energy</option>
                <option value="health">Health</option>
            </select>
            <br />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddQuestionForm