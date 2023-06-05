
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/homePage'
import { About } from './pages/aboutPage'
import { Contact } from './pages/contactPage'
import { Projects } from './pages/projectsPage'
import { ProjectsPost } from './pages/projectsPostPage'




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectsPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  
  );
}

export default App;
