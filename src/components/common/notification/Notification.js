import React from "react";

import defaultStyles from "../../../app.module.css";
import styles from "./notification.module.css";
export default function Notification() {
  return (
    <div className={styles.notification_conatiner}>
      <div>
        <span className={defaultStyles.text_bold}>
          Get courses from E£169.99 for a limited time
        </span>
        <span> | </span>
        <span> A special offer for new students</span>
      </div>
      <div className={defaultStyles.text_bold}>Ends in 3h 42m 29s.</div>
    </div>
  );
}
