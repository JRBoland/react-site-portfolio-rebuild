import './pageStyles/projectspage.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import blogImage1 from '../images/blog-image-1.jpg'
import blogImage2 from '../images/blog-image-2.jpg'
import blogImage3 from '../images/blog-image-3.jpg'
import blogImage4 from '../images/blog-image-4.jpg'
import blogImage5 from '../images/blog-image-5.jpg'
import blogImage6 from '../images/blog-image-6.jpg'
import blogImage7 from '../images/blog-image-7.jpg'
import blogImage8 from '../images/blog-image-8.gif'
import blogImage9 from '../images/blog-image-9-0.gif'
import blogImage10 from '../images/blog-image-10.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'

export function Projects(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const projects = [
    {
      id: 1,
      title: 'before dev',
      //post-image: ,
      date: 'November 2020',
      image: `${blogImage1}`,
      description: 'What I got up to before diving into web development',
    },
    {
      id: 2,
      title: 'Odin recipes: First ever website',
      //post-image: ,
      date: 'April 2022',
      image: `${blogImage2}`,
      description: 'First website built from following The Odin Project',
    },
    {
      id: 3,
      title: 'Portfolio Website: Old Version',
      //post-image: ,
      date: 'November 2022',
      image: `${blogImage3}`,
      description:
        'An old portfolio site done as one of the first assignments at Coder Academy',
    },
    {
      id: 4,
      title: 'Dog Shelter Feeding Helter: Python Terminal Application',
      //post-image: ,
      date: 'December 2023',
      image: `${blogImage4}`,
      description: 'Terminal CRUD application made with Python',
    },
    {
      id: 5,
      title: 'Drone Logs: Flask RESTful API Web Server',
      //post-image: ,
      date: 'February 2023',
      image: `${blogImage5}`,
      description: 'Drone logs API built with Flask, Python',
    },
    {
      id: 6,
      title: 'GP Weather Clock: Hackathon',
      //post-image: ,
      date: 'May 2023',
      image: `${blogImage6}`,
      description:
        'Basic weather clock app built with a team during an in-term Coder Academy Hackathon',
    },
    {
      id: 7,
      title: 'Van Voyage: Full Stack Booking Application',
      //post-image: ,
      date: 'July 2023',
      image: `${blogImage7}`,
      description:
        'Van hiring service with integrated frontend and backend with user profiles, booking and availability system, and review system. Full stack MERN application styled with Tailwind',
    },
    {
      id: 8,
      title: 'Fliight Technologies: Website Rebuild',
      //post-image: ,
      date: '',
      image: `${blogImage8}`,
      description:
        'Website rebuild for UAV technology company, Fliight Technologies.',
    },
    {
      id: 9,
      title: 'Drone Flight Logger: Full Stack Mobile App',
      //post-image: ,
      date: '',
      image: `${blogImage9}`,
      description:
        'Full stack drone flight log mobile app, built using TypeScript with React Native & Expo on the frontend with a Nestjs API and postgres database on the backend. Deployed with Ubuntu running on an AWS EC2 instance.',
    },
    {
      id: 10,
      title: 'Text to PDF converter',
      //post-image: ,
      date: 'October 2024',
      image: `${blogImage10}`,
      description:
        'Web based text/markdown to PDF converter, built with TypeScript and React. ',
    },
  ]

  projects.reverse()

  return (
    <div className="projects">
      <main>
        <div
          className="projects-split-view"
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
        >
          <h1 className="h2-fa-icon">
            <span>Projects</span>
            {''}
            <FontAwesomeIcon
              icon={faDiagramProject}
              className="h2-fa-icon-dec"
            />
          </h1>
          <p>
            These are some projects I've worked on during my short journey into
            web development.
            <br />
            <br />
            Click on the posts title or image to dig in a little deeper.
          </p>
          <div className="projects-list">
            <div className="projects-section-div">
              <ul>
                {projects.map((project) => (
                  <li
                    key={project.id}
                    className="projects-map"
                    data-aos="fade-in"
                    data-aos-easing="ease-in-out"
                  >
                    <Link
                      to={`/projects/${project.id}`}
                      style={{
                        textDecoration: 'none',
                        pointerEvents: 'auto',
                        zIndex: '555',
                      }}
                      className="projects-link"
                    >
                      <h2>{project.title} </h2>
                      <img
                        src={project.image}
                        className="projects-img"
                        alt={`${project.name} `}
                      />
                    </Link>
                    <p className="projects-description">
                      <em>{project.date}</em>
                      <br />
                      <br />
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
