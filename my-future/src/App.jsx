import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Index from './pages/Index';
import Home from './pages/Home';
import Grocery from './pages/Grocery';
import Office from './pages/Office';
import School from './pages/School';
import ProtectedRoute from './pages/ProtectedRoute';
import AvatarCustomizer from './pages/AvatarCustomizer';

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/create-avatar" element={<AvatarCustomizer />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/office" element={<Office />} />
            <Route path="/school" element={<School />} />
          </Route>
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
