import React from 'react'
import '../styles/Experience.css'

const Experience = ({education}) => {
  const {name, course, date, description, location} = education

  const descriptionList = description.split('\n')


  return (
    <div className="Experience">
      <table>
        <tbody>
          <tr>
            <td className="first-c name">{name}</td>
            <td className="second-c name">{course}</td>
          </tr>
          <tr>
            <td className="first-c data">{date}</td>
            <td className="second-c data">
              <p>{descriptionList[0]}</p>
              <ul>
                {descriptionList.map((p, i) => i===0 ? <div key={i}></div> : <li key={i}>{p}</li>)}
              </ul>
            </td>
          </tr>
          <tr>
            <td className="first-c data"></td>
            <td className="second-c data location">
              <img alt="" src="/images/location.svg"/>
              {location}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Experience