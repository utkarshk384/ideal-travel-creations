///<----Global Imports--->
import React, { useEffect, useRef } from "react";
import Image from "next/image";

///<----Local Imports--->

import useWindowSize, { breakpoints } from "@/src/Hooks/useWindow";

//Animations
import homeAnimation from "../../src/Animations/homeAnimation";
//Styles
import styles from "styles/pages/home.module.scss";

const logos = [
  {
    name: "tourism-council-of-bhutan.png",
    url: "https://www.tourism.gov.bt/",
  },
  { name: "druk-air-logo.png", url: "https://www.drukair.com.bt/" },
  { name: "bhutan-airline-logo.png", url: "http://www.bhutanairlines.bt/" },
];
const Affiliations = () => {
  ///<----States--->
  const { width } = useWindowSize();

  ///<----Refs--->
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  ///<----Use Effects--->
  useEffect(() => {
    const startAnimation = width! > breakpoints.sm ? "-30% 30%" : "-30% 60%";
    homeAnimation.slideIn_ScrollTrigger(
      logoRefs,
      containerRef,
      {
        delay: 0.25,
        stagger: { amount: 0 },
      },
      { start: startAnimation }
    );
  }, []);

  return (
    <div className={`${styles.aff} ${styles.container}`} ref={containerRef}>
      <div className={styles["aff-h-wrapper"]}>
        <h1>Affiliations</h1>
      </div>
      <div className={styles["aff-logo-container"]}>
        {logos.map((logo, index) => (
          <a
            href={logo.url}
            key={`aff-1-${index * 3857}`}
            className={styles["aff-logo-wrapper"]}
            ref={(el) => logoRefs.current.push(el)}
          >
            <Image
              layout="fill"
              src={`/images/logo/partners/${logo.name}`}
              className={styles["aff-logo"]}
            />
          </a>
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
