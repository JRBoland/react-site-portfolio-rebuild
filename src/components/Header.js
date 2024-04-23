import { RedirectHomeButton } from './RedirectHomeButton'
import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { ThemeContext, themes } from '../ThemeContext'
// eslint-disable-next-line
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Header() {
  const location = useLocation()
  const currentPage = location.pathname.substring(1) || 'home'

  const [darkMode, setDarkMode] = React.useState(true)
  const [showMenu, setShowMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800)
    }

    handleResize() // Check initial screen width
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleLinkClick = () => {
    setShowMenu(false)
  }

  return (
    <div>
      <header className="header">
        <nav className="navigation">
          <div className="homedirectory">
            <RedirectHomeButton />
            <span className="where">{currentPage}</span>
          </div>
          {isMobile ? (
            <>
              <div
                className={`burger-menu ${showMenu ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              {showMenu && (
                <div className="mobile-menu">
                  <ul className="mobile-navbar">
                    <li>
                      <Link
                        to="/about"
                        className="mobile-navbar-link"
                        onClick={handleLinkClick}
                      >
                        about
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/projects"
                        className="mobile-navbar-link"
                        onClick={handleLinkClick}
                      >
                        projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="mobile-navbar-link"
                        onClick={handleLinkClick}
                      >
                        contact
                      </Link>
                    </li>
                    <li>
                      <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                          <span
                            className="dark-mode-toggle"
                            onClick={() => {
                              setDarkMode(!darkMode)
                              changeTheme(darkMode ? themes.light : themes.dark)
                            }}
                          >
                            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                          </span>
                        )}
                      </ThemeContext.Consumer>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div className="navbar-container">
              <ul className="navbar">
                <li>
                  <ThemeContext.Consumer>
                    {({ changeTheme }) => (
                      <span
                        className="dark-mode-toggle"
                        onClick={() => {
                          setDarkMode(!darkMode)
                          changeTheme(darkMode ? themes.light : themes.dark)
                        }}
                      >
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                      </span>
                    )}
                  </ThemeContext.Consumer>
                </li>
                <li>
                  <Link to="/about" className="navbar-link">
                    about
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="navbar-link">
                    projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="navbar-link">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </div>
  )
}
