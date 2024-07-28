import {useEffect, useState} from 'react'
import axios from 'axios'
import AddQuestionForm from '../components/editQuestion/AddQuestionForm'
import EditQuestionForm from '../components/editQuestion/EditQuestionForm'


const EditQuestions = () => {
  //use state for all questions
  const [allQuestions, setAllQuestions] = useState([])
  //use effect to get all questions for edit
  useEffect(()=>{
    fetchAll()
  },[])

  const fetchAll = async ()=> {
    try {
      let res = await axios.get('http://localhost:3000/questions')
      setAllQuestions(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleDelete = async(id) => {
      //question delete by id route 
    try {
        await axios.delete(`http://localhost:3000/questions/${id}`);
        fetchAll();
    } catch (err) {
        console.log(err)
    }
  }
  return (
    <div>
      <ol>
        {allQuestions.map((el)=>(
          <li key={el._id} className='edit-question'>
            <EditQuestionForm question={el} onDelete={handleDelete}/>
          </li>
        ))}
      </ol>
      <AddQuestionForm />
    </div>
  )
}

export default EditQuestions