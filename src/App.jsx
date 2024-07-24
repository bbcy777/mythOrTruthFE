import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import './App.css'
import ProtectedRoutes from './components/editQuestion/ProtectedRoutes';
import EditQuestions from './pages/EditQuestions';
import UserAuth from './pages/UserAuth'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserAuth />} />
          <Route element={<ProtectedRoutes />} >
            <Route path='/edit' element={<EditQuestions />} />
          </ Route>
      </Routes>
    </>
  )
}

export default App
