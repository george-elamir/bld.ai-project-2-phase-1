import React from "react";

//Components
import Card from "./components/card/Card";
import Tabs from "./components/tabs/Tabs";

import styles from "./app.module.css";
function App() {
  const courses = [
    {
      id: "aseafe2",
      title: "learn python from zero to hero",
      instructor: "jose portila",
      img: "https://img-b.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
      price: 39,
    },
    {
      id: "aseafe2",
      title: "learn python from zero to hero",
      instructor: "jose portila",
      img: "https://img-b.udemycdn.com/course/240x135/396876_cc92_7.jpg",
      price: 39,
    },
    {
      id: "aseafe2",
      title: "learn python from zero to hero",
      instructor: "jose portila",
      img: "https://img-b.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
      price: 39,
    },
  ];
  return (
    <>
      <h3 className={styles.section_header}>A broad selection of courses</h3>
      <p>
        Choose from 204,000 online video courses with new additions published
        every month
      </p>
      <Tabs />
      <div className={styles.main_section}>
        <h3>Expand your career opportunities with Python</h3>
        <p className={styles.section_paragraph}>
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to both
          beginners and advanced developers alike.
        </p>
        <button className={styles.btn}>Explore Python</button>
        <div className={styles.app}>
          {courses.map((e, i) => {
            return <Card key={i} {...e} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
