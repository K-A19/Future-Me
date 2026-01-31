import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Home from './pages/Home';
import Grocery from './pages/Grocery';
import Office from './pages/Office';
import School from './pages/School';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/office" element={<Office />} />
        <Route path="/school" element={<School />} />
      </Routes>
    </Router>
  );
}

export default App;
