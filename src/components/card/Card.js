import React from "react";
import styles from "./card.module.css";

export default function Card(props) {
  return (
    <div className={styles.cardcontainer}>
      <img src={props.img} />
      <h4>{props.title}</h4>
      <p>{props.instructor}</p>
      <p>E£{props.price}</p>
    </div>
  );
}
