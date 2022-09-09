import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import styles from "./coursesdetails.module.css";
export default function CoursesDetails(props) {
  return (
    <div className={styles.Courses_details}>
      <div className={styles.courses_benefits}>
        <h2>What you'll learn</h2>
        <div className={styles.benefits_points}>
          {props.benefits.map((e) => {
            return <div className={styles.benefits_point}>{e}</div>;
          })}
        </div>
      </div>
      <div className={styles.courses_content}>
        <h2>Course content</h2>
        {props.coursecontent.map((e) => {
          return (
            <Accordion>
              <AccordionSummary aria-controls="panel1a-content">
                <Typography sx={{ fontSize: 16 }}>{e}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      <div className={styles.courses_requirements}>
        <h2>Requirements</h2>
        <ul className={styles.requirements_list}>
          {props.requirements.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </div>
      <div className={styles.courses_description}>
        <h2>Description</h2>
        {<div>{props.brief}</div>}
      </div>
    </div>
  );
}
