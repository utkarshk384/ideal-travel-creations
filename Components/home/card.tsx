/// <---Global Imports--->
import React, { useEffect, useRef } from "react";
import Link from "@/components/Link";

/// <---Local Imports--->
import useWindowSize, { breakpoints } from "@/src/Hooks/useWindow";

import { homeData } from "@/src/types/helperTypes";

//Animations
import homeAnimation from "../../src/Animations/homeAnimation";

//Styles
import styles from "styles/pages/home.module.scss";

const Card: React.FC<{ data: homeData<string[]>[] }> = ({ data }) => {
  // <---States--->
  const { width } = useWindowSize();

  // <---Refs--->
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // <---Use EFfects--->
  useEffect(() => {
    const startAnimation = width! > breakpoints.sm ? "-30% 30%" : "-30% 60%";

    homeAnimation.slideIn_ScrollTrigger(
      cardRefs,
      cardContainerRef,
      {
        stagger: 0,
        delay: 0.15,
      },
      { start: startAnimation }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`${styles["cards-wrapper"]} ${styles["home-container"]}`}
      ref={cardContainerRef}
    >
      <div className={styles["cards-heading"]}>
        <h1>The Kingdom of Bhutan</h1>
      </div>
      <div className={styles["cards-container"]}>
        {data.map((card, index) => (
          <div
            className={styles["card-wrapper"]}
            key={`card-1-${index * 344}`}
            ref={(el) => cardRefs.current.push(el)}
          >
            <h2>{card.heading}</h2>
            {card.body.map((cardBody, i) => (
              <div
                key={`card-2-${i * 5968}`}
                className={styles["card-content"]}
              >
                <p>{cardBody}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles["cta"]}>
        <Link href="/bhutan" className={styles["cta-btn"]}>
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default Card;
