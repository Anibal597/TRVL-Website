import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Pages/Navbar';
import Home from './Components/Pages/Home';
import './App.css';
import Services from './Components/Pages/Services';
import SignUp from './Components/Pages/SignUp';
import Newsletter from './Components/Pages/Newsletter';
import Video from './Components/Pages/Video';

function App() {
  return (
    <Router basename="/React-Website">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/video" element={<Video/>} />
      </Routes>
    </Router>
  );
}

export default App;