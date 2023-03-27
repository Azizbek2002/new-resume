import styles from "./Home.module.css";
import logo from "./assets/images/logoNew.png";
import menu from "./assets/images/menu.svg";
import person from "./assets/images/newPerson.png";
import './App.css';


const Home = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <img src={logo} className={styles.logo} alt="logo" />
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Blog</a>
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
  );
};

export default Home;
