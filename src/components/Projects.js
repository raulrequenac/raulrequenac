import React, { useContext } from 'react'
import '../styles/Projects.css'
import ResponsiveContext from '../contexts/ResponsiveContext'
import sections from '../data/sections'
import Project from './Project'

const Projects = () => {
  const { isWrapped, isEnglish, containerStyle } = useContext(ResponsiveContext)
  const { englishSections, spanishSections } = sections

  const projects = isEnglish ? englishSections[3] : spanishSections[3]
  const quote = projects.quote.split('\n')

  const wrappedStyle = isWrapped ? { width: '100%' } : {}

  return (
    <section id="Projects" className="container" style={containerStyle}>
      <h1 className="title">{projects.title}</h1>
      <h3 className="quote">{quote.map((q, i) => <p key={i}>{q}</p>)}</h3>
      <div className="projects-container" style={{flexDirection: `${isWrapped ? 'column' : ''}`}}>
        <div className="projects-column" style={wrappedStyle}>
          <Project project={projects.projects[0]}/>
        </div>
        <div className="projects-column" style={wrappedStyle}>
          <Project project={projects.projects[1]}/>
          <Project project={projects.projects[2]}/>
        </div>
      </div>
    </section>
  )
}

export default Projects