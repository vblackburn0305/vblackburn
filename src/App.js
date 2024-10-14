import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/iconic" element={<Iconic />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/pineapple-trivia" element={<Pineapple />} />
        <Route path="/pear-trivia" element={<Pear />} />
        <Route path="/watermelon-trivia" element={<Watermelon />} />
        <Route path="/lemon-trivia" element={<Lemon />} />
      </Routes>
    </Router>
  );
}

export default App;
