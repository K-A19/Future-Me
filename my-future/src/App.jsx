import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Index';
import Home from './Home';
import Grocery from './Grocery';
import Office from './Office';
import School from './School';

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
