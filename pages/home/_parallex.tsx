import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import homeAnimation from "../../src/Animations/_animation";
import useWindowSize from "../../src/Hooks/useWindow";
const breakpoints = {
  xs: 450,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
const Parallex: React.FC = () => {
  //States
  const { width } = useWindowSize();
  const [
    timeline,
    setTimeline,
  ] = useState<null | gsap.plugins.ScrollTriggerInstance>(null);

  //Refs
  const ContainerRef = useRef<HTMLDivElement>(null);

  //UseEffects

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
        console.error("Error: Parallex couldn't be enabled");
      }
    }
  }, [width]);

  return (
    <div className="parallex" ref={ContainerRef}>
      <div className="parallex-image-container">
        <Image
          src="/images/home/Mask Dance.jpg"
          layout="fill"
          className="parallex-image"
        />
        <div className="parallex-text">
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
