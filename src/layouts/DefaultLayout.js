import React from "react";

import Notification from "../components/common/notification/Notification";
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";
export default function DefaultLayout(props) {
  return (
    <>
      <div className="header">
        <Notification />
        <Navbar />
      </div>
      <div className="content">{props.children}</div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
