import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import QuestionProvider from './contexts/questionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuestionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QuestionProvider>
  </React.StrictMode>,
)
