import React from "react";

import styles from "./coursesheading.module.css";
export default function CousesHeading(props) {
  return (
    <div className={styles.courses_heading}>
      <h2 className={styles.heading_title}>{props.title}</h2>
      <p className={styles.heading_brief}>{props.brief}</p>
    </div>
  );
}
