import styles from "./Home.module.css";
import person from "./assets/images/newPerson.png";
import Services from "./Services";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import "./App.css";
import logo from "./assets/images/logoNew.png";
import menu from "./assets/images/menu.svg";
import { useRef } from "react";

const Home = () => {

  const scrollSec = useRef(null)

  console.log(scrollSec)
  function scrollChange(){
  console.log('worked')  
   scrollSec.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
  }
  // scrollChange()


  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <img src={logo} className={styles.logo} alt="logo" />
            <ul>
              <li>
                <button className={styles.navBtn}>Home</button>
              </li>
              <li>
                <button className={styles.navBtn} onClick={scrollChange}>Skills</button>
              </li>
              <li>
                <button className={styles.navBtn}>Services</button>
              </li>
              <li>
                <button className={styles.navBtn}>Works</button>
              </li>
              <li>
                <button className={styles.navBtn}>Contact</button>
              </li>
            </ul>
            <div className={styles.menu}>
              <button className={styles.menuBtn}>
                <img src={menu} alt="menu" />
              </button>
            </div>
          </div>
          <div className={styles.banner}>
            <div className={styles.left_content}>
              <p>Hello,</p>
              <h1>I am Azizbek</h1>
              <p>a Frontend developer</p>
              <button className={styles.btn_letst} ref={scrollSec}>Let’s Talk</button>
            </div>
            <div className={styles.right_content}>
              <img src={person} alt="person" className={styles.person} />
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
