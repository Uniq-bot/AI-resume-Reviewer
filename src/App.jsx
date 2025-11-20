import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Landing from './Page/Landing';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>} />
      </Routes>
    </div>
  )
}

export default App
