import React, { useContext, useState } from 'react'
import '../styles/Contact.css'
import ResponsiveContext from '../contexts/ResponsiveContext'
import raulrequenacServices from '../services/RaulrequenacServices'

const Contact = () => {
  const { sendEmail } = raulrequenacServices
  const { containerStyle } = useContext(ResponsiveContext)
  const [email, setEmail] = useState({email: '', subject: '', message: ''})

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setEmail({
      ...email,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendEmail(email)
      .then(info => console.log(info))
      .catch(error => console.log(error))
  }

  return (
    <section id="Contact" className="container" style={containerStyle}>
      <h1 className="title">Contact</h1>
      <h3 className="quote">"Nothing is more expensive than a missed opportunity."
      <br/>- H. Jackson Brown JR.</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Your email:
          <input type="text" name="email" onChange={handleOnChange}/>
        </label>
        <label>
          Subject:
          <input type="text" name="subject" onChange={handleOnChange}/>
        </label>
        <label>
          Message:
          <textarea name="message" value={email.message} onChange={handleOnChange}/>
        </label>
        <input type="submit" value="Send" />
      </form>
    </section>
  )
}

export default Contact