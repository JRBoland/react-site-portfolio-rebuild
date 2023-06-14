import './homepage.css'
import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'


export  function Home(props) {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className="home" data-aos="fade-in" data-aos-easing="ease-in-out">
      <main className="welcome-div">
      <h1 className="welcome-text" data-aos="fade-in" data-aos-delay="300">Hello.</h1>
      <br />
      <p className="welcome-text" data-aos="fade-in" data-aos-delay="1200">
        My name is 
          <span className="welcome-text-span">
            <Link to="/about"> James Boland</Link>
          </span>
      </p>
      <br />
      <p className="welcome-text" data-aos="fade-in" data-aos-delay="2500">
          I'm a Junior Developer studying at  
          <a className="coder-link" href="https://coderacademy.edu.au/"> Coder Academy.
          </a>
      </p>
      </main>
    </div>
  )
}