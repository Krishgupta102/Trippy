import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Service from './Pages/Service/Service'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Service' element={<Service/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
