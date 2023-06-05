import React, { useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Aos from "aos"
import "aos/dist/aos.css"
import './contactpage.css'

export  function Contact(props) {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])
  return (
    <div data-aos="fade-in"
    data-aos-anchor-placement="center-bottom"className="contact">
      <ul class="contact-list">
      
        
        <li> <span><FontAwesomeIcon icon={faEnvelope} /></span> send me an email</li>
        <li> <span><FontAwesomeIcon icon={faLinkedin} /></span> connect on linkedin</li>
        <li> <span><FontAwesomeIcon icon={faGithub} /></span> check out my github</li>
      </ul>
    </div>
  )
}