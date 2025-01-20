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
import Apple from './components/pages/Apple';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/iconic" element={<Iconic />} />
      </Routes>
    </Router>
  );
}

export default App;
