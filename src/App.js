import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Favorite from './components/pages/Favorite';
import Iconic from './components/pages/Iconic';
import Popular from './components/pages/Popular';
import Pineapple from './components/pages/Pineapple';
import Pear from './components/pages/Pear';
import Watermelon from './components/pages/Watermelon';
import Lemon from './components/pages/Lemon';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/vblackburn" element={<Home />} />
        <Route path="/vblackburn/favorite" element={<Favorite />} />
        <Route path="/vblackburn/iconic" element={<Iconic />} />
        <Route path="/vblackburn/popular" element={<Popular />} />
        <Route path="/vblackburn/pineapple-trivia" element={<Pineapple />} />
        <Route path="/vblackburn/pear-trivia" element={<Pear />} />
        <Route path="/vblackburn/watermelon-trivia" element={<Watermelon />} />
        <Route path="/vblackburn/lemon-trivia" element={<Lemon />} />
      </Routes>
    </Router>
  );
}

export default App;
