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
  const allmenu = useRef(null);
  const allmenuLI = useRef(null);

  const openMenu = () => {
    allmenu.current.style.display = "block";
    allmenu.current.classList.add(styles.openningMenu);
    allmenu.current.classList.remove(styles.closeD);
  };
  const closeMenu = () => {
    allmenu.current.classList.add(styles.closeD);
    allmenu.current.classList.remove(styles.openningMenu);
    setTimeout(() => {
      allmenu.current.style.display = "none";
    }, 600);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <img src={logo} className={styles.logo} alt="logo" />
            <ul className={styles.allmenu} ref={allmenu}>
              <button className={styles.closeBtn} onClick={closeMenu}>
                x
              </button>
              <li className={styles.block} ref={allmenuLI}>
                <a href="#home" className={styles.navBtn}>
                  Home
                </a>
              </li>
              <li className={styles.block} ref={allmenuLI}>
                <a href="#skills" className={styles.navBtn}>
                  Skills
                </a>
              </li>
              <li className={styles.block} ref={allmenuLI}>
                <a href="#services" className={styles.navBtn}>
                  Services
                </a>
              </li>
              <li className={styles.block} ref={allmenuLI}>
                <a href="#projects" className={styles.navBtn}>
                  Projects
                </a>
              </li>
              <li className={styles.block} ref={allmenuLI}>
                <a href="#contact" className={styles.navBtn}>
                  Contact
                </a>
              </li>
            </ul>
            <div className={styles.menu}>
              <button className={styles.menuBtn} onClick={openMenu}>
                <img src={menu} alt="menu" />
              </button>
            </div>
          </div>
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
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
