import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.Skills_section}>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <h1 className={styles.skill_title}>HTML</h1>
          <img src="" alt="Html" />
        </div>
        <div className={styles.skill}>
          <h1 className={styles.skill_title}>Css</h1>
          <img src="" alt="Css" />
        </div>
        <div className={styles.skill}>
          <h1 className={styles.skill_title}>JavaScript</h1>
          <img src="" alt="JavaScript" />
        </div>
        <div className={styles.skill}>
          <h1 className={styles.skill_title}>React.js</h1>
          <img src="" alt="React.js" />
        </div>
        <div className={styles.skill}>
          <h1 className={styles.skill_title}>React-router-dom</h1>
          <img src="" alt="React-router-dom" />
        </div>
        <div className={styles.skill}>
          <h1 className={styles.skill_title}>Github</h1>
          <img src="" alt="github" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
