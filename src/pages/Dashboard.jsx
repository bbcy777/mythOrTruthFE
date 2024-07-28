import axios from 'axios';
import {useEffect, useState} from 'react';
import { useAuth } from '../contexts/userAuthContext';

//get userName and display favorite questions, and offer edit/add question option
const Dashboard = () => {

    //fetch username
    const [userInfo, setUserInfo] = useState({})
    const {cookies} = useAuth()
    // console.log(cookies);
    useEffect(()=>{
        const getUserInfo = async(req, res) => {
            try {
                let res = await axios ({
                    method: 'get',
                    url: 'http://localhost:3000/user/login/',
                    headers: {'x-auth-token': cookies.token}
                })
                // console.log(res);
                setUserInfo(res.data)
            } catch (err) {
                console.error(err)
            }
        }
        getUserInfo()
    },[cookies.token])
    // console.log('username is: ', userInfo);
    // fetch favorite list:
    const [favQuestions, setFavQuestions] = useState([])

    useEffect(()=>{
        const getFavQuesitons = async (req, res) => {
            try {
                let res = await axios.get(`http://localhost:3000/favcart/${userInfo._id}`)
                let favQuestionIds = res.data
                console.log('favQuestionIds',favQuestionIds);
                const questions = await Promise.all(
                    favQuestionIds.map(async(id) =>{
                        try {
                            let res = await axios.get(`http://localhost:3000/questions/${id}`)
                            return res.data
                        } catch (error) {
                            console.error(error)
                            return null
                        }
                    })
                )
                setFavQuestions(questions.filter(el=>el !== null))
            } catch (err) {
                console.error(err)
            }
             
        }
        getFavQuesitons()
        console.log('favQuestions', favQuestions);
    },[userInfo._id])


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
                            <p>{el.answer?'True':'False'}</p>
                            <p>Fact: {el.idea}</p>
                            <p>{el.source? '{el.source}': null}</p>
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