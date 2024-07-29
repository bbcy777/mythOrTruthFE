import { useUser } from '../contexts/userContext';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import AddQuestionForm from '../components/editQuestion/AddQuestionForm';
import FavoriteList from '../components/editQuestion/FavoriteList';
import './dashboard.css'
import EditQuestions from './EditQuestions';
//get userName and display favorite questions, and offer edit/add question option
const Dashboard = () => {
    const nav = useNavigate();
    const {userInfo} = useUser()
    
    const [activeContent, setActiveContent] = useState(null)

    function handleActive(item) {
        const x = item;
        setActiveContent(x)
    }

    // function handleOpenForm() {
    //     if(close) ulRef.current.classList.toggle('show');
    //     formRef.current.classList.toggle('show');
    //     setOpenForm(x=>!x)
    // }

    return (
        <>
            <h3 onClick={() =>{handleActive(null)}}>Welcome {userInfo.userName}</h3>
            <div className='dashboard'>
                <div className='dashlist' onClick={()=>{nav('/')}}>Test Your Knowledge</div>
                <div className='dashlist' onClick={()=>{handleActive('favList')}}>See Favorite
                    {activeContent == 'favList' && (<div id='favList' ><FavoriteList /></div>)}
                </div>
                <div className='dashlist' onClick={()=>{handleActive('editForm')}}>Edit a question
                    {activeContent == 'editForm' && <EditQuestions />}
                </div>
                <div className='dashlist' onClick={()=>{handleActive('addForm')}}>Add a question
                    {activeContent == 'addForm' && (<div className='addQ' >
                        <AddQuestionForm />
                    </div>)}
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Dashboard