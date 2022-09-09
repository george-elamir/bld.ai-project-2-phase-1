import React from "react";
import styles from "./card.module.css";

import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <Link to={`/${props.id}`}>
      <div className={styles.cardcontainer}>
        <img src={props.img} />
        <h4 className={styles.card_title}>{props.title}</h4>
        <p className={styles.instructorname}>{props.instructor}</p>
        <p className={styles.price}>E£{props.price}</p>
      </div>
    </Link>
  );
}
