import React, { useContext } from 'react'
import '../styles/Abilities.css'
import skills from '../data/skills'
import ResponsiveContext from '../contexts/ResponsiveContext'

const Abilities = () => {
  const { containerStyle } = useContext(ResponsiveContext)
  const skillsFirstHalf = skills.slice(0, Math.ceil(skills.length/2))
  const skillsSecondHalf = skills.slice(-Math.floor(skills.length/2))

  return (
    <section id="Abilities" className="container" style={containerStyle}>
      <h1 className="title">Abilities</h1>
      <div className="content">
        <div className="skills">
          <h1 className="subtitle">Skills</h1>
          <ul className="first-col">
            {skillsFirstHalf.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          <ul className="second-col">
            {skillsSecondHalf.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          <div className="repository">
            This project is been developed with React
            <a href="https://github.com/raulrequenac/raulrequenac">See project on Github</a>
          </div>
        </div>
        <hr/>
        <div className="languages">
          <h1 className="subtitle">Languages</h1>
        </div>
      </div>
    </section>
  )
}

export default Abilities