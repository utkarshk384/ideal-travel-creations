import React, { useEffect, useState } from "react";
import { Form } from "react-final-form";
import FormContent from "@/components/Form";
import Map from "@/components/Map";
import emailjs from "emailjs-com";
import { FormApi } from "final-form";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

import styles from "styles/pages/contact-us.module.scss";

emailjs.init(process.env.EMAILJS_USERID as string);

interface Idata {
  firstname?: string;
  lastname?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage = () => {
  const [expandedMap, setMap] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body");
    if (expandedMap) {
      disableBodyScroll((body as unknown) as HTMLElement);
      document.querySelector(".overlay")?.classList.add("tint-bg");
    } else {
      enableBodyScroll((body as unknown) as HTMLElement);
      document.querySelector(".overlay")?.classList.remove("tint-bg");
    }
  }, [expandedMap]);

  const onSubmit = (data: Idata, form: FormApi) => {
    emailjs.send(
      process.env.EMAILJS_SERVICE_ID as string,
      process.env.EMAILJS_TEMPLATE_ID as string,
      {
        first_name: data.firstname,
        last_name: data.lastname,
        message: data.message,
        subject: data.subject,
        to_email: data.email,
      },
      process.env.EMAILJS_USERID as string
    );
  };

  return (
    <>
      {expandedMap && (
        <div className={styles["expanded-map"]}>
          <Map
            lat={27.4482}
            lng={89.6583}
            zoom={17.0}
            className={styles["map-area"]}
          />
          <div className={`${styles["overlay-btn"]} z-6`}>
            <button onClick={() => setMap(!expandedMap)}>Close Map</button>
          </div>
        </div>
      )}
      <div className={styles["contact-us"]}>
        <div className={`${styles["contact-item"]} ${styles["contact-form"]}`}>
          <div className={styles["form-header"]}>
            <h2>Contact Form</h2>
          </div>
          <Form onSubmit={onSubmit} component={FormContent} />
        </div>
        <div
          className={`${styles["contact-address"]} ${styles["contact-item"]}`}
        >
          <div className={styles["adr-header"]}>
            <h2>Contact Address</h2>
          </div>
          <div className={styles["adr-content"]}>
            <p>IDEAL TRAVEL CREATIONS</p>
            <p>Thimphu: Bhutan</p>
            <p>
              ​Babesa-Thimphu Expressway, Olakha, Opposite to Central Plaza,
            </p>
            <p>Block No. 3, Plot No. 48, Namsang Building, Flat No 102,</p>
            <p>Mobile: +975 17668047/ 17124946</p>
            <p>Telephone: +975 2 324987/ 341089</p>
            <p>
              Email: idealtravelcreations@gmail.com/
              info@idealtravelcreations.com
            </p>
          </div>
          <Map lat={27.4482} lng={89.6583} zoom={17.0} />
          <div className={styles["btn-container"]}>
            <button onClick={() => setMap(!expandedMap)}>Expand Map</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
