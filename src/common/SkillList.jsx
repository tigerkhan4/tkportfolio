import React from 'react';

function SkillList({src,skill,p}) {
  return (
    <span>
        <img className= "" src={src} alt={`${skill}`} />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList;