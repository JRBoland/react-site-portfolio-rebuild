import './aboutpage.css'
import React, { useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faUserGraduate, faCode, faArrowsToCircle } from '@fortawesome/free-solid-svg-icons'
import jbImage from '../images/jbimage.jpg'
import Aos from "aos"
import "aos/dist/aos.css"



export  function About(props) {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className="about">
      <main>
        <div className="about-split-view">

        <div className="about-rhs">
        <div data-aos="fade-up" className="section-div left">
          <h1 className="h2-fa-icon"><span>About</span> <FontAwesomeIcon icon={faAddressCard} /></h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
          <div data-aos="fade-up" className="section-div right">
            <h2 className="h2-fa-icon"><FontAwesomeIcon icon={faUserGraduate} /><span>Education</span></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div data-aos="fade-up" className="section-div left">
          <h2 className="h2-fa-icon"><span>Approach</span> <FontAwesomeIcon icon={faArrowsToCircle} /></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div data-aos="fade-up" className="section-div right">
        <h2 className="h2-fa-icon"><FontAwesomeIcon icon={faCode} /><span>Skills</span></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p> 
        </div>
        <div data-aos="fade-up" className="section-div right">
        <h2 className="h2-fa-icon"><FontAwesomeIcon icon={faCode} /><span>Currently learning</span></h2>
        <div className="current-skills-div">

        <div className="learnt">
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>Flask</li>
            <li>Express</li>
          </ul>
        </div>

        <div className="learning">
          <ul>
            <li>Express</li>
            <li>C++</li>
          </ul>
        </div>
        
        </div>
        </div>
        </div>
      <div className="about-lhs">
        <div className="resume-photo-div">
        <img data-aos="fade-in"src={jbImage} className="jbimage" alt="James Boland" />
        Get my resume  
        </div>
      </div>
      </div>
      </main>
    </div>
  )
}