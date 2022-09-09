import React from "react";

import styles from "./footer.module.css";

import udemylogoinverted from "../../../images/logo-udemy-inverted.svg";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_main}>
        <div className={styles.footer_column}>
          <div className={styles.footer_item}>Udemy Business</div>
          <div className={styles.footer_item}>Teach on Udemy</div>
          <div className={styles.footer_item}>Get the app</div>
          <div className={styles.footer_item}>About us</div>
          <div className={styles.footer_item}>Contact us</div>
          <div className={styles.footer_logo}>
            <img src={udemylogoinverted} />
          </div>
        </div>
        <div>
          <div className={styles.footer_item}>Careers</div>
          <div className={styles.footer_item}>Blog</div>
          <div className={styles.footer_item}>Help and Support</div>
          <div className={styles.footer_item}>Affiliate</div>
          <div className={styles.footer_item}>Invertors</div>
        </div>
        <div>
          <div className={styles.footer_item}>Terms</div>
          <div className={styles.footer_item}>Privacy policy</div>
          <div className={styles.footer_item}>Cookie settings</div>
          <div className={styles.footer_item}>Sitemap</div>
          <div className={styles.footer_item}>Accessibility statement</div>
        </div>
        <div className={styles.footer_column}>
          <button className={`${styles.footer_button} ${styles.footer_item}`}>
            English
          </button>
          <div className={styles.footer_copywrite}>© 2022 Udemy, Inc.</div>
        </div>
      </div>
    </footer>
  );
}
