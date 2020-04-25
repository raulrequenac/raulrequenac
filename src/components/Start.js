import React, { useState } from 'react'
import '../styles/Start.css'

const Start = () => {
  const [isWrapped, setIsWrapped] = useState(window.screen.width<700)

  window.addEventListener('resize', () => setIsWrapped(window.screen.width<700))

  const onClickScroll = () => {
    document.getElementById('Profile').scrollIntoView({behavior: 'smooth'})
  }

  return (
    <section id="Start">
      <div className="logo puff-in-center">
        <img alt="" src="/images/logo-t.png" style={{margin: `${isWrapped ? '-4rem 0 2rem' : '0'}`}}/>
        <div className="title">
          <h1>RAUL REQUENA</h1>
          <h2>WEB DEVELOPER</h2>
        </div>
      </div>
      <div 
        className="scroll-down" 
        onClick={onClickScroll} 
        style={{
          width: `${isWrapped ? '-webkit-fill-available' : '8.296vw'}`,
          right: `${isWrapped ? '' : '5%'}`
        }}
      >
        <img className="arrow slide-top" alt="" src="/images/arrow.svg"/>
      </div>
    </section>
  )
}

export default Start