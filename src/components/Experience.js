import React from 'react'

const Experience = ({education}) => {
  const {name, course, date, description, location} = education

  return (
    <div className="Experience">
      <table>
        <tr>
          <td><b>{name}</b></td>
          <td><b>{course}</b></td>
        </tr>
        <tr>
          <td>{date}</td>
          <td>{description}</td>
        </tr>
        <tr>
          <td></td>
          <td>{location}</td>
        </tr>
      </table>
    </div>
  )
}

export default Experience