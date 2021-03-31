/// <---Global Imports--->
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/// <---Local Imports--->
//Data
import homeAnimation from "../../src/Animations/homeAnimation";

//Custom Hooks
import useWindowSize, { breakpoints } from "../../src/Hooks/useWindow";

//Styles
import styles from "styles/pages/home.module.scss";

const Parallex: React.FC = () => {
  /// <---States--->
  const { width } = useWindowSize();
  const [
    timeline,
    setTimeline,
  ] = useState<null | gsap.plugins.ScrollTriggerInstance>(null);

  /// <---Refs--->
  const ContainerRef = useRef<HTMLDivElement>(null);

  /// <---Use Effects--->
  useEffect(() => {
    setTimeline(homeAnimation.parallexSection(".parallex-image", ContainerRef));
  }, []);

  useEffect(() => {
    if (width! < breakpoints.lg) {
      timeline!.disable();
    } else {
      try {
        timeline!.enable();
      } catch (err) {
        console.info("Parallex couldn't be enabled");
      }
    }
  }, [width, timeline]);

  return (
    <div className={styles.parallex} ref={ContainerRef}>
      <div className={styles["parallex-image-container"]}>
        <Image
          src="/images/home/Mask Dance.jpg"
          layout="fill"
          className={styles["parallex-image"]}
        />
        <div className={styles["parallex-text"]}>
          <span>
            “Travel Bhutan with Ideal Travel Creations and enjoy a life time’s
            experience. Feel the tranquility, freedom and pamper yourself
            amongst the best Bhutanese Hospitality.”
          </span>
        </div>
      </div>
    </div>
  );
};

export default Parallex;
