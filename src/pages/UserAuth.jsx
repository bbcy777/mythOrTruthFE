import {useState} from 'react';
import LoginForm from '../components/userForm/LoginForm';
import SigninForm from '../components/userForm/SigninForm';

const UserAuth = () => {
    const [newUser, setNewUser] = useState(true)
    return (
    <>
        {newUser ? (
            <LoginForm setNewUser = {setNewUser}/>
        ):(
            <SigninForm setNewUser = {setNewUser}/>
        )}
    </>
  )
}

export default UserAuth