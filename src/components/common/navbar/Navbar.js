import React, { useState } from "react";

//custom hooks
import useSearchNavigate from "../../custom hooks/useSearchNavigate";

import defaultStyles from "../../../app.module.css";
import styles from "./navbar.module.css";

import udemylogo from "../../../images/logo-udemy.svg";
export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const searchFunction = useSearchNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    searchFunction("/", { searchquery: searchQuery });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_container}>
        <img src={udemylogo} />
      </div>
      <div>categories</div>

      <form className={styles.search_container} onSubmit={handleSearch}>
        <button className={styles.searchicon}>*</button>
        <input
          type="text"
          placeholder="Search for anything"
          onChange={handleSearchChange}
        />
      </form>
      <div>Udemy Business</div>

      <div>Teach on Udemy</div>
      <div>Icon</div>
      <div className="buttons_container">
        <button className={`${styles.btn} ${defaultStyles.text_bold}`}>
          Log in
        </button>
        <button
          className={`${styles.btn} ${styles.blackbtn} ${defaultStyles.text_bold}`}
        >
          Sign up
        </button>
        <button className={`${styles.btn} ${defaultStyles.text_bold}`}>
          Icon
        </button>
      </div>
    </nav>
  );
}
