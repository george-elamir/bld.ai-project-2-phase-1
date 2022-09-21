import React from "react";
import styles from "./hovercard.module.css";
export default function HoverCard(props) {
  console.log(props.handleHover);
  return (
    <div
      className={styles.hovercard}
      onMouseEnter={props.handleHovering}
      onMouseLeave={props.handleHovering}
    >
      <h2>{props.title}</h2>
      <p>{props.brief}</p>
      <ul>
        {props.benefits.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
      <button className={styles.cartbtn}>Add To Cart</button>
    </div>
  );
}
