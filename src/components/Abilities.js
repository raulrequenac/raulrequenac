import React, { useContext } from 'react'
import '../styles/Abilities.css'
import skills from '../data/skills'
import sections from '../data/sections'
import ResponsiveContext from '../contexts/ResponsiveContext'

const Abilities = () => {
  const { isWrapped, isEnglish, containerStyle } = useContext(ResponsiveContext)
  const { englishSections, spanishSections } = sections
  const abilities = isEnglish ? englishSections[2] : spanishSections[2]
  const quote = abilities.quote.split('\n')
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
      <h1 className="title">{abilities.title}</h1>
      <h3 className="quote">{quote.map((q, i) => <p key={i}>{q}</p>)}</h3>
      <div className="content">
        <div className="skills">
          <h1 className="subtitle">{abilities.subtitles[0].name}</h1>
          <div className="skills-container" style={{display: `${isWrapped ? '' : 'flex'}`}}>
            {skillColumn(skillsFirstHalf)}
            {skillColumn(skillsSecondHalf)}
          </div>
          <div className="repository">
            <p><i>{abilities.subtitles[0].repository.description}</i></p>
            <div className="button">
              <a 
                href="https://github.com/raulrequenac/raulrequenac" 
                className="button-text" 
                target="_blank" 
                rel="noopener noreferrer">{abilities.subtitles[0].repository.button}</a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="languages">
          <h1 className="subtitle">{abilities.subtitles[1].name}</h1>
          <div className="languages-container" style={{flexDirection: `${isWrapped ? 'column' : ''}`}}>
            {abilities.subtitles[1].languages.map((lang, i) => (
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