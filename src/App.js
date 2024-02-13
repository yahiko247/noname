import React from 'react'
import Login2 from './components/pages/Login2'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './components/pages/RegisterPage'
import Home from './components/pages/Home'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login2 />}></Route>
        <Route path='/signup' element={<RegisterPage />}></Route>
        <Route path='/home' element={<Home />}></Route>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
