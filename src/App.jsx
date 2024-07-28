import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home'
import ProtectedRoutes from './components/editQuestion/ProtectedRoutes';
import EditQuestions from './pages/EditQuestions';
import UserAuth from './pages/UserAuth'
import About from './pages/About';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserAuth />} />
          <Route element={<ProtectedRoutes />} >
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/edit' element={<EditQuestions />} />
          </ Route>
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  )
}

export default App
