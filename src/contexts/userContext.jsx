import {useState, useEffect, useContext, createContext} from 'react';
import axios from 'axios';
import { useAuth } from './userAuthContext'; 

export const UserContext = createContext(null);

const UserProvider = ({children}) => {
    //fetch username
    const [userInfo, setUserInfo] = useState({})
    const {cookies} = useAuth()
    // console.log(cookies);
    useEffect(()=>{
        if(cookies.token){
            const getUserInfo = async(req, res) => {
                try {
                    let res = await axios ({
                        method: 'get',
                        url: 'http://localhost:3000/user/login/',
                        headers: {'x-auth-token': cookies.token}
                    })
                    // console.log(res);
                    setUserInfo(res.data)
                    //add user to localStorage
                    localStorage.setItem('username', res.data.userName)
                    localStorage.setItem('userId', res.data._id)
                } catch (err) {
                    console.error(err)
                }
            }
            getUserInfo()
        }
    },[cookies.token])

    // const username = localStorage.getItem('username')
    // const userId = localStorage.getItem('userId')
    // console.log('localStorage username: ', username);
    // console.log('localStorage userId', userId);
    
    // fetch favorite list:
    const [favQuestions, setFavQuestions] = useState([])

    useEffect(()=>{
        if(userInfo._id){
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
        }
    },[userInfo._id])



  return (
    <UserContext.Provider value={ {userInfo, favQuestions }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider