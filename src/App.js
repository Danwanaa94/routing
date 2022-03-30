import React from 'react'
import NavBar from './components/NavBar'
import Home from  './components/Home'
import About from './components/About'
import {Routes, Route} from 'react-router-dom'
import Services from './components/Services'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      
      <Route path= "/" element ={<Home/>}/>
      <Route path="/about" element={ <About/>}/>
      <Route path='/services' element={<Services/>}/>
     
    </Routes>
    </>
  )
}

export default App