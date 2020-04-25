import React, { useState } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [fixed, setFixed] = useState(document.documentElement.scrollTop > 600)

  window.onscroll = () => {console.log(fixed); setFixed(document.documentElement.scrollTop > 600)}

  return (
    <div id="Navbar" style={{position: `${fixed ? 'fixed' : 'absolute'}`, top: `${fixed ? '10vh' : ''}`}}>
      <ul>
        <li>Profile</li>
        <li>Experiences</li>
      </ul>
    </div>
  )
}

export default Navbar