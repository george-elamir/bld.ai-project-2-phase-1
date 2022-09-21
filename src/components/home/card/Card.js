import React, { useEffect, useState } from "react";
import styles from "./card.module.css";
import { Popover, ArrowContainer } from "react-tiny-popover";
import { Link } from "react-router-dom";

import HoverCard from "../HoverCard/HoverCard";
export default function Card(props) {
  const [isPopoverOpen, setpopoverOpen] = useState(0);
  const [ispophovering, setispophovering] = useState(0);

  const handleHover = (e) => {
    setpopoverOpen(!isPopoverOpen);
  };
  const handleHovering = (e) => {
    setispophovering(!ispophovering);
  };
  return (
    <Popover
      isOpen={isPopoverOpen || ispophovering}
      positions={["right"]}
      padding={-10}
      content={<HoverCard {...props} handleHovering={handleHovering} />}
    >
      <Link to={`courses/${props.id}`}>
        <div
          className={styles.cardcontainer}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <img src={props.img} />
          <h4 className={styles.card_title}>{props.title}</h4>
          <p className={styles.instructorname}>{props.instructor}</p>
          <p className={styles.price}>E£{props.price}</p>
        </div>
      </Link>
    </Popover>
  );
}
