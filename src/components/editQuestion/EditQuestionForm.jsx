import { useState, useRef, useEffect } from 'react'
import './edit.css'
import axios from 'axios';

//Once user click on the question title, div expand to show edit option
const EditQuestionForm = ({question}) => {
    //to toggle expand show class, used useState, useEffect and useRef
  const [expand, setExpand] = useState(false)
  const titleRef = useRef();
    // onClick change the expand state
  const toggleExpand = () => {
    console.log("before:", expand);
    setExpand((preExpand)=>{
        console.log('Toggling expand state to:', !preExpand);
        return !preExpand;
    });
  }
  //if expand state is true, add class 'show', else remove the class 'show'
  useEffect(()=>{
    if(expand){
        titleRef.current.classList.add('show');
    } else {
        titleRef.current.classList.remove('show');
    }
  },[expand])

  //set form state to update question
  const [formData, setFormData] = useState({
    question:'',
    answer:null,
    idea: '',
    source: '',
    category: ''
  })

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData)=>({
        ...prevData,
        [name]: type === 'radio' ? value === 'true' : value,
    }));
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    editQuestion();
  }
  const editQuestion = async () => {
    console.log(formData);
    try {
        await axios.put(`http://localhost:3000/questions/${question._id}`, formData)
        console.log(`http://localhost:3000/questions/${question._id}`);
    } catch (err) {
        if (err.response) {
            console.error('Server responded with status code:', err.response.status);
            console.error('Response data:', err.response.data);
          } else if (err.request) {
            console.error('No response received:', err.request);
          } else {
            console.error('Error in setting up the request:', err.message);
          }
    }
  }

  const deleteQuestion = async () => {
    try {
        await axios.delete(`http://localhost:3000/questions/${question._id}`)
    } catch (err) {
        console.log(err)
    }
  }

  return (
    <div>
        <div className='title' onClick={toggleExpand}>Title: {question.question}  Answer: {question.answer? 'True':'False'}</div>
        <div  ref={titleRef} className='edit'>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label htmlFor="question">Question: </label>
                <input 
                    type="text" 
                    onChange={handleChange}
                    name='question'
                    placeholder={question.question}
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
                    checked={formData.answer === true}
                />
                <label htmlFor="false">False</label>
                <input 
                    type="radio" 
                    onChange={handleChange} 
                    className='radio' 
                    value='false'
                    name='answer' 
                    checked={formData.answer === false}
                    />
                <br />
                <label htmlFor="fact">Fact: </label> 
                <input 
                    type="text" 
                    onChange={handleChange}
                    name='idea'
                    placeholder={question.idea}
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
                >
                    <option value="">Select a category</option>
                    <option value="environment">Environment</option>
                    <option value="energy">Energy</option>
                    <option value="health">Health</option>
                </select>
                <br />
                <button type='submit'>Save</button>
                <button onClick={deleteQuestion}>Delete</button>
            </form>
        </div>
    </div>
  )
}

export default EditQuestionForm