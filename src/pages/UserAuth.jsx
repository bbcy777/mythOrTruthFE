import {useState} from 'react';
import LoginForm from '../components/userForm/LoginForm';
import SignupForm from '../components/userForm/SignupForm';

const UserAuth = () => {
    const [newUser, setNewUser] = useState(false)
    return (
    <>
        {newUser ? (
            <SignupForm setNewUser = {setNewUser}/>
        ):(
            <LoginForm setNewUser = {setNewUser}/>
        )}
    </>
  )
}

export default UserAuth