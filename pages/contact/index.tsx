///<----Global Imports--->
import React from "react";
import { FormApi } from "final-form";
import { Form } from "react-final-form";
import emailjs from "emailjs-com";

///<----Local Imports--->
import FormContent from "@/components/Forms/ContactUs-Form";
import Map from "@/components/Map";

//Custom Hooks
import useOverlay from "../../src/Hooks/useOverlay";

//Styles
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
  ///<----Custom Hook--->
  const { overlay, setOverlay } = useOverlay();

  ///<----Handle Events--->
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
      {overlay && (
        <div className={styles["expanded-map"]}>
          <Map
            lat={27.4482}
            lng={89.6583}
            zoom={17.0}
            className={styles["map-area"]}
          />
          <div className={`${styles["overlay-btn"]} z-6`}>
            <button onClick={() => setOverlay!(!overlay)}>Close Map</button>
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
            <button onClick={() => setOverlay!(!overlay)}>Expand Map</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
