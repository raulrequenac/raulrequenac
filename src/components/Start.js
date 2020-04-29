import React, { useContext } from 'react'
import '../styles/Start.css'
import ResponsiveContext from '../contexts/ResponsiveContext'

const Start = () => {
  const { isWrapped, isEnglish, setLanguage } = useContext(ResponsiveContext)
  const wrappedStyle = isWrapped ? {
    flexDirection: 'column',
    alignItems: 'center'
  } : {}

  const onClickScroll = () => document.getElementById('Profile').scrollIntoView({behavior: 'smooth'})

  return (
    <section id="Start">
      <div className="language-change" style={isWrapped ? {right: '5%'} : {left: '5%'}}>
        <img alt="" src="/images/languages/spain.png" onClick={() => setLanguage('spanish')}/>
        <img alt="" src="/images/languages/uk.png" onClick={() => setLanguage('english')}/>
      </div>
      <div className="logo puff-in-center" style={wrappedStyle}>
        <img alt="" src="/images/logo-t.png" style={{margin: `${isWrapped ? '-4rem 0 2rem' : '0'}`}}/>
        <div className="start-title">
          <h1>RAUL REQUENA</h1>
          <h2>{isEnglish ? 'WEB DEVELOPER' : 'DESARROLLADOR WEB'}</h2>
        </div>
      </div>
      <div 
        className="scroll-down" 
        onClick={onClickScroll} 
        style={{
          width: `${isWrapped ? '-webkit-fill-available' : '8.296vw'}`,
          right: `${isWrapped ? '' : '5%'}`,
          borderRadius: `${isWrapped ? '' : '4px 4px 0 0'}`
        }}
      >
        <img className="arrow slide-top" alt="" src="/images/arrow.svg"/>
      </div>
    </section>
  )
}

export default Start