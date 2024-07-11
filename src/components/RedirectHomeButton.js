import React from 'react'
import { useNavigate } from 'react-router-dom'
import './redirecthomebutton.css'

export function RedirectHomeButton({ resetHomePageState }) {
  const navigate = useNavigate()

  const changeRedirectStatus = (event) => {
    event.preventDefault()
    navigate('/', { replace: true })
    window.location.reload()
  }

  return (
    <div>
      <button className="home-nav-button" onClick={changeRedirectStatus}>
        <h2 className="home-nav">./JB</h2>
      </button>
    </div>
  )
}
