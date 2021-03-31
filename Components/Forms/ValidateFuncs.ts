///<---Global Imports--->
import _ from "lodash";
import { FieldState } from "final-form";

const noEmptyField = (value: string, __?: any, meta?: FieldState<any>) => {
  if (value) return false;

  switch (meta?.name) {
    case "name":
      return `${_.startCase(meta?.name)} field can't be left blank`;
    case "email":
      return `${_.startCase(meta?.name)} field can't be left blank`;
    default:
      return "This field can't be left blank";
  }
};

const valName = (value: string, __: any, meta?: FieldState<number>) => {
  const isEmpty = noEmptyField(value, __, meta);

  if (isEmpty) return isEmpty;

  const numberMatch = value.match(/[0-9]+/g);

  if (numberMatch && numberMatch.length > 0)
    return "Name field can't contain numbers";
};

const valNumber = (value: string, __: any, meta?: FieldState<number>) => {
  if (typeof value === "undefined")
    return "This field can only take in numbers or can't be left blank";
};

const valEmail = (value: string) => {
  if (value === "" || typeof value === "undefined")
    return "Email field can't be left empty";
  else if (!value?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))
    return "Please enter a valid email";
  return false;
};

const validateFunction = {
  emptyFields: noEmptyField,
  name: valName,
  email: valEmail,
  number: valNumber,
};

export default validateFunction;
