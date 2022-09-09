import React from "react";

import defaultStyles from "../../../app.module.css";
import styles from "./courses.module.css";

import Tabs from "../tabs/Tabs";
import Card from "../card/Card";
export default function Courses(props) {
  return (
    <div className={styles.courses}>
      <h2 className={styles.courses_header}>A broad selection of courses</h2>
      <p className={styles.courses_text}>
        Choose from 204,000 online video courses with new additions published
        every month
      </p>
      <Tabs />
      <div className={styles.courses_container}>
        <h2 className={styles.courses_header}>
          Expand your career opportunities with Python
        </h2>
        <p className={styles.courses_text}>
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to both
          beginners and advanced developers alike.
        </p>
        <button className={defaultStyles.text_bold}>Explore Python</button>
        <div className={styles.courses_grid}>
          {props.courses.map((e) => {
            return <Card {...e} />;
          })}
        </div>
      </div>
    </div>
  );
}
