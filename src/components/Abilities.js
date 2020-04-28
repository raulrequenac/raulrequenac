import React, { useContext } from 'react'
import '../styles/Abilities.css'
import skills from '../data/skills'
import ResponsiveContext from '../contexts/ResponsiveContext'
import languages from '../data/languages'

const Abilities = () => {
  const { isWrapped, containerStyle } = useContext(ResponsiveContext)
  const skillsFirstHalf = skills.slice(0, Math.ceil(skills.length/2))
  const skillsSecondHalf = skills.slice(-Math.floor(skills.length/2))
  const languageStyle = isWrapped ? {
    padding: '1rem 0'
  } : {}

  const skillColumn = (column) => {
    return (
      <div>
        {column.map((skill, i) => 
          <div key={i} className="skill">
            <img 
              className="icon" 
              alt="" src={skill.image} 
              style={{height: `${isWrapped ? '' : '3rem'}`}}
              />
            <h1 className="name">{skill.name}</h1>
          </div>
        )}
      </div>
    )
  }

  return (
    <section id="Abilities" className="container" style={containerStyle}>
      <h1 className="title">Abilities</h1>
      <h3 className="quote">"The one really competitive skill is the skill of being able to learn."
      <br/>- Seymour Papert</h3>
      <div className="content">
        <div className="skills">
          <h1 className="subtitle">Skills</h1>
          <div className="skills-container" style={{display: `${isWrapped ? '' : 'flex'}`}}>
            {skillColumn(skillsFirstHalf)}
            {skillColumn(skillsSecondHalf)}
          </div>
          <div className="repository">
            <p><i>This project is been developed with React</i></p>
            <div className="button">
              <a href="https://github.com/raulrequenac/raulrequenac" className="button-text">See project on Github</a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="languages">
          <h1 className="subtitle">Languages</h1>
          <div className="languages-container" style={{flexDirection: `${isWrapped ? 'column' : ''}`}}>
            {languages.map((lang, i) => (
              <div className="language" style={languageStyle} key={i}>
                <img className="icon" alt="" src={lang.flag} />
                <div>
                  <h1 className="name">{lang.name}</h1>
                  <p className="level">{lang.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Abilities