import './projectspostpage.css'
import React, { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import blogImage1 from '../images/blog-image-1.jpg'
import blogImage2 from '../images/blog-image-2.jpg'
import blogImage3 from '../images/blog-image-3.jpg'
import blogImage4 from '../images/blog-image-4.jpg'
import blogImage5 from '../images/blog-image-5.jpg'
import Aos from "aos"
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faRotateLeft } from '@fortawesome/free-solid-svg-icons'

export  function ProjectsPost(props) {
  
 
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

  const { id } = useParams() // Retrieve the project ID from the URL parameter

  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')
  
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 1000 });
  }, [id]);

  
  
  const projectIndex = projects.findIndex(project => project.id === parseInt(id)) // find the project with the matching id


  if (projectIndex === -1) {
    return (
      <div>
        <p>Page not found.</p>
      </div>
    )
  }

  const project = projects[projectIndex]

  const previousProjectIndex = projectIndex > 0 ? projectIndex - 1 : null;
  const nextProjectIndex = projectIndex < projects.length - 1 ? projectIndex + 1 : null;

  return (
    <div className="projects-post">
      
      <main>

      <div className="projects-post-container" data-aos="fade-in" data-aos-easing="ease-in-out">
        
      <h1 data-aos="fade-in">{project.title}</h1>
      
      <div className="blog-post-img-container">
        <img className="blog-post-img" src={project.image} alt={`${project.name}`}/>
        
        <div className="project-navigation">
        <Link to="/projects" className="project-navigation-links">
          <p><FontAwesomeIcon icon={faRotateLeft} /> back to projects</p>
          </Link>
         {nextProjectIndex !== null && (
           <Link to={`/projects/${projects[nextProjectIndex].id}`} className="project-navigation-links">
              <p>next project <FontAwesomeIcon icon={faArrowRight} /> </p>
           </Link>
          )}
          {previousProjectIndex !== null && (
           <Link to={`/projects/${projects[previousProjectIndex].id}`} className="project-navigation-links">
            <p><FontAwesomeIcon icon={faArrowLeft} /> previous project</p>
            </Link>
         )}
         

        </div>
      </div>
      <p className="date" data-aos="fade-in">{project.date}</p>
      <br/>
      <p data-aos="fade-in">{project.contents}</p>
      </div>
      </main>
    </div>
  )
}