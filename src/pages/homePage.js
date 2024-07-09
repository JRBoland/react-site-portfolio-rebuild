import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import jbResume from '../images/jamesboland-resume.pdf'
import './pageStyles/homepage.css'

export function Home(props) {
  useEffect(() => {
    Aos.init({ duration: 2000, easing: 'ease-out-cubic' })

    // Manually delay the feedback container
    const feedbackContainer = document.querySelector('.feedback-container')
    setTimeout(() => {
      feedbackContainer.classList.add('show-feedback')
    }, 4000) // Delay of 4 seconds (4000ms)
  }, [])

  return (
    <div className="page-container">
      <div className="home" data-aos="fade-in" data-aos-easing="ease-in-out">
        <main className="welcome-div">
          <h1 className="welcome-text" data-aos="fade-in">
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
            <span
              className="clear-span"
              data-aos="fade-in"
              data-aos-delay="1200"
            >
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
            <span
              className="clear-span"
              data-aos="fade-in"
              data-aos-delay="1500"
            >
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
            <span
              className="clear-span"
              data-aos="fade-in"
              data-aos-delay="1800"
            >
              and all round lover of bringing ideas to life.
            </span>
            <br />
            <br />
          </p>
          <span
            className="welcome-text"
            data-aos="fade-in"
            data-aos-delay="3000"
          >
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
      <div className="feedback-container">
        <div className="feedback-content">
          <p>
            " James did a fantastic job developing the Fliight Technologies
            website. It's incredibly smooth, mobile-friendly, and aesthetically
            pleasing. He was a pleasure to work with, displaying patience and
            professionalism as we sorted through a large amount of content. We
            also faced some unforeseen issues during the process, which he took
            in stride, ensuring everything was handled seamlessly. We couldn't
            be happier with the result and highly recommend James for any web
            development needs."
          </p>
          <div className="feedback-provider">
            Jonathan Clark
            <br />
            Head of Engineering
            <br />
            Fliight Technologies
          </div>
        </div>
      </div>
    </div>
  )
}
