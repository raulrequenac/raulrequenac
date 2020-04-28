import React, { useContext } from 'react'
import '../styles/Projects.css'
import ResponsiveContext from '../contexts/ResponsiveContext'
import projects from '../data/projects'

const Projects = () => {
  const { isWrapped, containerStyle } = useContext(ResponsiveContext)

  const divideText = (text) => (
    text.split('\n').map((p, i) => (
      <p className="text description" key={i}>{p}</p>
    ))
  )

  return (
    <section id="Projects" className="container" style={containerStyle}>
      <h1 className="title">Projects</h1>
      <h3 className="quote">“I am a great believer in luck, and I find the harder I work, the more I have of it.”
      <br/>- Stephen Leacock</h3>
      <div className="projects-container">
        {projects.map((project, i) => (
          <div className={`project ${project.type}`} key={i} style={isWrapped ? {width: '100%'} : {}}>
            <img alt="" src={project.screenshot} className="screenshot"/>
            <img alt="link" src="/images/external-link.svg" className="icon"/>
            <div className="overlay">
              <h3 className="text name">{project.name}</h3>
              {divideText(project.description)}
            </div>
            <a 
                href={project.url}
                className="text link" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                  View more
              </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects