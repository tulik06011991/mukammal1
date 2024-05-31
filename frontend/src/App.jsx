import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
  
    
    </>
  )
}

export default App
