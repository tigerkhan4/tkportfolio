import React from 'react';

function ProjectCard({src, link, h3, p}) {
  return (
    <div>
        <a href={link} target="blank">
            <img className="hover" src={src} alt={`${h3}logo`} />
            <h3>{h3}</h3>
            <p>{p}</p>
            <br/>
        </a>
    </div>
  )
}

export default ProjectCard