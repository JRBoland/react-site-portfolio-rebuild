import './projectspostpage.css'
import { useParams, Link } from 'react-router-dom'
import blogImage1 from '../images/blog-image-1.jpg'
import blogImage2 from '../images/blog-image-2.jpg'
import blogImage3 from '../images/blog-image-3.jpg'
import blogImage4 from '../images/blog-image-4.jpg'
import blogImage5 from '../images/blog-image-5.jpg'


export  function ProjectsPost(props) {
  


  const projects = [
    { id: 1, 
      title: "Project 1", 
      //post-image: ,
      date: "21-8-23",
      image: `${blogImage1}`,
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { id: 2, 
      title: "Project 2", 
      //post-image: ,
      date: "22-8-23",
      image: `${blogImage2}`,
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { id: 3, 
      title: "Project 3", 
      //post-image: ,
      date: "23-8-23",
      image: `${blogImage3}`,
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { id: 4, 
      title: "Project 4", 
      //post-image: ,
      date: "24-8-23",
      image: `${blogImage4}`,
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { id: 5, 
      title: "Project 5", 
      //post-image: ,
      date: "25-8-23",
      image: `${blogImage5}`,
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]

  const { id } = useParams() // Retrieve the project ID from the URL parameter

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
      <h1>{project.title}</h1>
      <p>{project.date}</p>
      <div className="blog-post-img-container">
        <img className="blog-post-img" src={project.image} alt={`${project.name}`}/>
        <div className="project-navigation">
          {previousProjectIndex !== null && (
           <Link to={`/projects/${projects[previousProjectIndex].id}`}>
            <p>Previous Project</p>
            </Link>
         )}
         {nextProjectIndex !== null && (
           <Link to={`/projects/${projects[nextProjectIndex].id}`}>
              <p>Next Project</p>
           </Link>
          )}
        </div>
      </div>
      <p>{project.contents}</p>
      </main>
    </div>
  )
}