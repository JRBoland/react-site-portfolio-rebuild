import { RedirectHomeButton } from "./RedirectHomeButton"
import { Link, useLocation, Navigate } from 'react-router-dom'
import React, { useEffect, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon  } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { ThemeContext, themes } from '../ThemeContext'

export default function Header() {
  const location = useLocation()
  const currentPage = location.pathname.substring(1)

  const [darkMode, setDarkMode] = React.useState(true)
  

//
//  const [show, setShow] = useState(true)
//  const controlNavbar = () => {
//    if (window.scrollY>100) {
//      setShow(false)
//    } else {
//      setShow(true)
//    }
//  } 
//  
//  useEffect(() => {
//    window.addEventListener('scroll', controlNavbar)
//    return () => {
//      window.removeEventListener('scroll', controlNavbar)
//    }
//  }, [])

  return (
  <div>
      <header id="header">
      <nav className="navigation">
      <div className="homedirectory">
        <RedirectHomeButton />
        <span className="where">{currentPage}</span>
      </div>
      
      <div className="navbar-container">
      <ul className="navbar">
      <li>
        <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <span className="dark-mode-toggle" onClick={() => {
            setDarkMode(!darkMode);
            changeTheme(darkMode ? themes.light : themes.dark)
          }}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon } />
        </span>
        )}
        </ThemeContext.Consumer>
        
      </li>
      <li>
        <Link to="about" className="navbar-link" >about</Link>
      </li> | 
      <li>
        <Link to="projects" className="navbar-link" >projects</Link>
      </li> | 
      <li>
        <Link to="contact" className="navbar-link" >contact</Link>
      </li> 
      </ul>
      </div>
      </nav>
      </header>
  </div>
  )
}