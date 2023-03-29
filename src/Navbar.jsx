import React from "react";
import styles from "./Home.module.css";
import logo from "./assets/images/logoNew.png";
import menu from "./assets/images/menu.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img src={logo} className={styles.logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
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
            <img src={menu} alt="menu" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
