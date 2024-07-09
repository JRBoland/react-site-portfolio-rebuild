import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import Aos from 'aos'
import 'aos/dist/aos.css'
import './pageStyles/contactpage.css'

export function Contact(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : ''
    if (subject) params += `subject=${encodeURIComponent(subject)}`
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`

    return <a href={`mailto:${email}${params}`}>{children}</a>
  }

  return (
    <div className="contact">
      <ul
        className="contact-list"
        data-aos="fade-in"
        data-aos-anchor-placement="center-bottom"
      >
        <li className="mail-me">
          <Mailto
            email="jamesbolanddev@gmail.com"
            subject="Hey!"
            body="Let's grab a coffee!"
          >
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>{' '}
            send me an email
          </Mailto>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jamesrboland/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>{' '}
            connect on linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/JRBoland"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>{' '}
            check out my github
          </a>
        </li>
      </ul>
    </div>
  )
}
