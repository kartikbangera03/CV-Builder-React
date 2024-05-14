import React from 'react'
import ReactDOM from 'react-dom/client'
import MainContainer from './components/mainContainer'
import App from './App'
import "./styles/main.css"
// import './index.css'








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    <MainContainer />
    
    
  </React.StrictMode>,
)
