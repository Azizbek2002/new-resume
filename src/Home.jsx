import styles from "./Home.module.css";
import person from "./assets/images/newPerson.png";
import Services from "./Services";
import Contact from "./Contact";
import Projects from "./Projects";
import "./App.css";

const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className={styles.left_content}>
              <p>Hello,</p>
              <h1>I am Azizbek</h1>
              <p>a Frontend developer</p>
              <button className={styles.btn_letst}>Let’s Talk</button>
            </div>
            <div className={styles.right_content}>
              <img src={person} alt="person" className={styles.person} />
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
