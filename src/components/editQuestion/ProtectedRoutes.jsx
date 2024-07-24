import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/userAuthContext';

// Once user login, compare cookies from userAuth context
    //Use Outlet to route authenticated user to nexted /edit route
const ProtectedRoutes = () => {
    const { cookies } = useAuth();

    return cookies.token?
        <Outlet /> :
        <h1>You are not authorized to edit</h1>
    
}

export default ProtectedRoutes