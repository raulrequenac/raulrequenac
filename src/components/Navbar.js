import React, { useState, useContext } from 'react'
import '../styles/Navbar.css'
import ResponsiveContext from '../contexts/ResponsiveContext'

const Navbar = () => {
  const { isWrapped, showMenu, setShowMenu } = useContext(ResponsiveContext)
  const [fixed, setFixed] = useState(document.documentElement.scrollTop > 600)
  const [current, setCurrent] = useState('Profile')
  
  const styleMarked = (id) => current===id ? { 
    backgroundColor: '#1b1b1b', 
    color: 'white' 
  } : {}
  const styleNavbar = isWrapped ? (
    fixed ? {
      width: '-webkit-fill-available',
      position: 'fixed',
      top: '0'
    } : {
      width: '-webkit-fill-available',
      position: 'absolute'
    }
  ) : (
    fixed ? {
      position: 'fixed', 
      top: '40px',
      right: '5%',
      borderRadius: '0 0 4px 4px'
    } : {
      position: 'absolute',
      right: '5%',
      borderRadius: '0 0 4px 4px'
    }
  )

  window.onscroll = () => {
    const scroll = document.documentElement.scrollTop
    const screenHeight = window.innerHeight
    setFixed(isWrapped ? 
      scroll > screenHeight : 
      scroll > screenHeight-40
    )
    
  }

  const onClickScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
      setCurrent(id)
    }
  }

  return (
    <div id="Navbar" style={styleNavbar}>
      <div className="navbar-header" style={{display: `${isWrapped ? '' : 'none'}`}}>
        <img 
          className="menu" 
          alt="" 
          src={showMenu ? '/images/menu-clicked.png' : '/images/menu.png'} 
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      <ul style={{display: `${showMenu ? '' : 'none'}`}}>
        <li style={styleMarked('Profile')} onClick={() => onClickScroll('Profile')}>Profile</li>
        <li style={styleMarked('Experiences')} onClick={() => onClickScroll('Experiences')}>Experiences</li>
        <li style={styleMarked('Abilities')} onClick={() => onClickScroll('Abilities')}>Abilities</li>
        <li style={styleMarked('Projects')} onClick={() => onClickScroll('Projects')}>Projects</li>
        <li style={styleMarked('Contact')} onClick={() => onClickScroll('Contact')}>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar