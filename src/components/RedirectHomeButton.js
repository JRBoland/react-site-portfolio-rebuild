import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import './redirecthomebutton.css'

export function RedirectHomeButton() {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const changeRedirectStatus = () => {
    setShouldRedirect(true);
  };

  return (
    <div>
      <button className="home-nav-button" onClick={changeRedirectStatus}>./JB</button>
      {shouldRedirect && <Navigate to="/" />}
    </div>
  );
}