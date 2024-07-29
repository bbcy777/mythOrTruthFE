import {react, useContext} from 'react';
import { useUser } from '../contexts/userContext';


//get userName and display favorite questions, and offer edit/add question option
const Dashboard = () => {
    const {userInfo, favQuestions } = useUser()
    
  return (
    <>
        <h3>Welcome {userInfo.userName}</h3>
        <div className='dashboard'>
            <div>Take a quiz</div>
            <div>Go to your favorite list
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
            <div>Edit a question</div>
            <div>Add a question</div>
        </div>
    </>
  )
}

export default Dashboard