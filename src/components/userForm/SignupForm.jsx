import {useAuth} from '../../contexts/userAuthContext';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setNewUser }) => {
  const {signUp} = useAuth();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    password2: '',
  });
  const nav = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(formData.password !== formData.password2) {
        throw 'Password Do Not Match';
      } else {
        await signUp(formData);
        nav('/edit');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = ()=> {
    setNewUser(false)
  }
  return (
    <div className='forms'>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name: </label>
        <input
          type='text'
          id='userName'
          name='userName'
          placeholder='user name'
          onChange={handleChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
        />
        <label htmlFor="password1">Password: </label>
        <input
          type='password'
          id='password1'
          name='password'
          placeholder='Password'
          minLength={6}
          onChange={handleChange}
        />
        <label htmlFor="password2">Password: </label>
        <input
          type='password'
          id='password2'
          name='password2'
          placeholder='Confirm Password'
          minLength={6}
          onChange={handleChange}
        />
        <button type='submit' onSubmit={handleSubmit}>Create Account</button>
      </form>
      <p>
        Already have an account? <button onClick={handleClick}>Sign In</button>
      </p>
    </div>
  )
}

export default SignupForm