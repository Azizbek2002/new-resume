import styles from "./Skills.module.css";
import html from "./assets/images/html.png";
import css3 from "./assets/images/css3.png";
import js from "./assets/images/js.png";
import reactIcon from "./assets/images/react.png";
import redux from "./assets/images/redux.png";
import github from "./assets/images/github.png";

const Skills = () => {
  return (
    <div className={styles.Skills_section}>
      <div className={styles.container}>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <h1 className={styles.skill_title}>HTML</h1>
            <img src={html} alt="Html" />
          </div>
          <div className={styles.skill}>
            <h1 className={styles.skill_title}>Css</h1>
            <img src={css3} alt="Css" />
          </div>
          <div className={styles.skill}>
            <h1 className={styles.skill_title}>JavaScript</h1>
            <img src={js} alt="JavaScript" />
          </div>
          <div className={styles.skill}>
            <h1 className={styles.skill_title}>React.js</h1>
            <img src={reactIcon} alt="React.js" />
          </div>
          <div className={styles.skill}>
            <h1 className={styles.skill_title}>React-router-dom</h1>
            <img src={redux} alt="redux" />
          </div>
          <div className={styles.skill}>
            <h1 className={styles.skill_title}>Github</h1>
            <img src={github} alt="github" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
