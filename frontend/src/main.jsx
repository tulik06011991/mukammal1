import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from './components/SidebarContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SidebarProvider>
    <App />

  </SidebarProvider>
  </BrowserRouter>
 
  
)
