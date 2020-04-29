import React, { useContext } from 'react'
import '../styles/Experiences.css'
import Experience from './Experience'
import ResponsiveContext from '../contexts/ResponsiveContext'
import sections from '../data/sections'

const Experiences = () => {
  const { isEnglish, containerStyle } = useContext(ResponsiveContext)
  const { englishSections, spanishSections } = sections

  const experiences = isEnglish ? englishSections[1] : spanishSections[1]
  const quote = experiences.quote.split('\n')

  return (
    <section id="Experiences" className="container" style={containerStyle}>
      <h1 className="title">{experiences.title}</h1>
      <h3 className="quote">{quote.map((q, i) => <p key={i}>{q}</p>)}</h3>
      <div className="content">
        <div className="educations">
          {/* <h1 className="subtitle">Educations</h1> */}
          {experiences.subtitles[0].educations.map((education, i) => (
            <Experience education={education} key={i}/>
          ))}
        </div>
        {/* <hr/>
        <div className="careers">
          <h1 className="subtitle">Careers</h1>
        </div> */}
      </div>
    </section>
  )
}

export default Experiences