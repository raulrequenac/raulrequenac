import React, { useContext } from 'react'
import '../styles/Projects.css'
import ResponsiveContext from '../contexts/ResponsiveContext'

const Projects = () => {
  const { containerStyle } = useContext(ResponsiveContext)

  return (
    <section id="Projects" className="container" style={containerStyle}>
      <h1 className="title">Projects</h1>
    </section>
  )
}

export default Projects