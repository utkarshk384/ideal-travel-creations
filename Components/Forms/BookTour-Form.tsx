///<---Global Imports--->
import React from "react";
import _ from "lodash";
import { useRouter } from "next/router";
import { FormRenderProps } from "react-final-form";

///<---Local Imports--->
import InputFieldWrapper from "@/components/Forms/Wrappers/InputFieldWrapper";
import SubmitToast from "./SubmitToast";
import valFunc from "./ValidateFuncs";

//Styles
import styles from "styles/components/tour-dialog.module.scss";

const BookTourForm: React.FC<FormRenderProps> = (props) => {
  //Router
  const router = useRouter();

  const path = router.asPath.split("/");
  return (
    <form action="" className={styles["form"]} onSubmit={props.handleSubmit}>
      <InputFieldWrapper
        details={{
          title: "Tour",
          label: "Read only Field",
          formGroupClassName: styles["form-group"],
        }}
        fieldProps={{
          name: "tour",
          initialValue: _.startCase(path[3]),
          id: "tour-package",
        }}
        renderProps={{ readOnly: true }}
      />

      <InputFieldWrapper
        details={{
          title: "Name",
          important: true,
          formGroupClassName: styles["form-group"],
        }}
        fieldProps={{ name: "name", id: "first-form-name" }}
        valInput={valFunc.emptyFields}
      />
      <InputFieldWrapper
        details={{
          title: "E-Mail",
          important: true,
          formGroupClassName: styles["form-group"],
        }}
        fieldProps={{ name: "email", id: "first-form-email" }}
        valInput={valFunc.email}
      />
      <InputFieldWrapper
        details={{
          title: "Subject",
          formGroupClassName: styles["form-group"],
        }}
        fieldProps={{ name: "subject", id: "first-form-subject" }}
      />
      <InputFieldWrapper
        details={{
          title: "Message",
          important: true,
          formGroupClassName: styles["form-group"],
          label:
            "Please include no of Travelers, no of kids (their age), tentative dates of travel and your interests and choices of hotel options (if you have any other than mentioned herein)",
          tag: "textarea",
        }}
        fieldProps={{ name: "message", id: "first-form-message" }}
        valInput={valFunc.emptyFields}
      />
      <div className={styles["form-submit"]}>
        <div>
          <button
            type="submit"
            className={props.submitting ? "btn-disabled" : ""}
            disabled={props.submitting}
          >
            Submit
          </button>
        </div>
        <SubmitToast
          submitStates={{
            submitting: props.submitting,
            submitSucceeded: props.submitSucceeded,
            submitFailed: props.submitFailed,
          }}
          error={props.submitErrors as string[]}
        />
      </div>
    </form>
  );
};

export default BookTourForm;
