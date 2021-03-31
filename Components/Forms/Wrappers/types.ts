import { FieldMetaState, FieldInputProps } from "react-final-form";

export type metaType = FieldMetaState<string>;
export type inputType = FieldInputProps<string, HTMLElement>;

export type DetailsType = {
  title?: string;
  label?: string;
  formGroupClassName: string;
  important?: boolean;
  tag?: "input" | "textarea";
};

export type FieldPropsType = {
  id: string;
  name: string;
  afterSubmit?: () => void;
  beforeSubmit?: () => void | false;
  formatOnBlur?: boolean;
  initialValue?: any;
  defaultValue?: any;
  allowNull?: boolean;
};

export type selectType = {
  key: string;
  data: string[];
};
