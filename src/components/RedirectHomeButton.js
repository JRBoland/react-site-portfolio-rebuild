import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import './redirecthomebutton.css';

export function RedirectHomeButton() {
  const changeRedirectStatus = () => {
    window.location.href = "/";
  }

  return (
    <div>
      <button className="home-nav-button" onClick={changeRedirectStatus}>
        <h2 className="home-nav">./JB</h2>
      </button>
    </div>
  );
}