
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/homePage'
import { About } from './pages/aboutPage'
import { Contact } from './pages/contactPage'
import { Projects } from './pages/projectsPage'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  
  );
}

export default App;
