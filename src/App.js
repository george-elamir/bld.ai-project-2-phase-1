import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

//Components
import Card from "./components/card/Card";
import Tabs from "./components/tabs/Tabs";

//pages
import Home from "./pages/Home";
import Course from "./pages/Course";

//Styles
import styles from "./app.module.css";
function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function fetch() {
      try {
        const coursesResponse = await axios.get("http://localhost:3000/data");
        setCourses(coursesResponse.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {courses.map((course) => {
        return <Route path={`${course.id}`} element={<Course {...course} />} />;
      })}
    </Routes>
  );
}

export default App;
