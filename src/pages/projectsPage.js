import './projectspage.css'
import { Link } from "react-router-dom"

export  function Projects(props) {

  const projects = [
    { id: 1, title: "Project 1", description: "Description of project 1 goes here" },
    { id: 2, title: "Project 2", description: "Description of project 2 goes here"  },
    { id: 3, title: "Project 3", description: "Description of project 3 goes here"  },
    { id: 4, title: "Project 4", description: "Description of project 4 goes here"  },
    { id: 5, title: "Project 5", description: "Description of project 5 goes here"  }
]

  return (
    <div className="projects">
      <main>
      <h1>Projects Page!</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
            <br />
            <p>
              {project.description}
            </p>
          </li>
        ))}
      </ul>
      </main>
    </div>
  )
}