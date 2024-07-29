import { Link } from "react-router-dom";
import { useUser } from '../contexts/userContext';
import { useNavigate } from "react-router-dom";

//get userName and display favorite questions, and offer edit/add question option
const Dashboard = () => {
    const {userInfo, favQuestions } = useUser()
    
    const nav = useNavigate();
  return (
    <>
        <h3>Welcome {userInfo.userName}</h3>
        <div className='dashboard'>
            <Link to='/'>
                <div className='dashlist'>Test Your Knowledge</div>
            </Link>
            <div className='dashlist'>Check your favorite list
                <ul>
                    {favQuestions.map(el => (
                        <li key={el._id}>
                            <p>{el.question}</p>
                            <p>Answer: {el.answer?'True':'False'}</p>
                            <p>Fact: {el.idea}</p>
                            {el.source && 
                                <div>Source: 
                                    <a href={el.source} target='_black' rel='noopenr noreferrer'>{el.source}</a>
                                </div>
                            }
                        </li>
                    ))}
                </ul>
            </div>
            <div className='dashlist' onClick={()=>{nav('/edit')}}>Edit a question</div>
            <div className='dashlist'>Add a question</div>
            <div></div>
        </div>
    </>
  )
}

export default Dashboard