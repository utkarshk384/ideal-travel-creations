///<---Global Imports--->
import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

///<---Local Imports--->
import TickIcon from "@/components/SVGS/Tick";
import TimesIcon from "@/components/SVGS/Times";
import { FourDots } from "@/components/Spinners-and-Loaders/Spinners";

//Styles
import styles from "styles/components/tour-dialog.module.scss";

type submitStatesType = {
  submitting: boolean;
  submitSucceeded: boolean;
  submitFailed: boolean;
};

const SubmitToast: React.FC<{
  submitStates: submitStatesType;
  error?: string | string[];
}> = ({ submitStates, error }) => {
  let err: string = "";
  if (error) err = typeof error === "string" ? error : error![0];

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
        classNames={{
          enter: styles["submit-enter"],
          enterActive: styles["submit-enter-active"],
          exit: styles["submit-exit"],
        }}
        timeout={1000}
      >
        <>
          {submitStates.submitSucceeded && (
            <>
              <TickIcon />
              <span className={styles["green-text"]}>
                Sucessfully submitted the form
              </span>
            </>
          )}
          {submitStates.submitting && <FourDots />}
          {submitStates.submitFailed && (
            <>
              <TimesIcon />
              <span>
                {err || "Failed to submit the form. Please try again"}
              </span>
            </>
          )}
        </>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default SubmitToast;
