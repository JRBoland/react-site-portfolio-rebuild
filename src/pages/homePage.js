import './pageStyles/homepage.css'
import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import jbResume from '../images/jamesboland-resume.pdf'
import { useSpring, animated, useTransition } from '@react-spring/web'

const feedbackList = [
  {
    content:
      "James did a fantastic job developing the Fliight Technologies website. It's incredibly smooth, mobile-friendly, and aesthetically pleasing. He was a pleasure to work with, displaying patience and professionalism as we sorted through a large amount of content. We also faced some unforeseen issues during the process, which he took in stride, ensuring everything was handled seamlessly. We couldn't be happier with the result and highly recommend James for any web development needs.",
    provider: 'Jonathan Clark\nHead of Engineering\nFliight Technologies',
  },
  {
    content:
      "James was instrumental in helping us modernize our tech stack and streamline our processes. His expertise in web development and project management ensured our project's success.",
    provider: 'Sarah Johnson\nCTO\nTech Innovators',
  },
  {
    content:
      'Working with James was a pleasure. His attention to detail and dedication to delivering high-quality work exceeded our expectations.',
    provider: 'Michael Adams\nProject Manager\nCreative Solutions',
  },
]

export function Home(props) {
  const [show, setShow] = useState(true)
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(-1)
  const [showFinalMessage, setShowFinalMessage] = useState(false)
  const [scrollTimeout, setScrollTimeout] = useState(null)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [scrollDelta, setScrollDelta] = useState(0)

  const fadeProps = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0px)' : 'translateY(-40px)',
    config: { mass: 3, tension: 100, friction: 20 }, // Adjusting spring physics
    delay: show ? 400 : 0,
    onRest: () => {
      if (!show && currentFeedbackIndex === -1) {
        setCurrentFeedbackIndex(0)
      }
    },
  })

  const feedbackTransition = useTransition(currentFeedbackIndex, {
    from: {
      opacity: 0,
      transform:
        scrollDirection === 'down' ? 'translateY(60px)' : 'translateY(-60px)',
    },
    enter: (item) => ({
      opacity: 1,
      transform: 'translateY(0px)',
      delay: item === 0 ? 300 : 600, // Reduce delay for the first feedback
    }),
    leave: {
      opacity: 0,
      transform:
        scrollDirection === 'down' ? 'translateY(-60px)' : 'translateY(60px)',
    },
    config: { mass: 2.5, tension: 100, friction: 20 }, // Adjusting spring physics
    onRest: () => {
      if (
        currentFeedbackIndex === feedbackList.length &&
        scrollDirection === 'down'
      ) {
        setShowFinalMessage(true)
      }
    },
  })

  const finalMessageProps = useSpring({
    opacity: showFinalMessage ? 1 : 0,
    transform: showFinalMessage ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 2.5, tension: 100, friction: 20 },
    delay: show ? 400 : 0,
  })

  useEffect(() => {
    Aos.init({ duration: 2000, easing: 'ease-out-cubic' })

    const handleWheel = (event) => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      setScrollDelta((prevDelta) => prevDelta + event.deltaY)

      setScrollTimeout(
        setTimeout(() => {
          if (Math.abs(scrollDelta) > 250) {
            // Increase the threshold for triggering
            if (scrollDelta > 0) {
              setScrollDirection('down')
              // User scrolled down
              if (show) {
                setShow(false)
              } else if (currentFeedbackIndex < feedbackList.length) {
                handleNextFeedback()
              }
            } else {
              setScrollDirection('up')
              // User scrolled up
              if (showFinalMessage) {
                setShowFinalMessage(false)
                setCurrentFeedbackIndex(feedbackList.length - 1)
              } else if (currentFeedbackIndex === 0) {
                setShow(true)
                setCurrentFeedbackIndex(-1)
              } else if (currentFeedbackIndex > 0) {
                handlePreviousFeedback()
              }
            }
            setScrollDelta(0) // Reset the scroll delta
          }
        }, 300) // Increased debounce timeout
      )
    }

    window.addEventListener('wheel', handleWheel)
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [show, currentFeedbackIndex, showFinalMessage, scrollTimeout, scrollDelta])

  const handleNextFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) =>
      Math.min(prevIndex + 1, feedbackList.length)
    )
  }

  const handlePreviousFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  return (
    <div className="container" data-aos="fade-in" data-aos-easing="ease-in-out">
      <animated.div className="home" style={fadeProps}>
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
      </animated.div>
      {feedbackTransition((style, index) =>
        index >= 0 && index < feedbackList.length ? (
          <animated.div className="home show" style={style}>
            <main className="feedback-container show-feedback">
              <div className="feedback-content">
                <p>{feedbackList[index].content}</p>
                <div className="feedback-lower-container">
                  <div className="feedback-provider">
                    {feedbackList[index].provider
                      .split('\n')
                      .map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              </div>
            </main>
          </animated.div>
        ) : null
      )}
      <animated.div className="final-message" style={finalMessageProps}>
        <div className="final-message-content">
          <p className="welcome-text">
            {' '}
            you can find out a bit more
            <ul>
              <li className="clear-span">
                <Link to="/about">about me,</Link>
              </li>
              <li>
                <Link to="/projects">my projects,</Link>
              </li>
              or feel free to
              <li>
                <Link to="/contact">get in touch.</Link>
              </li>
            </ul>
          </p>
        </div>
      </animated.div>
    </div>
  )
}
