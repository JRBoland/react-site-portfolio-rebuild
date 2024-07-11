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
      'James was a great asset in creatively solving some problems that we had with improving our FAQ set up for guests. After a short meeting he had presented a wireframe that met our needs in the most effective manner, and set upon the task with care to complete the project and liaising any questions that may have arisen as there was some individual properties that had different needs, and was generally easy to work with. His idea and work saved us an annual cost of $1500 + so was well worth the investment.',
    provider:
      'Patrick Killin\nDirector\nJindabyne Real Estate,\nAccommodation Jindabyne',
  },
]

export function Home(props) {
  const [show, setShow] = useState(true)
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(-1)
  const [showFinalMessage, setShowFinalMessage] = useState(false)
  const [scrollTimeout, setScrollTimeout] = useState(null)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [scrollDelta, setScrollDelta] = useState(0)
  const [touchStartY, setTouchStartY] = useState(0)
  const [touchEndY, setTouchEndY] = useState(0)
  const [showWelcomeTextScroll, setShowWelcomeTextScroll] = useState(false)
  const [showBackButton, setShowBackButton] = useState(false) 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeTextScroll(true)
    }, 1600)

    return () => clearTimeout(timer)
  }, [])

  const fadeProps = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0px)' : 'translateY(-40px)',
    config: { mass: 3, tension: 100, friction: 22 },
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
      delay: item === 0 ? 300 : 600,
    }),
    leave: {
      opacity: 0,
      transform:
        scrollDirection === 'down' ? 'translateY(-60px)' : 'translateY(60px)',
    },
    config: { mass: 2.5, tension: 100, friction: 20 },
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
    onRest: () => {
      if (showFinalMessage) {
        setShowBackButton(true) // Show back button when final message is shown
      }
    },
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
          if (Math.abs(scrollDelta) > 200) {
            if (scrollDelta > 0) {
              setScrollDirection('down')
              if (show) {
                setShow(false)
              } else if (currentFeedbackIndex < feedbackList.length) {
                handleNextFeedback()
              }
            } else {
              setScrollDirection('up')
              if (showFinalMessage) {
                setShowFinalMessage(false)
                setCurrentFeedbackIndex(feedbackList.length - 1)
              } else if (currentFeedbackIndex === 0) {
                setShow(true)
                setCurrentFeedbackIndex(-1)
                setShowBackButton(false) // Hide back button when going back to welcome text
                setShowFinalMessage(false)
              } else if (currentFeedbackIndex > 0) {
                handlePreviousFeedback()
              }
            }
            setScrollDelta(0)
          }
        }, 300) // Increased debounce timeout
      )
    }

    const handleTouchStart = (event) => {
      setTouchStartY(event.touches[0].clientY)
    }

    const handleTouchMove = (event) => {
      setTouchEndY(event.touches[0].clientY)
    }

    const handleTouchEnd = (event) => {
      const touchDelta = touchStartY - touchEndY
      const target = event.target
      if (Math.abs(touchDelta) > 75) {
        // Increase the threshold for triggering
        if (
          String(target.className).includes('back-button') ||
          target.tagName === 'SPAN' || target.tagName === 'H2'
        ) {
          return
        }
        if (touchDelta > 0) {
          setScrollDirection('down')
          if (show) {
            setShow(false)
          } else if (currentFeedbackIndex < feedbackList.length) {
            handleNextFeedback()
          }
        } else {
          setScrollDirection('up')
          if (showFinalMessage) {
            setShowFinalMessage(false)
            setCurrentFeedbackIndex(feedbackList.length - 1)
          } else if (currentFeedbackIndex === 0) {
            setShow(true)
            setCurrentFeedbackIndex(-1)
            setShowBackButton(false) // Hide back button when going back to welcome text
            setShowFinalMessage(false)
          } else if (currentFeedbackIndex > 0) {
            handlePreviousFeedback()
          }
        }
      }
    }

    window.addEventListener('wheel', handleWheel)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [
    show,
    currentFeedbackIndex,
    showFinalMessage,
    scrollTimeout,
    scrollDelta,
    touchStartY,
    touchEndY,
  ])

  const handleNextFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) =>
      Math.min(prevIndex + 1, feedbackList.length)
    )
  }

  const handlePreviousFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) => {
      const newIndex = Math.max(prevIndex - 1, -1)
      if (newIndex === -1) {
        setShowBackButton(false) // Hide back button when going back to welcome text
      }
      if (newIndex < feedbackList.length) {
        setShowFinalMessage(false) // Hide final message when going to previous feedback
      }
      if (newIndex === -1) {
        setShow(true) // Show the welcome text
      }
      return newIndex
    })
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
          <br />
          {showWelcomeTextScroll && (
            <p
              className="welcome-text-scroll"
              data-aos="fade-in"
              data-aos-delay="3000"
            >
              scroll{' '}
              <span className="lottie-icon">
                <lottie-player
                  src="https://lottie.host/91c7b5ed-0f86-4699-890b-92684385e1db/PePMFMofjt.json"
                  background="transparent"
                  speed="1"
                  style={{ width: 40, height: 40 }}
                  loop
                  autoplay
                  direction="1"
                  mode="normal"
                ></lottie-player>
              </span>{' '}
              to see what people are saying
            </p>
          )}
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
      <animated.div
        className={`final-message ${showFinalMessage ? 'visible' : ''}`}
        style={finalMessageProps}
      >
        <div className="final-message-content">
          <span className="welcome-text">
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
          </span>
        </div>
      </animated.div>
      <div className="back-button-container">
        {showBackButton && (
          <div className="back-button" data-aos="fade-in" data-aos-delay="600">
            <span onClick={handlePreviousFeedback}>^</span>
          </div>
        )}
      </div>
    </div>
  )
}
