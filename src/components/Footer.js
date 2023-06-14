import './footer.css'
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
  <div>
  <footer className="footer">
    <div class="contact-info">
    <a href="https://www.linkedin.com/in/jamesrboland/" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://github.com/JRBoland" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faGithub} />
    </a>
    </div>
    <div class="links">
      
       <span className="copyright">&copy; James Boland 2022. All rights reserved.</span>
      
    </div>
</footer>
</div>
)
}