import './homepage.css'
import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"


export  function Home(props) {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className="home" data-aos="fade-in" data-aos-easing="ease-in-out">
      <main className="welcome-div">
      <h1 data-aos="fade-in" data-aos-delay="300">Welcome.</h1>
      <br />
      <p data-aos="fade-in" data-aos-delay="1200">My name is James Boland</p>
      <br />
      <p data-aos="fade-in" data-aos-delay="2500"className="typing-text">I'm a web developer in training.</p>
      </main>
    </div>
  )
}