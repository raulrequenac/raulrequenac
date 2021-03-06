import React, { useContext, useState, useEffect } from 'react'
import '../styles/Contact.css'
import ResponsiveContext from '../contexts/ResponsiveContext'
import raulrequenacServices from '../services/RaulrequenacServices'
import sections from '../data/sections'

const Contact = () => {
  const { sendEmail } = raulrequenacServices
  const { isWrapped, isEnglish, containerStyle } = useContext(ResponsiveContext)
  const [email, setEmail] = useState({email: '', subject: '', message: ''})
  const [success, setSuccess] = useState(false)
  const [state, setState] = useState({error: false, loading: false})
  const { loading, error } = state
  const { englishSections, spanishSections } = sections
  const contact = isEnglish ? englishSections[4] : spanishSections[4]
  const quote = contact.quote.split('\n')

  const wrappedStyle = isWrapped ? {
    flexDirection: 'column'
  } : {}

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setEmail({
      ...email,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.email.length || !email.subject.length || !email.message.length) 
      setState({error: true, loading: false})
    else setState({error: false, loading: true})
  }

  useEffect(() => {
    if (loading && !error) sendEmail(email)
      .then(
        () => {
          setSuccess(true)
          setState({error: false, loading: false})
        },
        (e) => {
          console.log(e)
          setState({error: true, loading: false})
        }
      )
  }, [loading, error, email, sendEmail])

  useEffect(() => {
    const interval = setTimeout(() => setSuccess(false), 2000)
    return () => clearTimeout(interval)
  }, [success])

  const errorClassName = error ? 'invalid' : ''

  return (
    <section id="Contact" className="container" style={containerStyle}>
      <div className="success" style={{display: `${success ? '' : 'none'}`}}>
        {contact.success}
      </div>
      <div className="loading" style={{display: `${loading ? '' : 'none'}`}}>
        <img alt="" src="/images/loading.svg" className="rotate-center"/>
      </div>
      <h1 className="title">{contact.title}</h1>
      <h3 className="quote">{quote.map((q, i) => <p key={i}>{q}</p>)}</h3>
      <form onSubmit={handleSubmit} className="email-container">
        {isWrapped ? <></> : <input type="submit" value={contact.sendEmail} className="send"/>}
        <label className="email-item email" style={wrappedStyle}>
          <h1 className="label">{contact.email.description}:</h1>
          <input 
            className={`input ${errorClassName}`} 
            type="email" 
            name="email" 
            value={email.email}
            onChange={handleOnChange} 
            placeholder={contact.email.placeholder}
            />
        </label>
        <label className="email-item subject" style={wrappedStyle}>
          <h1 className="label">{contact.subject.description}:</h1>
          <input 
            className={`input ${errorClassName}`} 
            type="text" 
            minLength="3"
            name="subject" 
            value={email.subject}
            onChange={handleOnChange} 
            placeholder={contact.subject.placeholder}
            />
        </label>
        <label className="email-item message" style={wrappedStyle}>
          <h1 className="label">{contact.message.description}:</h1>
          <textarea 
            className={`input message ${errorClassName}`}
            name="message" 
            minLength="3"
            value={email.message} 
            onChange={handleOnChange}
            placeholder={contact.message.placeholder}
            />
        </label>
        {isWrapped ? 
          <input type="submit" value={contact.sendEmail}  className="send" style={{marginTop: '1rem'}}/> : 
          <></>
        }
        <div className="websites">
          <a 
            href="https://www.linkedin.com/in/raulrequenac/" 
            className="website"
            target="_blank" 
            rel="noopener noreferrer"
            >
            <div className="logo-container">
              <img alt="" src="/images/websites/linkedin.svg"/>
            </div>            
            <h1>LinkedIn</h1>
          </a>
          <a 
            href="https://github.com/raulrequenac" 
            className="website"
            target="_blank" 
            rel="noopener noreferrer"
            >
            <div className="logo-container">
              <img alt="" src="/images/websites/github.svg"/>
            </div>            
            <h1>Github</h1>
          </a>
          <a href="mailto:raulrequec@gmail.com" className="website">
            <div className="logo-container">
              <img alt="" src="/images/websites/mail.svg"/>
            </div>
            <h1>Gmail</h1>
          </a>
        </div>
      </form>
    </section>
  )
}

export default Contact