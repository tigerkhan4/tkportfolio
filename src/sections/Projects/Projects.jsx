import React from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

import itravel from '../../assets/itravelfinal.png';
import popcampaigns from '../../assets/pillarslogo.png';
import poppresentations from '../../assets/gbv def.png';
import ttreats from '../../assets/ttreats.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className= "sectionTitle">Projects</h1> <br/>
        <div className={styles.projectsContainer}>
            <ProjectCard                 
              className={`${styles.projectCard} itravel`} 
              src={itravel} 
              link={'https://itravelgpt.netlify.app/'}
              h3="iTravel" 
              p= "task manager app w/ ai assistant"
            />
            <ProjectCard 
              className={`${styles.projectCard} popcampaigns`}
              src={popcampaigns} 
              link={'https://itravelgpt.netlify.app/'}
              h3="Pillars of Peace"
              p= "nonprofit marketing campaigns"
            />
            <ProjectCard 
              className={`${styles.projectCard} t's treats`}
              src={ttreats} 
              ink={'https://itravelgpt.netlify.app/'}
              h3="in progress: t's treats"
              p= "small business website"
            />
            <ProjectCard 
              className={`${styles.projectCard} poppresentations`}
              src={poppresentations} 
              link={'https://itravelgpt.netlify.app/'}
              h3="Pillars of Peace"
              p= "community education presentations"
            />
        </div>
    </section>
  )
}

export default Projects