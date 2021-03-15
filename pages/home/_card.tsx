import React, { useEffect, useRef } from "react";

import * as cardData from "../api/home.json";
import homeAnimation from "../../src/Animations/homeAnimation";

import styles from "styles/pages/home.module.scss";
const Card: React.FC = () => {
  //Refs
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  //useEffects
  useEffect(() => {
    homeAnimation.slideIn_ScrollTrigger(cardRefs, cardContainerRef, {
      stagger: 0,
      delay: 0.15,
    });
  }, []);

  return (
    <div className={styles.card} ref={cardContainerRef}>
      <div className={styles["card-heading"]}>
        <h1>The Kingdom of Bhutan</h1>
      </div>
      <div className={styles["card-container"]}>
        {cardData.card.map((singleCard, index) => (
          <div
            className={styles["card-cards"]}
            key={`singleCard-${index}`}
            ref={(el) => cardRefs.current.push(el)}
          >
            <h2>{singleCard.heading}</h2>
            {singleCard.body.map((cardBody, i) => (
              <p key={`cardBody-${index}-${i}`}>{cardBody}</p>
            ))}
          </div>
        ))}
      </div>
      <button className={styles["card-cta"]}>Explore More</button>
    </div>
  );
};

export default Card;
