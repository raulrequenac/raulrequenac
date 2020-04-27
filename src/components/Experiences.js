import React, { useContext } from 'react'
import '../styles/Experiences.css'
import Experience from './Experience'
import educations from '../data/educations'
import ResponsiveContext from '../contexts/ResponsiveContext'

const Experiences = () => {
  const { containerStyle } = useContext(ResponsiveContext)

  return (
    <section id="Experiences" className="container" style={containerStyle}>
      <h1 className="title">Experiences</h1>
      <div className="content">
        <div className="educations">
          {/* <h1 className="subtitle">Educations</h1> */}
          {educations.map((education, i) => <Experience education={education} key={i}/>)}
        </div>
        {/* <hr/>
        <div className="carrers">
          <h1 className="subtitle">Careers</h1>
        </div> */}
      </div>
    </section>
  )
}

export default Experiences