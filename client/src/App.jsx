import React from 'react'
<<<<<<< HEAD
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
          <Home/>
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-900'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
>>>>>>> 94f32fa796220a126e62865975b64870f87197e8
    </div>
  )
}

export default App
