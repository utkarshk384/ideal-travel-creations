///<----Global Imports--->
import React from "react";
import _ from "lodash";
import axios, { AxiosRequestConfig } from "axios";
import { FormApi } from "final-form";
import { Form } from "react-final-form";
import emailjs from "emailjs-com";

///<----Local Imports--->
import FormContent from "@/components/Forms/ContactUs-Form";
import Map from "@/components/Map";
import { scrollToInvalidField } from "@/components/Dialog Boxes/TourBooking/helperFunction";

//Custom Hooks
import useOverlay from "../../src/Hooks/useOverlay";

//Types
import { IErrors } from "@/src/helperTypes";

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
  const onSubmit = async (values: Idata, form: FormApi) => {
    let config: AxiosRequestConfig = {
      method: "post",
      url: "/api/handle-emails?source=contactUs",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    const { errors, fields } = onsubmitErrors(form);
    if (Object.keys(errors).length > 0) {
      scrollToInvalidField(fields, form);
      return errors;
    }

    try {
      const response = await axios(config);
      if (response.status === 200) {
        return false;
      }
    } catch (err) {
      return "Error in submitting the form. Please try again.";
    }
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
        <div className={` ${styles["contact-form"]}`}>
          <div className={styles["form-header"]}>
            <h2>Contact Form</h2>
          </div>
          <Form onSubmit={onSubmit} component={FormContent} />
        </div>
        <div className={`${styles["contact-address"]}`}>
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
          <Map
            lat={27.4482}
            lng={89.6583}
            zoom={17.0}
            className={styles["contact-map"]}
          />
          <div className={styles["btn-container"]}>
            <button onClick={() => setOverlay!(!overlay)}>Expand Map</button>
          </div>
        </div>
      </div>
    </>
  );
};

const onsubmitErrors = (form: FormApi) => {
  const errors: IErrors = {};

  const _fields = form.getRegisteredFields();
  const fields: string[] = [];

  //Excluding fields that are required like the subject or tour
  _fields.forEach((field) => {
    switch (field) {
      case "subject":
        break;
      default:
        fields.push(field);
    }
  });
  const fieldDirtyStates = form.getState().dirtyFields;

  fields.forEach((field) => {
    if (!(field in fieldDirtyStates)) {
      errors[field] = `Please fill out the ${_.startCase(field)} section.`;
    }
  });

  return { errors, fields };
};

export default ContactPage;
