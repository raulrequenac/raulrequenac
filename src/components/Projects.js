import React, { useContext } from 'react'
import '../styles/Projects.css'
import ResponsiveContext from '../contexts/ResponsiveContext'
import sections from '../data/sections'

const Projects = () => {
  const { isWrapped, isEnglish, containerStyle } = useContext(ResponsiveContext)
  const { englishSections, spanishSections } = sections

  const projects = isEnglish ? englishSections[3] : spanishSections[3]
  const quote = projects.quote.split('\n')

  const divideText = (text) => (
    text.split('\n').map((p, i) => (
      <p className="text description" key={i}>{p}</p>
    ))
  )

  return (
    <section id="Projects" className="container" style={containerStyle}>
      <h1 className="title">{projects.title}</h1>
      <h3 className="quote">{quote.map((q, i) => <p key={i}>{q}</p>)}</h3>
      <div className="projects-container">
        {projects.projects.map((project, i) => (
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