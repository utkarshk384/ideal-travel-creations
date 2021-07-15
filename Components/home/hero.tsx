/// <---Global Imports--->
import React, { useEffect, useRef } from "react";

/// <---Local Imports--->
import Image from "@/components/ImageWrapper";

//Animation

import gsap from "gsap";

//Styles
import styles from "styles/pages/home.module.scss";

const Hero: React.FC = () => {
  //<---Refs--->
  const heroTextRef = useRef<(HTMLSpanElement | HTMLHeadingElement | null)[]>(
    []
  );

  //<---States--->
  const tl = useRef(gsap.timeline());

  //<---useEffects--->

  useEffect(() => {
    tl.current.from(heroTextRef.current, {
      y: 100,
      opacity: 0,
      stagger: { amount: 1 },
      delay: 1,
    });
  }, []);

  return (
    <div className={styles["hero-wrapper"]}>
      <Image
        src="https://res.cloudinary.com/djujm0tsp/image/upload/v1617247554/Hero_5f80e23af2.jpg"
        layout="fill"
        className={styles["hero-bg"]}
        loading="eager"
        placeholder="blur"
        blurDataURL="https://res.cloudinary.com/djujm0tsp/image/upload/e_blur:1000/v1617247554/Hero_5f80e23af2.jpg"
      />
      <div className={styles["hero-container"]} id="home-page">
        <div className={styles["hero-center-text"]}>
          <h1 ref={(el) => heroTextRef.current.push(el)}>
            Explore <b>Bhutan</b> with us
          </h1>
          <h2 ref={(el) => heroTextRef.current.push(el)}>
            We pledge more than just travel
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Hero;
