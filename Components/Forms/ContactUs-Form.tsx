///<----Global Imports--->
import React from "react";
import { FormRenderProps } from "react-final-form";

///<----Local Imports--->
import InputFieldWrapper from "@/components/Forms/Wrappers/InputFieldWrapper";
import valFunc from "./ValidateFuncs";

//Styles
import styles from "styles/pages/contact-us.module.scss";

const FormContent: React.FC<FormRenderProps> = (props) => {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <div className={styles["form-item"]}>
        <p>
          Name<sup>*</sup>
        </p>
        <div className={styles["form-name"]}>
          <InputFieldWrapper
            details={{
              label: "First Name",
              formGroupClassName: styles["name-item"],
              important: true,
            }}
            fieldProps={{ name: "firstname", id: "firstname" }}
            valInput={valFunc.name}
          />
          <InputFieldWrapper
            details={{
              label: "Last Name",
              formGroupClassName: styles["name-item"],
              important: true,
            }}
            fieldProps={{ name: "lastname", id: "lastname" }}
            valInput={valFunc.name}
          />
        </div>
      </div>
      <InputFieldWrapper
        details={{
          title: "E-Mail",
          formGroupClassName: styles["form-item"],
          important: true,
        }}
        fieldProps={{ name: "email", id: "email" }}
        valInput={valFunc.email}
      />
      <InputFieldWrapper
        details={{
          title: "Subject",
          formGroupClassName: styles["form-item"],
        }}
        fieldProps={{ name: "subject", id: "subject" }}
      />

      <InputFieldWrapper
        details={{
          title: "Message",
          formGroupClassName: styles["form-item"],
          important: true,
          tag: "textarea",
        }}
        fieldProps={{ name: "message", id: "message" }}
        valInput={valFunc.emptyFields}
      />

      <div className={styles["form-submit"]}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default FormContent;
