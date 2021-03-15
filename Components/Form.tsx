import { FocusEvent } from "react";
import { FormRenderProps, Field } from "react-final-form";

import styles from "styles/pages/contact-us.module.scss";

type TvalEvent = FocusEvent<HTMLInputElement>;

type TvalFieldParmas = {
  error: boolean;
  touched?: boolean;
  active?: boolean;
};

interface IDetails {
  name: string;
  title?: string;
  label?: string;
  className: string;
  important?: boolean;
  tag?: string;
}

const FormContent: React.FC<FormRenderProps> = (props) => {
  const valName = (value: string) => {
    if (value) return false;
    return "Name can not be left blank";
  };
  const valMessage = (value: string) => {
    if (value) return false;
    return "Message field can't be left empty";
  };

  const valEmail = (value: string) => {
    if (value?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) return false;
    return "Please enter a valid email";
  };

  return (
    <form action="" className={styles.form} onSubmit={props.handleSubmit}>
      <div className={styles["form-item"]}>
        <p>
          Name<sup>*</sup>
        </p>
        <div className={styles["form-name"]}>
          <FieldWrapper
            details={{
              name: "firstname",
              label: "First Name",
              className: styles["name-item"],
              important: true,
            }}
            valInput={valName}
          />
          <FieldWrapper
            details={{
              name: "lastname",
              label: "Last Name",
              className: styles["name-item"],
              important: true,
            }}
            valInput={valName}
          />
        </div>
      </div>
      <FieldWrapper
        details={{
          name: "email",
          title: "E-Mail",
          className: `${styles["form-item"]} ${styles["form-email"]}`,
          important: true,
        }}
        valInput={valEmail}
      />
      <FieldWrapper
        details={{
          name: "subject",
          title: "Subject",
          className: styles["form-item"],
        }}
      />

      <FieldWrapper
        details={{
          name: "message",
          title: "Message",
          className: styles["form-item"],
          tag: "textarea",
          important: true,
        }}
        valInput={valMessage}
      />

      <div className={styles["form-submit"]}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default FormContent;

const FieldWrapper: React.FC<{
  details: IDetails;
  valInput?: (value: string) => string | boolean;
}> = (props) => {
  const valField = (
    e: TvalEvent,
    { error, touched, active }: TvalFieldParmas
  ) => {
    if ((error && touched) || (error && active))
      e.currentTarget.classList.add("error-border");
    else e.currentTarget.classList.remove("error-border");
  };

  const Tag: any = props.details.tag ? props.details.tag : "input";

  return (
    <Field
      name={`${props.details.name}`}
      type="text"
      validate={props.valInput ? props.valInput : () => {}}
    >
      {({ input, meta }) => (
        <div className={`${props.details.className}`}>
          {props.details.title && (
            <p>
              {props.details.title} {props.details.important && <sup>*</sup>}
            </p>
          )}
          <Tag
            className={styles["input-field"]}
            {...input}
            onBlur={(e: any) => {
              input.onBlur(e);
              valField(e, {
                error: meta.error,
                touched: meta.touched,
                active: meta.active,
              });
            }}
          />

          {meta.error && meta.touched && !meta.active ? (
            <span className={styles["error-text"]}>{meta.error}</span>
          ) : (
            <label>
              {props.details.label && props.details.label}
              {props.details.important && props.details.label && <sup>*</sup>}
            </label>
          )}
        </div>
      )}
    </Field>
  );
};
