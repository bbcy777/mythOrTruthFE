import QuestionProvider from './questionContext';
import UserAuthContext from './userAuthContext';
import UserProvider from './userContext';

const AppProvider = ({ children }) => {
  return (
    <UserAuthContext>
      <UserProvider>
        <QuestionProvider>
          
            { children }
          
        </QuestionProvider>
      </UserProvider>
    </UserAuthContext>
  )
}

export default AppProvider