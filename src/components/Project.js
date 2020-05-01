import React, { useContext } from 'react'
import ResponsiveContext from '../contexts/ResponsiveContext'
import '../styles/Project.css'

const Project = ({ project }) => {
  const { isWrapped } = useContext(ResponsiveContext)

  const divideText = (text) => (
    text.split('\n').map((p, i) => (
      <p className="text description" key={i}>{p}</p>
    ))
  )

  return (
    <div className={`Project ${project.type}`} style={isWrapped ? {width: '100%'} : {}}>
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
  )
}

export default Project