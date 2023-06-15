import './projectspostpage.css'
import React, { useEffect } from "react"
import { useParams, Link } from 'react-router-dom'
import blogImage1 from '../images/blog-image-1.jpg'
import blogImage2 from '../images/blog-image-2.jpg'
import blogImage3 from '../images/blog-image-3.jpg'
import blogImage4 from '../images/blog-image-4.jpg'
import blogImage5 from '../images/blog-image-5.jpg'
import blogImage6 from '../images/blog-image-6.jpg'
import Aos from "aos"
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faFolderOpen, faLaptopCode  } from '@fortawesome/free-solid-svg-icons'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'

export  function ProjectsPost(props) {
  
 
  const projects = [
    { id: 1, 
      title: "before dev", 
      //post-image: ,
      date: "November 2020",
      image: `${blogImage6}`,
      description: "What I got up to before being in dev",
      contents: "I had a few things going on... Some of the more notable ones since graduating from University are: Travelled solo for 5 months road tripping through the US and working on boats in Croatia, worked on music stuff (the image above is the cover of an electronic music EP I released), attempted to make a small business which is still running, but infrequent (creating podcast intros) and scored a short film (Broke!) for London Film School which was presented to film festivals. Just exploring my interests, really. I funded this whilst working for the government dealing with tax and Superannuation 🫠. You can find me on Spotify as 'bondla'.",
      link: "",
      live: "",
    },
    { id: 2, 
      title: "Odin recipes: First ever website", 
      //post-image: ,
      date: "April 2022",
      image: `${blogImage2}`,
      description: "First website built from following the odin project",
      contents: "The very first site I built and deployed when self-teaching with theodinproject.com. A simple static recipes site with Homer having a little boogie. Practiced basic HTML and CSS. Try seeing where the link to my other work takes you.",
      link: "https://github.com/JRBoland/odin-recipes",
      live: "https://jrboland.github.io/odin-recipes/"
    },
    { id: 3, 
      title: "Portfolio Website: Old Version", 
      //post-image: ,
      date: "November 2022",
      image: `${blogImage5}`,
      description: "An old portfolio site done as one of the first assignments at Coder Academy.",
      contents: "My second built and deployed website was a portfolio site, made for the second assignment with Coder Academy. A good introduction to site building and styling, and using Github. Static website built using HTML and CSS.  This current site you're using is built using React. It's repository is available on my Github as react-site-portfolio-rebuild.",
      link: "https://github.com/JRBoland/JamesBoland_T1A2",
      live: "https://dotslashjb.netlify.app"
    },
    { id: 4, 
      title: "Terminal Application: Dog Helper Feeding Shelter", 
      //post-image: ,
      date: "December 2023",
      image: `${blogImage3}`,
      description: "Terminal CRUD application made with Python",
      contents: "Introduction to programming assignment with Coder Academy. I wanted to come up with an idea that covered CRUD (create, read, update, delete) functionality (and a little bit more) and landed on a concept of a dog shelter feeding helper, with the idea that you can add and remove dogs to a shelter 'inventory' and mark which ones have been fed for the day, and also monitor and edit their dietary needs. Made with Python. Could do with a lot of refactoring as first project and code is messy.",
      link: "https://github.com/JRBoland/T1A3-Terminal-Application",
      live: ""
    },
    { id: 5, 
      title: "Drone Logs - Flask API Web Server", 
      //post-image: ,
      date: "February 2023",
      image: `${blogImage4}`,
      description: "Drone logs API built with Flask, Python",
      contents: "Coder Academy assignment building an API Web Server. Experience with Flask framework, database relationship models, HTTP methods, JSON Web tokens, using tools Insomnia, Postman and DBeaver to test API functionality with PostgreSQL database.",
      link: "https://github.com/JRBoland/JamesBoland_T2A2",
      live: ""
    },
    { id: 6, 
      title: "Hackathon: GP Weather Clock", 
      //post-image: ,
      date: "May 2023",
      image: `${blogImage1}`,
      description: "Basic weather clock app built with a team during an in-term Coder Academy Hackathon",
      contents: "Learned git collaboration, further experience with react concepts, further use of HTML, CSS and responsive layout. Built the responsive frontend and created search bar functionality to capture an input to be retrieved from OpenWeather API. View the presentation in the repository for a further breakdown of the build process.",
      link: "https://github.com/stuWolf/Hackathon_22_05_23",
      live: "https://gpweatherclock.netlify.app/"
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
          <p><FontAwesomeIcon icon={faFolderOpen} /> back to projects</p>
          </Link>
          </div>
          <p data-aos="fade-in">{project.contents}
          <br/>
          <br/>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="download-link-link"><FontAwesomeIcon icon={faGitAlt} /> Source Code</a>
          )}
          <br/>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="download-link-link"><FontAwesomeIcon icon={faLaptopCode} /> Live Version</a>
          )}
          </p>
          <br/>
          <hr/>
          <br/>
          
          </div>
          <div className="project-nav">
          {previousProjectIndex !== null && (
           <Link to={`/projects/${projects[previousProjectIndex].id}`} className="project-navigation-links right">
            <p><FontAwesomeIcon icon={faArrowLeft} /> previous project</p>
            </Link>
         )}
         {nextProjectIndex !== null && (
           <Link to={`/projects/${projects[nextProjectIndex].id}`} className="project-navigation-links left">
              <p>next project <FontAwesomeIcon icon={faArrowRight} /> </p>
           </Link>
          )}
          </div>
        </div>
      
      </main>
    </div>
  )
}