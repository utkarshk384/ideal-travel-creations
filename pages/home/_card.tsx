import React, { useEffect, useRef } from "react";
import { types } from "util";

import * as cardData from "../api/home.json";
import homeAnimation from "../../src/Animations/homeAnimation";

const Card: React.FC = () => {
  //Refs
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  //useEffects
  useEffect(() => {
    homeAnimation.slideIn_ScrollTrigger(cardRefs, cardContainerRef);
  }, []);

  return (
    <div className="card" ref={cardContainerRef}>
      <div className="card-heading">
        <h1>The Kingdom of Bhutan</h1>
      </div>
      <div className="card-container">
        {cardData.card.map((singleCard, index) => (
          <div
            className="card-cards"
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
      <button className="card-cta">Explore More</button>
    </div>
  );
};

export default Card;
