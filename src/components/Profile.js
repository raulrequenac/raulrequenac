import React, { useContext, useState, useEffect } from 'react'
import '../styles/Profile.css'
import ResponsiveContext from '../contexts/ResponsiveContext'

const Profile = () => {
  const { isWrapped, showMenu } = useContext(ResponsiveContext)
  const [navbarHeight, setNavbarHeight] = useState(0)

  useEffect(() => {
    setNavbarHeight(isWrapped ? document.getElementById('Navbar').offsetHeight : 0)
  }, [isWrapped, showMenu])

  const currentAge = () => {
    const current = new Date()
    const bday = new Date('1997-10-22')
    const m = current.getMonth() - bday.getMonth()
    let age = current.getFullYear() - bday.getFullYear()

    if (m < 0 || (m === 0 && current.getDate() < bday.getDate())) age--

    return age;
}

  return (
    <section id="Profile" className="container" style={{padding: `${navbarHeight+(16*3)}px 7vw 0`}}>
      <h1 className="title">Profile</h1>
      <div className="content d-flex" style={isWrapped ? {flexDirection: 'column'} : {}}>
        <div className={isWrapped ? '' : 'col-3'}>
          <h1 className="subtitle">About me</h1>
          <p>Passionate about the world of creativity, programming, design and technology. Merging these disciplines always generate differentiating and unique results. Web development allows me to find the balance between these passions.</p>
        </div>
        <div className={isWrapped ? '' : 'col-3'}>
          <img 
            className="photo" 
            alt="" 
            src="/images/foto.JPEG" 
            style={isWrapped ? {width: '16rem', margin: '2rem 0 2rem -1rem'} : {margin: '-3rem 0 0 -1.5rem'}}
            />
        </div>
        <div className={isWrapped ? '' : 'col-3'}>
          <h1 className="subtitle">Details</h1>
          <dl>
            <dt><b>Name:</b></dt>
            <dd>Raúl Requena Cayuso</dd>
            <dt><b>Age:</b></dt>
            <dd> {currentAge()} years</dd>
            <dt><b>Location:</b></dt>
            <dd>Málaga, Andalusia, Spain</dd>
          </dl>
          <p><br/> </p>
          <p><br/></p>
          <p><br/> </p>
        </div>
      </div>
    </section>
  )
}

export default Profile