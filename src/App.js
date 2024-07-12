import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/homePage'
import { About } from './pages/aboutPage'
import { Contact } from './pages/contactPage'
import { Projects } from './pages/projectsPage'
import { ProjectsPost } from './pages/projectsPostPage'
import ThemeContextWrapper from './ThemeProvider'
import NotFound from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <ThemeContextWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectsPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeContextWrapper>
    </BrowserRouter>
  )
}

export default App
