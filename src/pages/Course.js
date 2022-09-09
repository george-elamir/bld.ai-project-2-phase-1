import React from "react";

import DefaultLayout from "../layouts/DefaultLayout";

import CoursesHeading from "../components/courses/courses-heading/CoursesHeading";
import CoursesDetails from "../components/courses/courses-details/CoursesDetails";
export default function Course(props) {
  return (
    <DefaultLayout>
      <CoursesHeading {...props} />
      <CoursesDetails {...props} />
    </DefaultLayout>
  );
}
