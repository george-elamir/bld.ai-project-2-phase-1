import React from "react";

import styles from "./coursesheading.module.css";
export default function CousesHeading(props) {
  return (
    <div>
      <div className={styles.courses_heading}>
        <h2 className={styles.heading_title}>{props.title}</h2>
        <p className={styles.heading_brief}>{props.brief}</p>
        <p className="heading_rating">{props.rating}</p>
        <p>created by {props.instructor}</p>
        <p>icon {props.language}</p>
      </div>
      <div className={styles.courses_border}>
        <div className={styles.courses_heading_tabs}>
          <div>Overview</div>
          <div>Curriculum</div>
          <div>Instructor</div>
          <div>Reviews</div>
        </div>
      </div>
    </div>
  );
}
