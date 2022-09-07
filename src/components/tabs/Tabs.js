import React from "react";
import styles from "./tabs.module.css";

export default function Tabs() {
  return (
    <div class={styles.tabs_container}>
      <div className={styles.active_tab}>Python</div>
      <div className={styles.tab}>Excel</div>
      <div className={styles.tab}>Web Development</div>
      <div className={styles.tab}>javaScript</div>
      <div className={styles.tab}>Data Science</div>
      <div className={styles.tab}>AWS Certificate</div>
      <div className={styles.tab}>Drawing</div>
    </div>
  );
}
