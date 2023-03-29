import styles from "./Home.module.css";
import logo from "./assets/images/logoNew.png";
import menu from "./assets/images/menu.svg";
import person from "./assets/images/newPerson.png";
import { Link } from "react-router-dom";
import Services from "./Services";
import Contact from "./Contact";
import Projects from "./Projects"
import './App.css';


const Home = () => {
  return (
    <>
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <img src={logo} className={styles.logo} alt="logo" />
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
            <Link to="/services">Services</Link>
            </li>
            <li>
            <Link to="/projects">Works</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className={styles.menu}>
            <button className={styles.menuBtn}>
              {" "}
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
            <img src={person} alt="person"  className={styles.person}/>
          </div>
        </div>
      </div>
    </div>
    <Services/>
    <Projects/>
    <Contact/>
    </>
  );
};

export default Home;
