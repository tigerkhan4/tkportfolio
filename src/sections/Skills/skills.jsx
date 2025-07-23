import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import checkMarkLight from '../../assets/checkmark-light.svg';
import checkMarkDark from '../../assets/checkmark-dark.svg';
import { useTheme } from '../../common/ThemeContext'; // Import useTheme from the correct path



function Skills() {
    const { theme} = useTheme ();
    
      const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;
  return (
    <section id="skills" className={styles.container}>
    <h1 className= "sectionTitle">Skills</h1>
    <div className={styles.skillList}>
        <SkillList
        src={checkMarkIcon} 
        skill="HTML5"/>
        <SkillList
        src={checkMarkIcon} 
        skill="CSS/Tailwind"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Javascript"/>
        <SkillList
        src={checkMarkIcon} 
        skill="React"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Vite"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Node"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Next.js"/>
    </div>
    <hr style ={{ border: '1px solid #ccc', width: '80%' }}/>
    <div className={styles.skillList}>
        <SkillList
        src={checkMarkIcon} 
        skill="Project Planning"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Agile"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Task Tracking"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Presentations"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Benefits Realization Management"/>
    </div>
    <hr style ={{ border: '1px solid #ccc', width: '80%' }}/>
    <div className={styles.skillList}>
    <SkillList
        src={checkMarkIcon} 
        skill="MongoDB"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Microsoft Office"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Google Workspace (Analytics, Sheets, Slides)"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Qualtrics XM"/>
         <SkillList
        src={checkMarkIcon} 
        skill="SPSS"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Notion"/>
    </div>
    <hr style ={{ border: '1px solid #ccc', width: '80%' }}/>
    <div className={styles.skillList}>
        <SkillList
        src={checkMarkIcon} 
        skill="Figma"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Canva"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Adobe Creative Suite"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Storyboarding"/>
         <SkillList
        src={checkMarkIcon} 
        skill="Wireframing"/>
        <SkillList
        src={checkMarkIcon} 
        skill="Social Media Marketing"/>
    </div>
    </section>
  );
}

export default Skills;