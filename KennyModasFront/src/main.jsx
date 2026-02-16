import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import Landing from './pages/Landing/Landing.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  </React.StrictMode>
)

