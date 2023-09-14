import './aboutpage.css'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressCard,
  faUserGraduate,
  faCode,
  faArrowsToCircle,
  faFileArrowDown,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import jbImage from '../images/jbimage.jpg'
import jbResume from '../images/jamesboland-resume.pdf'
import Aos from 'aos'
import 'aos/dist/aos.css'

export function About(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="about">
      <main>
        <div className="about-split-view">
          <div className="about-lhs">
            <div
              className="section-div left"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              <h1 className="h2-fa-icon">
                <span>About</span> <FontAwesomeIcon icon={faAddressCard} />
              </h1>
              <p>
                Hi I'm James Boland.
                <br />
                <br />
                I enjoy making things.
                <br />
                <br />
                I'm an aspiring developer who has recently completed studying a
                Diploma of IT with Coder Academy.
                <br />
                <br />
                I've been studying web development since August 2022, where I
                started self-teaching using various online resources{' '}
                <em>(thank you theodinproject)</em>.
                <br />
                <br />
                I immediately took to the development process of planning and
                building something from nothing, and soon found myself enrolling
                for Coder Academy's October intake of their Full Stack Web
                Development course. I've been studying with them since October
                2022 and completed my studies in August this year (2023).
                <br />
                <br />
                <em>A little bit on how I got here:</em>
                <br />
                <br />
                In 2018, after graduating from University, I went overseas for 5
                months, travelling solo and pursuing new and challenging
                experiences (such as a road trip through the North East corner
                of the US and working on boats in Croatia!). I'd recognised that
                what I had studied in University (B Econ & Finance/B Arts
                Sociology) didn't align with my interests and create
                opportunities for a career I could see myself getting into.
                <br />
                <br />
                I spent some time working in hospitality and for the Australian
                Government while also exploring different interests with an open
                mind, mainly related to music and audio production.
                <br />
                <br />I made some projects and released some music (you can
                check me out on Spotify as{' '}
                <a
                  href="https://open.spotify.com/artist/5kYuYclOITzjaaYLAT42gK"
                  className="download-link-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  'bondla'
                </a>
                ) and towards the end of 2021, I started my own small business{' '}
                <a
                  href="https://podcusts.com"
                  className="download-link-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Podcusts
                </a>
                , delivering custom podcast audio intros and outros, tailored to
                the clients specifications. It was in developing this small side
                business (which is still running, though infrequent) that I
                stumbled across web development. I found I was really drawn to
                the whole "creating a website" part of starting a business,
                using site builders like Webflow (which didn't work) and{' '}
                <a
                  href="https://podcusts.wixsite.com/website-2/"
                  className="download-link-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wix
                </a>{' '}
                (which did work! phew).
                <br />
                <br />
                It didn't take much for me to recognise that I'd fallen in love
                with coding
                <br />
                <br />- and now I'm here, keen to start a new career in tech.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              className="section-div right"
            >
              <h2 className="h2-fa-icon">
                <FontAwesomeIcon icon={faUserGraduate} /> <span>Education</span>
              </h2>
              <p>
                I graduated from the University of Wollongong with a double
                degree in a Bachelor of Economics & Finance (Economics major)
                and a Bachelor of Arts (Sociology major).
                <br />
                <br />
                I've recently completed a Full Stack Web Development Bootcamp
                with Coder Academy, (Diploma of Information Technology), where I
                completed my studies with a High Distinction average (Weighted
                Average Mark of 90.33%) throughout all terms.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              className="section-div left"
            >
              <h2 className="h2-fa-icon">
                <span>Approach</span>{' '}
                <FontAwesomeIcon icon={faArrowsToCircle} />
              </h2>
              <p>
                I'm a fast, eager learner with a curious mind and an eye for
                detail.
                <br />
                <br />
                Coming from a background of dealing with audio and music
                production, I've found that my true passion lies in creating
                something starting from it's seed - an idea.
                <br />
                <br />
                I enjoy playing a role in each part of the development cycle,
                from ideation and planning, to production-ready deployment.
                <br />
                <br />
                I am available to work and am looking for opportunities that
                will help me grow and kick start my career in this field.
                <br />
                <br />
                I'm ready to play a part in bringing ideas to life.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              className="section-div right"
            >
              <h2 className="h2-fa-icon">
                <FontAwesomeIcon icon={faCode} /> <span>Skills</span>
              </h2>
              <p>
                My skills are expanding as I build more projects. For an up to
                date list, check out my{' '}
                <Link
                  to={jbResume}
                  target="_blank"
                  download
                  className="download-link-link"
                >
                  resume
                </Link>
                .
                <br />
                <br />
                I have experience in the full-stack of web development, with a
                leaning towards the front end of applications. That being said,
                I'm always curious about understanding about whats going on
                behind the scenes in the back end and am eager to expand my
                skills with consideration of the full-stack.
                <br />
                <br />I have recently built a{' '}
                <a
                  href="https://van-voyage.netlify.app"
                  className="download-link-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  full stack booking application
                </a>{' '}
                with the MERN stack (MongoDB, Express.js, React, Node.js).
                <br />
                <br />
                I'm currently doing some additional freelance work, working with
                WordPress (something new to me!) and React.
              </p>
            </div>
            <div
              data-aos="fade-in"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              className="section-div right"
            >
              <h2 className="h2-fa-icon">
                <span>Hands on experience with</span>{' '}
                <FontAwesomeIcon icon={faTerminal} />
              </h2>
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
                    <li>MongoDB Atlas</li>
                    <li>Render</li>
                    <li>Netlify</li>
                  </ul>
                </div>

                <div className="learning">
                  <ul>
                    <li>PostgreSQL</li>
                    <li>Jest</li>
                    <li>Git</li>
                    <li>Postman</li>
                    <li>Insomnia</li>
                    <li>Figma</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Tailwind</li>
                    <li>Sass</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="filler">
              <div className="download">
                <FontAwesomeIcon icon={faFileArrowDown} />
                <span>
                  <Link
                    to={jbResume}
                    target="_blank"
                    download
                    className="download-link-link"
                  >
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
