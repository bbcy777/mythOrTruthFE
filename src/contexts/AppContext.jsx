import QuestionProvider from './questionContext';
import UserAuthContext from './userAuthContext';

const AppProvider = ({ children }) => {
  return (
    <UserAuthContext>
        <QuestionProvider>
            { children }
        </QuestionProvider>
    </UserAuthContext>
  )
}

export default AppProvider