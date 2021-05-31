/// <---Global Imports--->
import React, { useEffect, useRef, useState } from "react";

/// <---Local Imports--->
import Image from "@/components/ImageWrapper";

//Animation
import homeAnimation from "../../src/Animations/homeAnimation";

//Styles
import styles from "styles/pages/home.module.scss";

const Hero: React.FC = () => {
  //<---Refs--->
  const heroTextRef = useRef<(HTMLSpanElement | HTMLHeadingElement | null)[]>(
    []
  );

  //<---States--->
  const [imgLoad, setLoad] = useState(false);

  //<---useEffects--->
  useEffect(() => {
    if (imgLoad) homeAnimation.slideIn(heroTextRef, 1);
  }, [imgLoad]);

  return (
    <div className={styles.hero}>
      <Image
        src="https://res.cloudinary.com/djujm0tsp/image/upload/v1617247554/Hero_5f80e23af2.jpg"
        layout="fill"
        className={styles["hero-bg"]}
        priority
        onLoad={() => setLoad(true)}
        loading="eager"
      />
      <div className={styles["hero-container"]} id="home-page">
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
