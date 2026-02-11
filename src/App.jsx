import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component.jsx/Navbar'
import Footer from './Component.jsx/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home' 
import Contact from './Pages/Contact'
import About from './Pages/About'
import ErrorPage from './ErrorPage'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/" element={<Home/> }/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
