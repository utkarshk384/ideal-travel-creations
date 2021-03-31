///<---Global Imports--->
import React from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";

///<---Local Imports--->
import { TitleText, HelperText } from "./SharedComponents";

//Types
import { DetailsType, FieldPropsType } from "./types";

//Styles
import styles from "styles/components/form.module.scss";

interface IProps {
  fieldProps: FieldPropsType;
  data: string[];
  checkboxKey: string;
  details: Omit<DetailsType, "tag">;
}

const RadioBoxWrapper: React.FC<IProps> = (props) => {
  return (
    <div className={`${props.details?.formGroupClassName}`}>
      <TitleText details={props.details} />

      <FieldArray name={props.fieldProps.name} id={props.fieldProps.id}>
        {({ meta }) => (
          <>
            <div className={styles["checkbox-container"]}>
              {props.data.map((checkbox, index) => (
                <div
                  className={styles["checkbox-group"]}
                  key={`${props.checkboxKey}-${index * 234}`}
                >
                  <Field
                    {...props.fieldProps}
                    component="input"
                    type="checkbox"
                    value={checkbox}
                    className={styles.checkbox}
                    id={checkbox}
                  />
                  <label htmlFor={checkbox}>{checkbox}</label>
                </div>
              ))}
            </div>
            <HelperText details={props.details} meta={meta} />
          </>
        )}
      </FieldArray>
    </div>
  );
};
export default RadioBoxWrapper;
