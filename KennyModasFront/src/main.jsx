import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import Landing from './pages/Landing/Landing.jsx'
import Category from './pages/Category/Category.jsx'
import ProductSaleCard from './components/ProductSaleCard/ProductSaleCard.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Category name="Blusas" />
    </BrowserRouter>
  </React.StrictMode>
)

