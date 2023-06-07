import './projectspage.css'
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import blogImage1 from '../images/blog-image-1.jpg'
import blogImage2 from '../images/blog-image-2.jpg'
import blogImage3 from '../images/blog-image-3.jpg'
import blogImage4 from '../images/blog-image-4.jpg'
import blogImage5 from '../images/blog-image-5.jpg'
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
      title: "Terminal Application", 
      //post-image: ,
      date: "21-8-23",
      image: `${blogImage1}`,
      description: "description goes here",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { id: 2, 
      title: "Flask API Web Server", 
      //post-image: ,
      date: "22-8-23",
      image: `${blogImage2}`,
      description: "description goes here",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { id: 3, 
      title: "Hackathon: GP Weather Clock", 
      //post-image: ,
      date: "23-8-23",
      image: `${blogImage3}`,
      description: "description goes here",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { id: 4, 
      title: "Site Rebuild", 
      //post-image: ,
      date: "24-8-23",
      image: `${blogImage4}`,
      description: "description goes here",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { id: 5, 
      title: "Ongoing stuff", 
      //post-image: ,
      date: "25-8-23",
      image: `${blogImage5}`,
      description: "description goes here",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
]

  return (
    <div className="projects">
      <main>
      <div className="projects-split-view" data-aos="fade-in" data-aos-easing="ease-in-out">
      <h1 className="h2-fa-icon"><span>Projects</span> <FontAwesomeIcon icon={faDiagramProject} className="h2-fa-icon-dec"/></h1>
      <p>
        A collection of projects Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
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
              {project.date}
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