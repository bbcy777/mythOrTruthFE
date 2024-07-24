import {useAuth} from '../../contexts/userAuthContext';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setNewUser }) => {
  const {login} = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    await login(formData);
    nav('/edit');
  };

  const handleClick = ()=> {
    setNewUser(true)
  }
  return (
    <div className='forms'>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
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
          id='password'
          name='password'
          placeholder='Password'
          minLength={6}
          onChange={handleChange}
        />
        <button type='submit' onSubmit={handleSubmit}>Log In</button>
      </form>
      <p>
        Don't have an account? <button onClick={handleClick}>Sign Up</button>
      </p>
    </div>
  )
}

export default LoginForm