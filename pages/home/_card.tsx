/// <---Global Imports--->
import React, { useEffect, useRef } from "react";
import Link from "next/link";

/// <---Local Imports--->
import useWindowSize, { breakpoints } from "@/src/Hooks/useWindow";

//Data
import * as cardData from "../api/home.json";

//Animations
import homeAnimation from "../../src/Animations/homeAnimation";

//Styles
import styles from "styles/pages/home.module.scss";

const Card: React.FC = () => {
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
  }, []);

  return (
    <div
      className={`${styles.cards} ${styles["home-container"]}`}
      ref={cardContainerRef}
    >
      <div className={styles["cards-heading"]}>
        <h1>The Kingdom of Bhutan</h1>
      </div>
      <div className={styles["cards-container"]}>
        {cardData.card.map((card, index) => (
          <div
            className={styles["cards-card"]}
            key={`card-1-${index * 344}`}
            ref={(el) => cardRefs.current.push(el)}
          >
            <h2>{card.heading}</h2>
            {card.body.map((cardBody, i) => (
              <p key={`card-2-${i * 5968}`}>{cardBody}</p>
            ))}
          </div>
        ))}
      </div>
      <div className={styles["cards-cta"]}>
        <Link href="/bhutan" passHref>
          <a href="/bhutan" className={styles["cta-btn"]}>
            Explore More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
