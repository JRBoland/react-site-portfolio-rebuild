import './homepage.css'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import jbResume from '../images/jamesboland-resume.pdf'

export function Home(props) {
  useEffect(() => {
    Aos.init({ duration: 2000, easing: 'ease-out-cubic' })
  }, [])
  return (
    <div className="home" data-aos="fade-in" data-aos-easing="ease-in-out">
      <main className="welcome-div">
        <h1 className="welcome-text" data-aos="fade-in" >
          Hi.
        </h1>
        <br />
        <p className="welcome-text" data-aos="fade-in" data-aos-delay="600">
          My name is
          <span className="welcome-text-span">
            <Link to="/about"> James Boland</Link>
          </span>
        </p>
        <br />
        <p className="welcome-text" data-aos="fade-in" data-aos-delay="1200">
          I'm a
          <span className="clear-span" data-aos="fade-in" data-aos-delay="1200">
            <a
              href="https://github.com/JRBoland"
              className="download-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Web Developer,{' '}
            </a>
          </span>
          <span className="clear-span" data-aos="fade-in" data-aos-delay="1500">
            hobbyist
            <a
              href="https://open.spotify.com/artist/5kYuYclOITzjaaYLAT42gK"
              className="download-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Music Producer,{' '}
            </a>
          </span>
          <span className="clear-span" data-aos="fade-in" data-aos-delay="1800">
            and all round lover of bringing ideas to life.
          </span>
          <br />
          <br />
        </p>
        <span className="welcome-text" data-aos="fade-in" data-aos-delay="3000">
          <Link
            to={jbResume}
            target="_blank"
            download
            className="download-link-link"
          >
            <span className="download-link"> Download my resume here.</span>
          </Link>
        </span>
      </main>
    </div>
  )
}
