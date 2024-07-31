import {useEffect, useState} from 'react'
import axios from 'axios'
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
      let res = await axios.get('https://truthormyth.onrender.com/questions')
      setAllQuestions(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleDelete = async(id) => {
      //question delete by id route 
    try {
        await axios.delete(`https://truthormyth.onrender.com/questions/${id}`);
        fetchAll();
    } catch (err) {
        console.log(err)
    }
  }
  return (
    <div>
      <ol className='editList'>
        {allQuestions.map((el)=>(
          <li key={el._id} className='edit-question'>
            <EditQuestionForm question={el} onDelete={handleDelete}/>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default EditQuestions