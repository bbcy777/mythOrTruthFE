import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/userAuthContext';

//get userName and display
const Dashboard = () => {
    const [username, setUsername] = useState()
    const {cookies} = useAuth()
    console.log(cookies);
    useEffect(()=>{
        const getUsername = async(req, res) => {
            try {
                let res = await axios ({
                    method: 'get',
                    url: 'http://localhost:3000/user/login/',
                    headers: {'x-auth-token': cookies.token}
                })
                setUsername(res.data)
            } catch (err) {
                console.error(err)
            }
        }
        getUsername()
    },[])

  return (
    <div>
        <h3>Welcome {username.userName}</h3>
    </div>
  )
}

export default Dashboard