import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import School from './pages/School'
import Grocery from './pages/Grocery'
import Office from '.pages/Office'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/school" element={<School />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/office" element={<Office />} />
      </Routes>
    </Router>
  )
}

export default App
