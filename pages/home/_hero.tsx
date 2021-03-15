/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import homeAnimation from "../../src/Animations/homeAnimation";

import styles from "styles/pages/home.module.scss";

const Hero: React.FC = () => {
  //Refs
  const heroTextRef = useRef<(HTMLSpanElement | HTMLHeadingElement | null)[]>(
    []
  );

  //useEffects
  useEffect(() => {
    homeAnimation.slideIn(heroTextRef);
  }, []);

  return (
    <div className={styles.hero}>
      <Image
        src="/images/home/hero.jpg"
        layout="fill"
        className={styles["hero-bg"]}
      />
      <div className={styles["hero-container"]}>
        <div className={styles["hero-center-text"]}>
          <span ref={(el) => heroTextRef.current.push(el)}>
            Explore <b>Bhutan</b> with us
          </span>
          <h2 ref={(el) => heroTextRef.current.push(el)}>
            We pledge more than just travel
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Hero;
