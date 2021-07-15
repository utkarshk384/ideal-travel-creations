///<---Global Imports--->
import React, { useEffect, useRef } from "react";
import { FormRenderProps } from "react-final-form";

///<---Local Imports--->
import InputFieldWrapper from "@/components/Forms/Wrappers/InputFieldWrapper";
import SelectWrapper from "@/components/Forms/Wrappers/SelectWrapper";
import CheckboxWrapper from "@/components/Forms/Wrappers/RadioBoxWrapper";
import SubmitToast from "./SubmitToast";
import valFunc from "./ValidateFuncs";

//Data
import data from "../../pages/api/tour-form.json";

//Styles
import styles from "styles/layout/tour-dialog.module.scss";

const BookTourForm: React.FC<FormRenderProps> = (props) => {
  const prevSubmitStateRef = useRef<boolean | null>(null);

  useEffect(() => {
    prevSubmitStateRef.current = props.submitting;
  }, [props.submitting]);

  return (
    <form action="" className={styles["form"]} onSubmit={props.handleSubmit}>
      <fieldset
        className={styles["form-fieldset"]}
        style={{ marginBottom: "1rem" }}
      >
        <legend className={styles["legend-text"]} id="customize-this-tour">
          Personal Information
        </legend>
        <InputFieldWrapper
          details={{
            title: "Name",
            important: true,
            formGroupClassName: styles["form-group"],
          }}
          fieldProps={{ name: "name", id: "name" }}
          renderProps={{ placeholder: "John" }}
          valInput={valFunc.name}
        />
        <InputFieldWrapper
          details={{
            title: "Phone",
            formGroupClassName: styles["form-group"],
          }}
          renderProps={{ placeholder: "+9177777777" }}
          fieldProps={{ name: "phone", id: "phone", type: "phone" }}
          phone
        />
        <InputFieldWrapper
          details={{
            title: "E-Mail",
            important: true,
            formGroupClassName: styles["form-group"],
          }}
          renderProps={{ placeholder: "example@example.com" }}
          fieldProps={{ name: "email", id: "email" }}
          valInput={valFunc.email}
        />
        <InputFieldWrapper
          details={{
            title: "Country of Origin",
            important: true,
            formGroupClassName: styles["form-group"],
          }}
          valInput={valFunc.emptyFields}
          renderProps={{ placeholder: "Canada" }}
          fieldProps={{ name: "country-of-origin", id: "country-of-origin" }}
        />
      </fieldset>
      <fieldset style={{ marginBottom: "1rem" }}>
        <legend className={styles["legend-text"]}>Travel Information</legend>

        <div className={`${styles["form-flex"]} ${styles["form-group"]}`}>
          <InputFieldWrapper
            details={{
              title: "Travel Date",
              important: true,
              formGroupClassName: styles["flex-item"],
            }}
            fieldProps={{
              name: "travel-date",
              id: "travel-date",
              type: "date",
              initialValue: new Date().getDate(),
            }}
          />
          <InputFieldWrapper
            details={{
              label: "Please enter the duration in the number of nights spent",
              title: "Duration",
              important: true,
              formGroupClassName: styles["flex-item"],
            }}
            valInput={valFunc.number}
            renderProps={{ placeholder: "5 Nights" }}
            fieldProps={{ name: "duration", id: "duration", type: "number" }}
          />
        </div>
        <div className={`${styles["form-flex"]} ${styles["form-group"]}`}>
          <InputFieldWrapper
            details={{
              title: "Number of travelers",
              label: "Number of adults",
              important: true,
              formGroupClassName: styles["flex-item"],
            }}
            valInput={valFunc.number}
            renderProps={{ placeholder: "2 Adult(s)" }}
            fieldProps={{
              name: "no-of-adults",
              id: "no-of-adults",
              type: "number",
            }}
          />
          <InputFieldWrapper
            details={{
              label: "Number of children",
              important: true,
              formGroupClassName: styles["flex-item"],
            }}
            valInput={valFunc.number}
            renderProps={{ placeholder: "1 kid(s)" }}
            fieldProps={{
              name: "no-of-children",
              id: "no-of-children",
              type: "number",
            }}
          />
        </div>

        <SelectWrapper
          details={{
            title: "Preferred Accommodation",
            formGroupClassName: styles["form-group"],
            important: true,
          }}
          fieldProps={{
            name: "preferred-accommodation",
            id: "preferred-accommodation",
          }}
          select={{
            key: "preferred-accommodation",
            data: data.customizedTour.preferredAccodationData,
          }}
        />
        <SelectWrapper
          details={{
            label: "How would you like to enter Bhutan?",
            title: "Entry Sector",
            formGroupClassName: styles["form-group"],
            important: true,
          }}
          fieldProps={{ name: "entry-sector", id: "entry-sector" }}
          select={{
            key: "entry-sector",
            data: data.customizedTour.SectorData,
          }}
        />
        <SelectWrapper
          details={{
            label: "How would you like to exit Bhutan?",
            title: "Exit Sector",
            formGroupClassName: styles["form-group"],
            important: true,
          }}
          fieldProps={{ name: "exit-sector", id: "exit-sector" }}
          select={{
            key: "exit-sector",
            data: data.customizedTour.SectorData,
          }}
        />
        <CheckboxWrapper
          checkboxKey="Your-Interests"
          fieldProps={{ name: "your-interests", id: "your-interests" }}
          data={data.customizedTour.interestsData}
          details={{
            title: "Your Interests",
            formGroupClassName: styles["form-group"],
            important: true,
          }}
        />
        <InputFieldWrapper
          details={{
            title: "Other Interests",
            label: "Please specify here if you have any other interests",
            formGroupClassName: styles["form-group"],
          }}
          renderProps={{ placeholder: "Ex: Camping" }}
          fieldProps={{ name: "other-interests", id: "other-interests" }}
        />
        <CheckboxWrapper
          checkboxKey="interested-destinations"
          fieldProps={{
            name: "interested-destinations",
            id: "interested-destinations",
          }}
          data={data.customizedTour.placesData}
          details={{
            title: "Interested Destinations",
            formGroupClassName: styles["form-group"],
            important: true,
          }}
        />
      </fieldset>
      <InputFieldWrapper
        details={{
          title: "Additional Message",
          formGroupClassName: styles["form-group"],
          tag: "textarea",
        }}
        renderProps={{
          placeholder:
            "Any other requirments or message that you have to convey?",
        }}
        fieldProps={{ name: "additional-message", id: "additional-message" }}
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
        />
      </div>
    </form>
  );
};

export default BookTourForm;
