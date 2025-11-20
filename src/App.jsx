import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Landing from './Page/Landing';
import Footer from './Common/Footer';
import Nav from './Common/Nav';
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
