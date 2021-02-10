import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import $clamp from "clamp-js";
import _ from "lodash";

import useWindowSize from "../../src/Hooks/useWindow";
import homeAnimation from "../../src/Animations/homeAnimation";

import { IsliderData } from "@/graphql/types";

const Slider: React.FC<{ data: IsliderData[] }> = ({ data }) => {
  //States
  const [activeCard, setCard] = useState(1);
  const [animating, setAnimation] = useState(false);
  const { width } = useWindowSize();

  //Refs
  const cardBodyRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const activeCardRef = useRef<(HTMLButtonElement | null)[]>([]);

  //UseEffects

  useEffect(() => {
    cardBodyRef.current.forEach((bodyText) => {
      $clamp(bodyText as HTMLParagraphElement, { clamp: 4 });
    });
  }, []);

  useEffect(() => {
    setAnimation(false);
  }, [activeCard]);

  useEffect(() => {
    if (width! > 1280 && activeCard === 0) {
      homeAnimation.sliderSection(activeCardRef, "left");
      setCard(activeCard + 1);
    } else if (width! > 1280 && activeCard === data.length - 1) {
      setCard(activeCard - 1);
      homeAnimation.sliderSection(activeCardRef, "right");
    }
  }, [width, data, activeCard]);

  //handle Clicks
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnimation(true);
    const eventTarget = e.target as Element;

    if (eventTarget.classList.contains("slider-l-arrow")) {
      homeAnimation
        .sliderSection(activeCardRef, "right")
        .then(() => setCard(activeCard - 1));
    } else if (eventTarget.classList.contains("slider-r-arrow")) {
      homeAnimation
        .sliderSection(activeCardRef, "left")
        .then(() => setCard(activeCard + 1));
    }
  };

  //Function to check if the butotn should be disabled or not

  const checkLeftButton = () => {
    if (width! > 1280 && activeCard === 1) return true;
    else if (animating) return true;
    return false;
  };

  const checkRightButton = () => {
    if (width! > 1280 && activeCard === data.length - 2) return true;
    else if (animating) return true;
    return false;
  };

  return (
    <div className="slider">
      <div className="slider-h-wrapper">
        <h1 className="slider-heading">Travel Packages</h1>
      </div>
      <div className="slider-wrapper">
        <button
          className="slider-l-arrow"
          onClick={(e) => handleClick(e)}
          disabled={activeCard === 0 ? true : checkLeftButton()}
        />
        <div className="sc-container">
          <div className="sc-wrapper">
            {data.map((card, index) => (
              <button
                ref={(el) => activeCardRef.current.push(el)}
                key={`sc-${index}`}
                className={`sc ${
                  card.index === activeCard ? "sc-active" : "sc-inactive"
                } ${
                  card.index === activeCard - 1
                    ? "sc-active-left"
                    : "sc-inactive-left"
                } ${
                  card.index === activeCard + 1
                    ? "sc-active-right"
                    : "sc-inactive-right"
                }`}
              >
                <div className="sc-img-wrapper">
                  <Image layout="fill" src={`${card.images![0]?.url}`} />
                </div>
                <div className="sc-content">
                  <div className="sc-heading">
                    <h2>{_.startCase(card.title)}</h2>
                  </div>
                  <div className="sc-body">
                    <p ref={(el) => cardBodyRef.current.push(el)}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <button
          className="slider-r-arrow"
          onClick={(e) => handleClick(e)}
          disabled={data.length - 1 === activeCard ? true : checkRightButton()}
        />
      </div>
      <button className="slider-cta">Contact Us</button>
    </div>
  );
};

export default Slider;
