import './aboutpage.css'
import React, { useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faUserGraduate, faCode, faArrowsToCircle, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import jbImage from '../images/jbimage.jpg'
import jbResume from "../images/jamesboland-resume.pdf"
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
        <div className="about-lhs">
        <div className="section-div left" data-aos="fade-up" data-aos-easing="ease-in-out">
          <h1 className="h2-fa-icon">
            <span>About</span> <FontAwesomeIcon icon={faAddressCard} /></h1>
          <br />
          <p>
            THIS IS ALL DRAFT
            <br/>
            <br/>
          Hi I'm James, 
          <br/>
          <br/>
          An aspiring developer currently studying a a Diploma of IT with Coder Academy.
          <br/>
          <br/>
          I've been studying web development since August 2022, where I first started self-teaching using various online resources -thank you theodinproject-. I enrolled for Coder Academy's October intake and have been studying their standard Full Stack Web Development course since, due to finish in August this year.
          <br/>
          <br/>
          I've fallen in love with development ya di ya da.
          I've previously been involved in music production and worked for the government dealing with tax and superannuation. I am looking to switch careers and join the ever-growing world of tech.
          <br/>
          <br/>
          I'm a keen problem solver with an eye for detail & I'm eager to play a part in bringing ideas to life. I am available to work and am looking for opportunities that will help me grow and kick start my career in this chosen field.
        
          
          
          <br/>
          <br/>
          
          </p>
          </div>
          <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100" className="section-div right">
            <h2 className="h2-fa-icon"><FontAwesomeIcon icon={faUserGraduate} /><span>Education</span></h2>
          <p>
          I graduated from the University of Wollongong with a double degree in a Bachelor of Economics & Finance (Economics major) and a Bachelor of Arts (Sociology major).
          <br/>
          <br/>
          I'm currently enrolled in a Full Stack Web Development Bootcamp with Coder Academy, finishing August 2023.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100" className="section-div left">
          <h2 className="h2-fa-icon"><span>Approach</span> <FontAwesomeIcon icon={faArrowsToCircle} /></h2>
          <p>
          I'm a fast, eager learner with a curious mind.
          <br/>
          <br/>
          Coming from a background of dealing with audio and music production, I found some similarities in my approach to working with code.
          I'm interested in coding because it allows some creative freedom in approaching a solution. It's creative problem solving, executed by logic. I love to build things, and to be able to make an impact in the process.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100" className="section-div right">
        <h2 className="h2-fa-icon"><FontAwesomeIcon icon={faCode} /><span>Skills</span></h2>
        <p>
          My skills are expanding as I build more projects. 
          <br/>
          <br/>
          I believe that my strength is in building the front end of applications, however I'm always curious about understanding about whats going on behind the scenes in the back end. 
          <br/>
          <br/>
          I'm currently learning React and I'm keen to get more experience with Tailwind CSS and Bootstrap.
        </p> 
        </div>
        <div data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="100" className="section-div right">
        <h2 className="h2-fa-icon"><FontAwesomeIcon icon={faCode} /><span>Hands on experience with</span></h2>
        <div className="current-skills-div">

        <div className="learnt">
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Flask</li>
          </ul>
        </div>

        <div className="learning">
          <ul>
            <li>PostgreSQL</li>
            <li>Git</li>
            <li>Postman</li>
            <li>Insomnia</li>
            <li>Figma</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        </div>
        </div>
        <div className="filler">
         
            <div className="download">
              <FontAwesomeIcon icon={faFileArrowDown} />
              <span>
              <Link to={jbResume}  target="_blank" download className="download-link-link">
              <p className="download-link">download my resume</p>
              </Link>
              </span>
            </div>
          
        </div>
        </div>
        
        <div className="about-rhs">
      
        <div data-aos="fade-in" className="resume-photo-div">
        <img src={jbImage} className="jbimage" alt="James Boland" />
        
        </div>
       
      </div>
      </div>
      </main>
    </div>
  )
}