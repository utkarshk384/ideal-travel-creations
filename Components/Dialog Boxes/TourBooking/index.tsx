///<---Global Imports--->
import React, { useEffect, useRef, useState } from "react";

///<---Local Imports--->
import BookTour from "./BookTour";
import CustomizedTour from "./CustomizedTour";
import { setBooleanState } from "@/src/helperTypes";

//Animations
import Anim from "@/animations/TourBookingAnimation";

//Styles
import styles from "styles/components/tour-dialog.module.scss";

const mapItems = [
  { name: "Book this Tour", active: { first: true, second: false } },
  { name: "Customize this Tour", active: { first: false, second: true } },
];

const TourBookingWrapper: React.FC<{
  setState: setBooleanState;
}> = ({ setState }) => {
  //<---Local State--->
  const [active, setActive] = useState({ first: true, second: false });
  const [animation, setAnimation] = useState(false);

  const BookTourRef = useRef<HTMLDivElement | null>(null);
  const CustomizeTourRef = useRef<HTMLDivElement | null>(null);

  //<---Use Effects--->
  useEffect(() => {
    Anim.init({ BookTourRef, CustomizeTourRef }, { active, setActive });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //<---Handle States--->
  const checkState = (i: number) => {
    if (i + 1 === 1 && active.first) return true;
    if (i + 1 === 2 && active.second) return true;

    return false;
  };

  return (
    <div className={styles["dialog-box"]}>
      <div className={styles["title-bar"]}>
        <div className={styles["menu-bar"]}>
          {mapItems.map((item, index) => (
            <button
              data-index={index + 1}
              key={`tour-booking-${index * 23}`}
              className={`${styles["menu-item"]} ${
                checkState(index) ? styles.active : ""
              }`}
              onClick={(e) => {
                setAnimation(true);
                Anim.slideAnimation(e, setAnimation);
              }}
              disabled={animation}
            >
              {item.name}
            </button>
          ))}

          <div className={styles["close-btn"]}>
            <button onClick={() => setState(false)} />
          </div>
        </div>
      </div>
      <div className={styles["form-wrapper"]}>
        <div
          className={`${styles.container} ${styles["first-form"]} ${
            !active.first ? styles["hidden"] : ""
          }`}
          ref={BookTourRef}
        >
          <BookTour />
        </div>
        <div
          className={`${styles["container"]} ${styles["second-form"]} ${
            !active.second ? styles["hidden"] : ""
          }`}
          ref={CustomizeTourRef}
        >
          <CustomizedTour />
        </div>
      </div>
    </div>
  );
};

export default TourBookingWrapper;
