import {useEffect, useState} from 'react'
import axios from 'axios'
import AddQuestionForm from '../components/editQuestion/AddQuestionForm'

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
      <AddQuestionForm />
    </div>
  )
}

export default EditQuestions