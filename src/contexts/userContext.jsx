import {useState, useEffect, createContext, useContext} from 'react';
import axios from 'axios';
import { useAuth } from './userAuthContext'; 

const UserContext = createContext(null);

//Handle registered user info (user name, user favorite list, user add/remove favorite item)
const UserProvider = ({children}) => {
    //fetch username
    const [userInfo, setUserInfo] = useState({})
    const {cookies} = useAuth()
    // console.log(cookies);
    useEffect(()=>{
        if(cookies.token){
            const getUserInfo = async() => {
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
            const getFavQuesitons = async () => {
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

    //Managing favorite button for logged in user

    const handleFavorite =  async(questionId) => {
        try {
            if (favQuestions.some(el => el._id == questionId)) {
                await axios.delete(`http://localhost:3000/favcart/${userInfo._id}/${questionId}`)
                setFavQuestions(favQuestions.filter(el => el._id == questionId))
            }
            else {
                await axios.post(`http://localhost:3000/favcart/${userInfo._id}/${questionId}`)
                const res = await axios.get(`http://localhost:3000/questions/${questionId}`);
                setFavQuestions([...favQuestions, res.data]);
                console.log('After Post favQuestions', favQuestions);
            }
        } catch (error) {
            console.error(error)
        }
    }

    const isFavorite = (questionId) => favQuestions.some(el => el._id === questionId)
    return (
        <UserContext.Provider value={ {userInfo, favQuestions, handleFavorite, isFavorite }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider

export const useUser = () => {
    return useContext(UserContext)
}