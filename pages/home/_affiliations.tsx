import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "styles/pages/home.module.scss";

import homeAnimation from "../../src/Animations/homeAnimation";

//To-DO: Change Image location of logos.

const Affiliations = () => {
  const logos = [
    "tourism-council-of-bhutan.png",
    "druk-air-logo.png",
    "bhutan-airline-logo.png",
  ];

  //Refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRefs = useRef<(HTMLButtonElement | null)[]>([]);

  //useEffects
  useEffect(() => {
    homeAnimation.slideIn_ScrollTrigger(logoRefs, containerRef, {
      delay: 0.25,
      stagger: { amount: 0 },
    });
  }, []);

  return (
    <div className={styles.aff} ref={containerRef}>
      <div className={styles["aff-h-wrapper"]}>
        <h1>Affiliations</h1>
      </div>
      <div className={styles["aff-logo-container"]}>
        {logos.map((logo, index) => (
          <button
            key={`affiliations-${index}`}
            className={styles["aff-logo-wrapper"]}
            ref={(el) => logoRefs.current.push(el)}
          >
            <Image
              layout="fill"
              src={`/images/logo/partners/${logo}`}
              className={styles["aff-logo"]}
            />
          </button>
        ))}
      </div>
      <div className={styles["aff-body-wrapper"]}>
        <p>
          Ideal Travel Creations unveils a whole new spectacular world to the
          travelers visiting Bhutan. We provide varied selection of tours and
          treks showcasing the very best aspect of this enchanting Himalayan
          Kingdom of Bhutan.
        </p>
        <p>
          We invite you to discover Bhutan with us which is truly a different
          world. We are a local Bhutanese Tour Operator well aware and equipped
          to cater to the requirements of various travelers. Our Team of team of
          highly experienced professionals are well versed in the nuances of
          Bhutan tourism. We value our guests and as such we’ll provide you with
          utmost satisfaction and everlasting fond memories to take home.
        </p>
      </div>
    </div>
  );
};

export default Affiliations;
