import { RedirectHomeButton } from "./RedirectHomeButton"
import { useLocation } from 'react-router-dom'
import './header.css'

export default function Header() {

  const location = useLocation()
  const currentPage = location.pathname.substring(1)

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
        <li><a className="navbar-link" href="/about">about</a></li> | 
        <li><a className="navbar-link" href="/projects">projects</a></li> | 
        <li><a className="navbar-link" href="/contact">contact</a></li> 
      </ul>
      </div>
      </nav>
  </header>
  </div>
  )
}