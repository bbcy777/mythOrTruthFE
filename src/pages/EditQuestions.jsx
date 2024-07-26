import {useEffect, useState} from 'react'
import axios from 'axios'
import AddQuestionForm from '../components/editQuestion/AddQuestionForm'
import EditQuestionForm from '../components/editQuestion/EditQuestionForm'

const EditQuestions = () => {
  //use state for all questions
  const [allQuestions, setAllQuestions] = useState([])
  //use effect to get all questions for edit
  useEffect(()=>{
    const fetchAll = async ()=> {
      try {
        let res = await axios.get('http://localhost:3000/questions')
        setAllQuestions(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchAll()
  },[])

  return (
    <div>
      <ul>
        {allQuestions.map((el)=>(
          <li key={el.id} className='edit-question'>
            <EditQuestionForm question={el}/>
          </li>
        ))}
      </ul>
      <AddQuestionForm />
    </div>
  )
}

export default EditQuestions