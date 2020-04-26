import React from 'react'
import '../styles/Experiences.css'
import Experience from './Experience'

const educations = [{
  name: 'Ironhack',
  course: 'Web Development Bootcamp',
  date: '08/2019 - 03/2020',
  description: 'Intensive course',
  location: 'Madrid, Spain'
}]

const Experiences = () => {
  return (
    <section id="Experiences">
      <div className="container">
        <h1 className="title">Experiences</h1>
        <div className="content">
          <div className="educations">
            <h1 className="subtitle">Educations</h1>
            {educations.map((education) => <Experience education={education}/>)}
          </div>
          <hr/>
          <div className="carrers">
            <h1 className="subtitle">Careers</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences