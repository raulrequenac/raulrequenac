import React, { useState } from 'react'
import '../styles/Start.css'

const Start = () => {
  let [isWrapped, setIsWrapped] = useState(window.screen.width < 700)

  window.addEventListener('resize', () => setIsWrapped(window.screen.width < 700))

  return (
    <section id="Start">
      <div className="logo puff-in-center">
        <img alt="" src="/images/logo-t.png" style={{margin: `${isWrapped ? '-4rem 0 2rem' : '0'}`}}/>
        <div className="title">
          <h1>RAUL REQUENA</h1>
          <h2>WEB DEVELOPER</h2>
        </div>
      </div>
      <a href="#profile" className="scroll-down">
        <img className="arrow slide-top" alt="" src="/images/arrow.svg"/>
      </a>
    </section>
  )
}

export default Start