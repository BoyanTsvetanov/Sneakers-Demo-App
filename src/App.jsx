import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <Router basename="/Sneakers-Demo-App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}

export default App