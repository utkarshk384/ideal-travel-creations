///<---Global Imports--->
import React from "react";
import _ from "lodash";
import { Form } from "react-final-form";
import { FormApi } from "final-form";
import axios, { AxiosRequestConfig } from "axios";

///<---Local Imports--->
import BookTourForm from "@/components/Forms/BookTour-Form";
import { scrollToInvalidField } from "./helperFunction";

//Types
import { IErrors } from "@/src/types/helperTypes";

//Styles
import styles from "styles/components/tour-dialog.module.scss";

const BookTour: React.FC = () => {
  const onSubmit = async (values: object, form: FormApi) => {
    let config: AxiosRequestConfig = {
      method: "post",
      url: "/api/handle-emails?source=bookTour",
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
      <div className={styles["form-container"]}>
        <Form onSubmit={onSubmit} component={BookTourForm} />
      </div>
    </>
  );
};

const onsubmitErrors = (form: FormApi) => {
  const errors: IErrors = {};

  const _fields = form.getRegisteredFields();
  const fields: string[] = [];
  _fields.forEach((field) => {
    switch (field) {
      case "subject":
      case "tour":
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

export default BookTour;
