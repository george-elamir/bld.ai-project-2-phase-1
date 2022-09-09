import React from "react";

import defaultStyles from "../../../app.module.css";
import styles from "./navbar.module.css";

import udemylogo from "../../../images/logo-udemy.svg";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_container}>
        <img src={udemylogo} />
      </div>
      <div>categories</div>

      <form className={styles.search_container}>
        <button className={styles.searchicon}>*</button>
        <input type="text" placeholder="Search for anything" />
      </form>
      <div>Udemy Business</div>

      <div>Teach on Udemy</div>
      <div>Icon</div>
      <div className="buttons_container">
        <button className={`${styles.btn} ${defaultStyles.text_bold}`}>
          Log in
        </button>
        <button
          className={`${styles.btn} ${styles.blackbtn} ${defaultStyles.text_bold}`}
        >
          Sign up
        </button>
        <button className={`${styles.btn} ${defaultStyles.text_bold}`}>
          Icon
        </button>
      </div>
    </nav>
  );
}
