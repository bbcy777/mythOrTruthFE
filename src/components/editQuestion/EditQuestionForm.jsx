import { useState, useRef } from 'react'
import './edit.css'

//Once user click on the question title, div expand to show edit option
const EditQuestionForm = ({question}) => {

  const [expand, setExpand] = useState(false)
  const titleRef = useRef();

//   const title = document.querySelector(".title")
  const handleClick = () => {
    setExpand(true);
    console.log(titleRef.current);
    titleRef.current.classList.add('show');
  }

  //set form state to update question
  const [formData, setFormData] = useState({
    questions:'',
    answer:null,
    idea: '',
    source: '',
    category: ''
  })

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  const handleDelete = () => {}
  return (
    <div>
        <div className='title' onClick={handleClick}>Title: {question.question}  Answer: {question.answer? 'True':'False'}</div>
        <div  ref={titleRef} className='edit'>
            <div>{question.idea}<button onClick={handleChange}>Edit</button></div>
            <div>{question.source?(<button>Edit</button>):(<button>Add Source</button>)}</div>
            <div>{question.category}</div>
            {/* <button onSubmit={handleSubmit}>Save</button>
            <button onClick={handleDelete}>Delete</button> */}
        </div>
    </div>
  )
}

export default EditQuestionForm