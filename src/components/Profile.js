import React, { useContext, useState, useEffect } from 'react'
import '../styles/Profile.css'
import ResponsiveContext from '../contexts/ResponsiveContext'
import sections from '../data/sections'

const Profile = () => {
  const { isWrapped, isEnglish, showMenu } = useContext(ResponsiveContext)
  const { englishSections, spanishSections } = sections
  const [navbarHeight, setNavbarHeight] = useState(0)

  const profile = isEnglish ? englishSections[0] : spanishSections[0]
  const quote = profile.quote.split('\n')

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
    <section 
      id="Profile" 
      className="container" 
      style={{padding: `${isWrapped ? navbarHeight+(16*3)+'px 7vw 0' : ''}`}}
      >
      <h1 className="title">{profile.title}</h1>
      <h3 className="quote">{quote.map((q, i) => <p key={i}>{q}</p>)}</h3>
      <div className="content d-flex" style={isWrapped ? {flexDirection: 'column'} : {}}>
        <div className={isWrapped ? '' : 'col-3'}>
          <h1 className="subtitle">{profile.subtitles[0].name}</h1>
          <p>{profile.subtitles[0].description}</p>
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
          <h1 className="subtitle">{profile.subtitles[1].name}</h1>
          <dl>
            <dt><b>{profile.subtitles[1].details[0].name}:</b></dt>
            <dd>{profile.subtitles[1].details[0].description}</dd>
            <dt><b>{profile.subtitles[1].details[1].name}:</b></dt>
            <dd> {currentAge()} {profile.subtitles[1].details[1].description}</dd>
            <dt><b>{profile.subtitles[1].details[2].name}:</b></dt>
            <dd>{profile.subtitles[1].details[2].description}</dd>
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