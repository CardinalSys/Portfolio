import React from 'react'

export const Project = (props) => {

  return (
    <div className='project'>
      <li>
        <h3>{props.projectName}</h3>
        <a href ={props.link} target="_blank" rel="noopener noreferrer">
        <img 
          className='project-img'
          src={require(`../img/${props.imageUrl}.png`)}
          alt="placehokder"/></a>
        <p>{props.projectDesc}</p>
      </li>
    </div>

  )
}

