import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import './pageStyles/notfoundpage.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const NotFound = () => {
  const navigate = useNavigate()

  const handleReturnHome = () => {
    navigate('/')
  }

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="not-found-container" data-aos="fade-in">
      <h1 className="not-found-title">404 Not Found</h1>
      <p className="not-found-message">
        The page you are looking for does not exist.
      </p>
      <div onClick={handleReturnHome} className="return-home-button">
        return to home
      </div>
    </div>
  )
}

export default NotFound
