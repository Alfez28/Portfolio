import React, { useEffect } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbars from './components/Navbars.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Myskills from './components/Myskills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AOS from 'aos'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects.jsx';

function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/myskills' element={<Myskills />} />
          <Route path='/projects' element={<Projects />} />   
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
