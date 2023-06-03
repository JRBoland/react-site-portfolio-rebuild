import './projectspage.css'
import { Link } from "react-router-dom"

export  function Projects(props) {

  const projects = [
    { id: 1, title: "Project 1" },
    { id: 2, title: "Project 2" },
    { id: 3, title: "Project 3" },
    { id: 4, title: "Project 4" },
    { id: 5, title: "Project 5" }
]

  return (
    <div className="projects">
      <main>
      <h1>Projects Page!</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
      </main>
    </div>
  )
}