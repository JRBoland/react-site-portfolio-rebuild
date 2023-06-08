import './projectspostpage.css'
import React, { useEffect } from "react"
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
      title: "before dev", 
      //post-image: ,
      date: "November 2020",
      image: `${blogImage1}`,
      description: "What I got up to before being in dev",
      contents: "I had a couple projects, travelled and worked on boats in croatia, worked on music stuff, attempted to make a small business which is still ongoing, but infrequent (creating podcast intros) scored a short film for a london film school which was presented to film festivals. I funded this whilst working for the government dealing with tax and superannation. You can catch me on spotify @ bondla"
    },
    { id: 2, 
      title: "Odin recipes: First ever website", 
      //post-image: ,
      date: "April 2022",
      image: `${blogImage2}`,
      description: "First website built from following the odin project",
      contents: "The very first site I built and deployed when self-teaching with theodinproject.com. A simple receipes site with Homer having a little boogie. Try seeing where the link to my other work takes you."
    },
    { id: 3, 
      title: "Portfolio Website: Old Version", 
      //post-image: ,
      date: "November 2022",
      image: `${blogImage3}`,
      description: "An old portfolio site done as one of the first assignments at Coder Academy.",
      contents: "My second built and deployed website was a portfolio site, made for the second assignment with Coder Academy. A good introduction to site building and styling, and using Github. Static website built using HTML and CSS.  This current site is built using React, you can view its Github repo here: __."
    },
    { id: 4, 
      title: "Terminal Application: Dog Helper Feeding Shelter", 
      //post-image: ,
      date: "December 2023",
      image: `${blogImage4}`,
      description: "Terminal CRUD application made with python",
      contents: "Intro to programming assignment, hard to come up with idea, landed on dog shelter feeding helper - idea is that you can add and remove dogs to a shelter 'inventory' mark which ones have been fed for the day and also monitor and edit their dietary needs. CRUD functionality within python, could do with a lot of refactoring as first project and code is messy."
    },
    { id: 5, 
      title: "Drone Logs - Flask API Web Server", 
      //post-image: ,
      date: "February 2023",
      image: `${blogImage5}`,
      description: "Drone logs API built with flask, python",
      contents: "Coder Academy assignment, built an API. Experience with flask framework, database relationship models, get requests, using insomnia and postman"
    },
    { id: 6, 
      title: "Hackathon: GP Weather Clock", 
      //post-image: ,
      date: "May 2023",
      image: `${blogImage5}`,
      description: "Basic weather clock app built with a team during an in-term Coder Academy Hackathon",
      contents: "Learned git collarboation, further experience with react concepts, further use of HTML, CSS and responsive layout."
    },
  ]

  const { id } = useParams() // Retrieve the project ID from the URL parameter
  
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
        <p className="date" data-aos="fade-in">{project.date}</p>
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
     
      <br/>
      <p data-aos="fade-in">{project.contents}</p>
      </div>
      </main>
    </div>
  )
}