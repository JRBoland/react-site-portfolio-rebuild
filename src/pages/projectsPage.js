import './projectspage.css'
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import blogImage1 from '../images/blog-image-1.jpg'
import blogImage2 from '../images/blog-image-2.jpg'
import blogImage3 from '../images/blog-image-3.jpg'
import blogImage4 from '../images/blog-image-4.jpg'
import blogImage5 from '../images/blog-image-5.jpg'
import blogImage6 from '../images/blog-image-6.jpg'
import Aos from "aos"
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'



export  function Projects(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])
  const projects = [
    { id: 1, 
      title: "before dev", 
      //post-image: ,
      date: "November 2020",
      image: `${blogImage6}`,
      description: "What I got up to before being in web development",
      contents: "I had a couple projects, travelled and worked on boats in croatia, worked on music stuff, attempted to make a small business which is still ongoing, but infrequent (creating podcast intros) scored a short film for a london film school which was presented to film festivals. I funded this whilst working for the government dealing with tax and superannation. You can catch me on spotify @ bondla",
      link: ""
    },
    { id: 2, 
      title: "Odin recipes: First ever website", 
      //post-image: ,
      date: "April 2022",
      image: `${blogImage2}`,
      description: "First website built from following The Odin Project",
      contents: "The very first site I built and deployed when self-teaching with theodinproject.com. A simple receipes site with Homer having a little boogie. Try seeing where the link to my other work takes you.",
      link: "https://jrboland.github.io/odin-recipes/"
    },
    { id: 3, 
      title: "Portfolio Website: Old Version", 
      //post-image: ,
      date: "November 2022",
      image: `${blogImage5}`,
      description: "An old portfolio site done as one of the first assignments at Coder Academy",
      contents: "My second built and deployed website was a portfolio site, made for the second assignment with Coder Academy. A good introduction to site building and styling, and using Github. Static website built using HTML and CSS.  This current site is built using React, you can view its Github repo here: __.",
      link: "https://github.com/JRBoland/JamesBoland_T1A2"
    },
    { id: 4, 
      title: "Terminal Application: Dog Helper Feeding Shelter", 
      //post-image: ,
      date: "December 2023",
      image: `${blogImage3}`,
      description: "Terminal CRUD application made with Python",
      contents: "Intro to programming assignment, hard to come up with idea, landed on dog shelter feeding helper - idea is that you can add and remove dogs to a shelter 'inventory' mark which ones have been fed for the day and also monitor and edit their dietary needs. CRUD functionality within python, could do with a lot of refactoring as first project and code is messy.",
      link: "https://github.com/JRBoland/T1A3-Terminal-Application"
    },
    { id: 5, 
      title: "Drone Logs - Flask API Web Server", 
      //post-image: ,
      date: "February 2023",
      image: `${blogImage4}`,
      description: "Drone logs API built with Flask, Python",
      contents: "Coder Academy assignment, built an API. Experience with flask framework, database relationship models, get requests, using insomnia and postman",
      link: "https://github.com/JRBoland/JamesBoland_T2A2"
    },
    { id: 6, 
      title: "Hackathon: GP Weather Clock", 
      //post-image: ,
      date: "May 2023",
      image: `${blogImage1}`,
      description: "Basic weather clock app built with a team during an in-term Coder Academy Hackathon",
      contents: "Learned git collaboration, further experience with react concepts, further use of HTML, CSS and responsive layout.",
      link: "https://github.com/JRBoland/JamesBoland_T2A2"
    },
  ]
  projects.reverse()
  return (
    <div className="projects">
      <main>
      <div className="projects-split-view" data-aos="fade-in" data-aos-easing="ease-in-out">
      <h1 className="h2-fa-icon"><span>Projects</span> <FontAwesomeIcon icon={faDiagramProject} className="h2-fa-icon-dec"/></h1>
      <p>
        These are some projects I've worked on during my short journey into web development.
      </p>  
      <div className="projects-list">
      
      <div className="projects-section-div">
      
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="projects-map" data-aos="fade-in" data-aos-easing="ease-in-out">
            <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none', pointerEvents: 'auto', zIndex: '555' }} className="projects-link"
            >  
            <h2>{project.title} </h2>
            <img src={project.image} className="projects-img" alt={`${project.name}`}/>
            </Link>
        
            <p className="projects-description">
              <em>{project.date}</em>
              <br/>
              <br/>
              {project.description}
            </p>
          </li>
        ))}
      </ul>
      </div>
      </div>
      </div>
      </main>
      
    </div>
  )
}