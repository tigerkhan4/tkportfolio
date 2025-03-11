import styles from './herostyles.module.css';
import {useEffect, useState} from 'react';

import heroImg from '../../assets/hj.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme ();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero} 
        src={heroImg} 
        alt="Profile picture of Tamanna Khan" 
        />
        <img 
        className={styles.colorMode} 
        src={themeIcon} 
        alt="Color Mode Icon" 
        onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1> Tamanna <br></br> Khan </h1>
        <h2 className={styles.typewriter}>Project Manager </h2>  {/* Dynamically displaying the role */}
        <span>
          <a href="https://linkedin.com/in/tamannakhan1" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/tigerkhan4" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}> bridging tech and impact—using project management, data, design, and creativity to create meaningful change.</p>
        <a href={CV}>
          <button className="hover" download>
            resumé
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;