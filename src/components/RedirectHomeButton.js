import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import './redirecthomebutton.css'
import jbIcon from '../images/jbicon.jpg'

export function RedirectHomeButton() {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const changeRedirectStatus = () => {
    setShouldRedirect(true);
  };

  return (
    <div>
      
      <button className="home-nav-button">
      <img src={jbIcon} onClick={changeRedirectStatus}/>
      </button>
      {shouldRedirect && <Navigate to="/" />}
    </div>
  );
}