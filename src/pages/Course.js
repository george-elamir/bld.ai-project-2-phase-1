import React from "react";

import DefaultLayout from "../layouts/DefaultLayout";

import CousesHeading from "../components/courses/courses-heading/CousesHeading";
export default function Course(props) {
  return (
    <DefaultLayout>
      <CousesHeading {...props} />
    </DefaultLayout>
  );
}
