///<---Global Imports--->
import React, { FocusEvent } from "react";
import { Field, FieldInputProps, FieldMetaState } from "react-final-form";
import { FieldState } from "final-form";

///<---Local Imports--->
import { HelperText, TitleText } from "./SharedComponents";

//Types
import { DetailsType, FieldPropsType, metaType } from "./types";

//Styles
import styles from "styles/components/form.module.scss";

interface IFieldProps extends FieldPropsType {
  type?: string;
}

interface IProps {
  renderProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  fieldProps: IFieldProps;
  details: DetailsType;
  valInput?: (
    value: string,
    fieldValues: object,
    meta?: FieldState<any>
  ) => any;
  phone?: boolean;
}

interface IConditonalRender {
  props: IProps;
  input: FieldInputProps<string, HTMLElement>;
  meta: FieldMetaState<string>;
}

const valField = (e: FocusEvent<HTMLInputElement>, meta: metaType) => {
  if (
    ((meta.error || meta.submitError) && meta.touched) ||
    (meta.error && meta.active)
  )
    e.currentTarget.classList.add("error-border");
  else e.currentTarget.classList.remove("error-border");
};

const InputFieldWrapper: React.FC<IProps> = (props) => {
  return (
    <Field
      validate={props.valInput ? props.valInput : () => {}}
      {...props.fieldProps}
      type={props.fieldProps.type || "text"}
    >
      {({ input, meta }) => (
        <div className={`${props.details.formGroupClassName}`}>
          <TitleText details={props.details} />
          <ConditonalRender props={props} input={input} meta={meta} />
          <HelperText details={props.details} meta={meta} />
        </div>
      )}
    </Field>
  );
};

const ConditonalRender: React.FC<IConditonalRender> = ({
  props,
  input,
  meta,
}) => {
  const { type } = props.fieldProps;
  const date = new Date();
  const currDate = {
    year: date.getFullYear(),
    month: ("0" + (date.getMonth() + 1)).slice(-2),
    day: ("0" + date.getDate()).slice(-2),
  };

  let Tag: any = "input";
  if (props.details.tag && props.details.tag === "textarea")
    Tag = props.details.tag;

  if (type === "date") {
    return (
      <input
        className={styles[Tag === "input" ? "input-field" : "textarea-field"]}
        {...input}
        {...props.renderProps}
        onBlur={(e: any) => {
          input.onBlur(e);
          valField(e, meta);
        }}
        id={props.fieldProps.id}
        min={`${currDate.year}-${currDate.month}-${currDate.day}`}
        max={`${currDate.year + 2}-${currDate.month}-${currDate.day}`}
      />
    );
  }

  return (
    <Tag
      className={styles[Tag === "input" ? "input-field" : "textarea-field"]}
      {...input}
      {...props.renderProps}
      id={props.fieldProps.id}
      onBlur={(e: any) => {
        input.onBlur(e);
        valField(e, meta);
      }}
    />
  );
};

export default InputFieldWrapper;
