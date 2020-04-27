import React, { useContext } from 'react'
import '../styles/Abilities.css'
import skills from '../data/skills'
import ResponsiveContext from '../contexts/ResponsiveContext'

const Abilities = () => {
  const { isWrapped, containerStyle } = useContext(ResponsiveContext)
  const skillsFirstHalf = skills.slice(0, Math.ceil(skills.length/2))
  const skillsSecondHalf = skills.slice(-Math.floor(skills.length/2))
  const languageStyle = isWrapped ? {
    padding: '1rem 0'
  } : {}

  return (
    <section id="Abilities" className="container" style={containerStyle}>
      <h1 className="title">Abilities</h1>
      <div className="content">
        <div className="skills">
          <h1 className="subtitle">Skills</h1>
          <div className="skills-container" style={{display: `${isWrapped ? '' : 'flex'}`}}>
            <div className="first-col">
              {skillsFirstHalf.map((skill, i) => 
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
            <div className="second-col">
              {skillsSecondHalf.map((skill, i) => 
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
            <div className="language" style={languageStyle}>
              <img className="icon" alt="" src="/images/flags/spain.svg" />
              <div>
                <h1 className="name">Spanish</h1>
                <p className="level">Mother language</p>
              </div>
            </div>
            <div className="language" style={languageStyle}>
              <img className="icon" alt="" src="/images/flags/uk.svg" />
              <div>
                <h1 className="name">English</h1>
                <p className="level">Daily use</p>
              </div>
            </div>
            <div className="language" style={languageStyle}>
              <img className="icon" alt="" src="/images/flags/france.svg" />
              <div>
                <h1 className="name">French</h1>
                <p className="level">Un petit peu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Abilities