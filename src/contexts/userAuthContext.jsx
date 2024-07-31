import { createContext, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const AuthFunction = createContext();

//create context provider
const UserAuthContext = ({ children }) => {
    //create cookies
    const [cookies, setCookies, removeCookie] = useCookies();

    //login Function
    const login = async (formData) => {
        try {
            let res = await axios({
                method: 'POST',
                url: 'https://truthormyth.onrender.com/user/login',
                data: formData
            });
        
            setCookies('token', res.data.token);

        } catch (err) {
            console.error(err);
        }
    }

    //signup Function
    const signUp = async (formData) => {
        try {
            let res = await axios ({
                method: 'POST', 
                url: 'https://truthormyth.onrender.com/user/signup',
                data: formData
            });

            setCookies('token', res.data.token);

        } catch (err) {
            console.error(err);
        }
    }

    //logOut Function
    const logOut = () => {
        ['token'].forEach((obj) => removeCookie(obj))
        localStorage.removeItem('userId')
        localStorage.removeItem('username')
    };

    const value = useMemo(()=>({
        cookies, login, signUp, logOut,
    }),[cookies])

  return (
    <AuthFunction.Provider value={value}>{children}</AuthFunction.Provider>
  )
}

export default UserAuthContext;

export const useAuth = () => {
    return useContext(AuthFunction);
}