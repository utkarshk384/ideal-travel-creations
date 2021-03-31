///<---Global Imports--->
import React, { useEffect, useRef, useState } from "react";
import { Field, FieldInputProps, FieldMetaState } from "react-final-form";

///<---Local Imports--->
import { HelperText, TitleText } from "./SharedComponents";

//Types
import { DetailsType, FieldPropsType, selectType } from "./types";

//Styles
import styles from "styles/components/form.module.scss";

interface IFieldProps extends FieldPropsType {
  multiple?: boolean;
}

interface IProps {
  renderProps?: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
  optionProps?: React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >;
  fieldProps: IFieldProps;
  details: DetailsType;
  valInput?: (value: string) => any;
  phone?: boolean;
  select?: selectType;
}

interface ISelectAdapter extends IProps {
  input: FieldInputProps<string, HTMLElement>;
  meta: FieldMetaState<string>;
}

const SelectAdapter: React.FC<ISelectAdapter> = (props) => {
  const { meta, input } = props;

  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const valueRef = useRef<string>("");

  useEffect(() => {
    const el = containerRef.current as HTMLDivElement;
    const value = (el.firstElementChild as HTMLSelectElement)?.value;
    valueRef.current = value;

    const classList = el.classList;

    if (open) classList.add("active");
    else classList.remove("active");
  }, [open]);

  const handleOnBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    input.onBlur(e);

    if (e.currentTarget.value === valueRef.current) {
      setOpen(false);
    }
  };

  return (
    <div className={`${props.details.formGroupClassName}`}>
      <TitleText details={props.details} />

      <div
        role="button"
        tabIndex={0}
        className={styles["select-container"]}
        onClick={() => setOpen(!open)}
        ref={containerRef}
      >
        <select
          {...input}
          id={props.fieldProps.id}
          className={styles.sel}
          onBlur={(e) => {
            handleOnBlur(e);
          }}
          onChange={(e) => {
            input.onChange(e);
            e.currentTarget.blur();
          }}
          {...props.renderProps}
        >
          {props.select?.data.map((option, index) => (
            <option
              key={`${props.select!.key}-option-${index * 60}`}
              className={styles["sel-opt"]}
              {...props.optionProps}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>

      <HelperText details={props.details} meta={meta} />
    </div>
  );
};

const SelectWrapper: React.FC<IProps> = (props) => {
  return (
    <Field
      validate={props.valInput ? props.valInput : () => {}}
      {...props.fieldProps}
      initialValue={props.select?.data[0]}
      renderProps={props.renderProps}
      optionProps={props.optionProps}
      fieldProps={props.fieldProps}
      valInput={props.valInput}
      details={props.details}
      select={props.select}
      component={SelectAdapter}
    />
  );
};
export default SelectWrapper;
