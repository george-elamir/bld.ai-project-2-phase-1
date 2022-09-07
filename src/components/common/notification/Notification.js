import React from "react";

export default function Notification() {
  return (
    <div className={styles.notification_conatiner}>
      <div>
        <span>Get courses from E£169.99 for a limited time</span>
        <span> | </span>
        <span> A special offer for new students</span>
      </div>
      <div>Ends in 3h 42m 29s.</div>
    </div>
  );
}
