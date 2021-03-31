///<----Global Imports--->
import React from "react";

///<----Local Imports--->
//Styles
import styles from "styles/components/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-contacts"]}>
          <div
            className={`${styles["footer-wrapper"]} ${styles["important-links"]}`}
          >
            <h3>Important Links</h3>
          </div>
          <div className={`${styles["footer-wrapper"]} ${styles["email-us"]}`}>
            <h3>Contact Us or Mail Us</h3>
            <a href="mailto:idealtravelcreations@gmail.com">
              idealtravelcreations@gmail.com
            </a>
            <a href="tel:+975-2-324987">+975-2-324987</a>
            <a href="tel:+975-2-341089">+975-2-341089</a>
          </div>
          <div className={`${styles["footer-wrapper"]} ${styles.address}`}>
            <h3>Address</h3>
            <p>Babesa-Thimphu Expressway,</p>
            <p>Olakha,</p>
            <p>Opposite to Central Plaza,</p>
            <p>Block No. 3, Plot No. 48,</p>
            <p>Namsang Building, Flat No 102,</p>
            <p>Post Box No: 1931</p>
          </div>
        </div>
        <hr className={styles["footer-hr"]} />
        <div className={styles["footer-end"]}>
          <div className={styles["footer-socials"]}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            />
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
            />
          </div>
          <p className={styles["footer-copyright"]}>
            <i className={styles["copyright"]} />
            Copyright 2021, All Rights Reserved
          </p>
        </div>
        <div className={styles["license-container"]}>
          <div className={styles.license}>
            <p>Icons provided by &nbsp;</p>
            <a
              href="https://icons8.com/icon/65471/mountain"
              className={styles["mountain-icon"]}
            >
              Icons8
            </a>
          </div>
          <div className={styles.license}>
            <p>Maps by &nbsp;</p>
            <a
              href="https://www.mapbox.com/about/maps/"
              rel="noreferrer"
              target="_blank"
            >
              &copy; Mapbox
            </a>
            <a
              href="https://www.openstreetmap.org"
              target="_blank"
              rel="noreferrer"
            >
              &copy; OpenStreetMap
            </a>
          </div>
          <div className={styles.license}>
            <p>Spinner by &nbsp;</p>
            <a href="https://loading.io/" rel="noreferrer" target="_blank">
              loading.io
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
