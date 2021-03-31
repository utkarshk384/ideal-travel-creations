import React from "react";

import type { metaType, DetailsType } from "./types";

import styles from "styles/components/form.module.scss";

type HelperTextPropsType = {
  meta: metaType;
  details: DetailsType;
};

export const HelperText: React.FC<HelperTextPropsType> = ({
  meta,
  details,
}) => {
  return (
    <>
      {(meta.submitError || meta.error) && meta.touched && !meta.active ? (
        <span className={`${styles["error-text"]}`}>
          {meta.error || meta.submitError}
        </span>
      ) : (
        <label
          className={`${styles["info-text"]} ${
            !details.label ? styles["hide-text"] : ""
          }`}
        >
          {details.label || "__"}
          {details.important && details.label && <sup>*</sup>}
        </label>
      )}
    </>
  );
};

export const TitleText: React.FC<{ details: DetailsType }> = ({ details }) => {
  return (
    <p
      className={styles["paragraph-text"]}
      style={{ visibility: !details?.title ? "hidden" : "visible" }}
    >
      {details?.title}
      {details?.important && <sup>*</sup>}
    </p>
  );
};
