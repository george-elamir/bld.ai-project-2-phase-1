import React from "react";

//Components
import Card from "./components/card/Card";

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
    <div className={styles.app}>
      {courses.map((e, i) => {
        return <Card key={i} {...e} />;
      })}
    </div>
  );
}

export default App;
