import './footer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import jbResume from '../images/jamesboland-resume.pdf'

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="contact-info">
          <a
            href={jbResume}
            className="download-link"
            alt="Download resume"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFileArrowDown} />
          </a>
          <a
            href="https://www.linkedin.com/in/jamesrboland/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/JRBoland"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="links">
          <span className="copyright">
            &copy; James Boland 2024. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}
