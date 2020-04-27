import React, { useState, useContext } from 'react'
import '../styles/Navbar.css'
import ResponsiveContext from '../contexts/ResponsiveContext'

const navbarItems = ['Profile', 'Experiences', 'Abilities', 'Projects', 'Contact']

const Navbar = () => {
  const { isWrapped, showMenu, setShowMenu } = useContext(ResponsiveContext)
  const [fixed, setFixed] = useState(document.documentElement.scrollTop > 600)
  const [current, setCurrent] = useState('Profile')
  const [scaleUp, setScaleUp] = useState('')
  
  const styleMarked = (id) => current===id ? { 
    backgroundColor: '#1b1b1b', 
    color: 'white' 
  } : {}
  const styleNavbar = isWrapped ? {
    width: '-webkit-fill-available',
    position: fixed ? 'fixed' : 'absolute',
    top: fixed ? '0' : ''
  } : {
    right: '5%',
    borderRadius: '0 0 4px 4px',
    position: fixed ? 'fixed' : 'absolute',
    top: fixed ? '40px' : ''
  }

  window.onscroll = () => {
    const scroll = document.documentElement.scrollTop
    const screenHeight = window.innerHeight
    setFixed(isWrapped ? 
      scroll > screenHeight : 
      scroll > screenHeight-40
    )

    const startHeight = document.getElementById('Start').offsetHeight
    const profileHeight = document.getElementById('Profile').offsetHeight
    const experiencesHeight = document.getElementById('Experiences').offsetHeight
    const abilitiesHeight = document.getElementById('Abilities').offsetHeight
    const projectsHeight = document.getElementById('Projects').offsetHeight
    
    if (scroll >= startHeight+profileHeight+experiencesHeight+abilitiesHeight+projectsHeight) setCurrent('Contact')
    else if (scroll >= startHeight+profileHeight+experiencesHeight+abilitiesHeight) setCurrent('Projects')
    else if (scroll >= startHeight+profileHeight+experiencesHeight) setCurrent('Abilities')
    else if (scroll >= startHeight+profileHeight) setCurrent('Experiences')
    else setCurrent('Profile')
  }

  const onClickScroll = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({behavior: 'smooth'})
  }

  const onMouseInScaleUp = (id) => setScaleUp(id)
  const onMouseLeaveScaleDown = () => setScaleUp('')

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
      <ul style={{display: `${isWrapped ? showMenu ? '' : 'none' : ''}`}}>
        {navbarItems.map((id, i) => <li 
          style={styleMarked(id)} 
          onClick={() => onClickScroll(id)}
          onMouseEnter={() => onMouseInScaleUp(id)}
          onMouseLeave={onMouseLeaveScaleDown}
          key={i}
        >
          <h1 className={scaleUp===id ? 'scale-up-center' : ''}>{id}</h1>
        </li>
        )}
      </ul>
    </div>
  )
}

export default Navbar