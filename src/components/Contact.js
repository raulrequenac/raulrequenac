import React, { useContext } from 'react'
import '../styles/Contact.css'
import ResponsiveContext from '../contexts/ResponsiveContext'

const Contact = () => {
  const { containerStyle } = useContext(ResponsiveContext)

  return (
    <section id="Contact" className="container" style={containerStyle}>
      <h1 className="title">Contact</h1>
    </section>
  )
}

export default Contact