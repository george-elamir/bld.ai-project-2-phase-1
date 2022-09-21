import React from "react";

import billboard_image from "../../../images/header-image.jpg";
import styles from "./billboard.module.css";
export default function Billboard() {
  return (
    <div className={styles.home_billboard}>
      <div className={styles.billboard_card}>
        <h2>New to Udemy? Lucky you.</h2>
        <p>
          Courses start at E£169.99. Get your new-student offer before it
          expires.
        </p>
      </div>
      <div className={styles.billboard_image}>
        <img src={billboard_image} />
      </div>
    </div>
  );
}
