import { useState, useRef, useEffect } from 'react'
import './edit.css'

//Once user click on the question title, div expand to show edit option
const EditQuestionForm = ({question}) => {

  const [expand, setExpand] = useState(false)
  const titleRef = useRef();
  const bodyRef = useRef();

//   const title = document.querySelector(".title")
  const toggleExpand = () => {
    console.log("before:", expand);
    setExpand((preExpand)=>{
        console.log('Toggling expand state to:', !preExpand);
        return !preExpand;
    });

    console.log(titleRef.current);
  }

  const handleOutsideClick = (e) => {
    if(titleRef.current.classList === 'edit'){
        setExpand(false);
        console.log('clicked outsite, collasp');
    }
        
  }

  
 

  useEffect(()=>{
    if(expand){
        titleRef.current.classList.add('show');
        console.log('Class "show" added');
    } else {
        titleRef.current.classList.remove('show');
        console.log('Class "show" removed');
    }
  },[expand])

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
    <div onClick={handleOutsideClick} ref={bodyRef}>
        <div className='title' onClick={toggleExpand}>Title: {question.question}  Answer: {question.answer? 'True':'False'}</div>
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