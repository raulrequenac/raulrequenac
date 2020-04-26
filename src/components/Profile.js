import React, { useState, useEffect, useContext } from 'react'
import '../styles/Profile.css'
import ResponsiveContext from '../contexts/ResponsiveContext'

const Profile = () => {
  const { isWrapped, showMenu } = useContext(ResponsiveContext)
  const [navbarHeight, setNavbarHeight] = useState(0)

  useEffect(() => {
    setNavbarHeight(isWrapped ? document.getElementById('Navbar').offsetHeight : 0)
  }, [isWrapped, showMenu])

  const currentAge = () => {
    var current = new Date();
    var bday = new Date('1997-10-22');
    var age = current.getFullYear() - bday.getFullYear();
    var m = current.getMonth() - bday.getMonth();

    if (m < 0 || (m === 0 && current.getDate() < bday.getDate())) {
        age--;
    }

    return age;
}

  return (
    <section id="Profile" className="container" style={{paddingTop: `${navbarHeight+(16*3)}px`}}>
      <h1 className="title">Profile</h1>
      <div className="content d-flex">
        <div className="col-3">
          <h1 className="subtitle">About me</h1>
          <p>Passionate about the world of creativity, programming, design and technology. Merging these disciplines always generate differentiating and unique results. Web development allows me to find the balance between these passions.</p>
        </div>
        <div className="col-3">
          <img className="photo" alt="" src="/images/foto.JPEG"/>
        </div>
        <div className="col-3">
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