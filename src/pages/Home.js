import React from "react";
import { Link } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import Billboard from "../components/home/billboard/Billboard";
import Courses from "../components/home/courses/Courses";
export default function Home(props) {
  return (
    <DefaultLayout>
      <Billboard />
      <Courses courses={props.courses} />
    </DefaultLayout>
  );
}
