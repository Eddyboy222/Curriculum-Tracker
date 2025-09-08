import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoginP from './Pages/LoginP';
import MrAzeez from './Pages/MrAzeez';
import MrsPelumi from './Pages/MrsPelumi';
import MrEmma from './Pages/MrEmma';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginP/>} />
        <Route path='/mrazeez' element={<MrAzeez/>} />
        <Route path='/mrspelumi' element={<MrsPelumi/>} />
        <Route path='/mremma' element={<MrEmma/>} />
      </Routes>
    </Router>
  )
}

export default App
