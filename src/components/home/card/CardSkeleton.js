import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./card.module.css";

import { Link } from "react-router-dom";
export default function CardSkeleton(props) {
  return (
    <div className={styles.cardcontainer}>
      <Skeleton height={30} />

      <h4 className={styles.card_title}>
        <Skeleton />
      </h4>
      <p className={styles.instructorname}>
        <Skeleton />
      </p>
      <p className={styles.price}>
        <Skeleton />
      </p>
    </div>
  );
}
