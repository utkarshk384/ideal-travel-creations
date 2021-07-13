///<---Global Imports--->
import React from "react";
import _ from "lodash";
import { Form } from "react-final-form";
import { FormApi } from "final-form";
import axios, { AxiosRequestConfig } from "axios";
import arrayMutators from "final-form-arrays";

///<---Local Imports--->
import CustomizedTourForm from "@/components/Forms/CustomizedTour-Form";
import { scrollToInvalidField } from "./helperFunction";

//Types
import { IErrors } from "@/src/types/helperTypes";

//Styles
import styles from "styles/layout/tour-dialog.module.scss";

const CustomizedTour: React.FC = () => {
  const onSubmit = async (values: object, form: FormApi) => {
    const errors: IErrors = {};
    const config: AxiosRequestConfig = {
      method: "post",
      url: "/api/handle-emails?source=customizedTour",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    const _fields = form.getRegisteredFields();
    const fields: string[] = [];
    _fields.forEach((field) => {
      switch (field) {
        case "other-interests":
        case "additional-message":
        case "phone":
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

    if (Object.keys(errors).length > 0) {
      scrollToInvalidField(fields, form);
      return errors;
    }

    try {
      const response = await axios(config);
      if (response.status === 200) {
        form.reset();
      } else if (response.status === 400) {
      }
    } catch (err) {}
  };

  return (
    <div className={styles["form-container"]}>
      <Form
        onSubmit={onSubmit}
        mutators={{ ...arrayMutators }}
        component={CustomizedTourForm}
      />
    </div>
  );
};

export default CustomizedTour;
