/* eslint-disable jsx-a11y/anchor-is-valid */
/// <---Global Imports--->
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import ClampLines from "react-clamp-lines";

/// <---Local Imports--->
//Custom Hooks
import useWindowSize from "../src/Hooks/useWindow";

//Animations
import homeAnimation from "../src/Animations/homeAnimation";

//Styles
import styles from "styles/pages/home.module.scss";

/// <---Graphql--->
import { IsliderData } from "@/graphql/types";

const Slider: React.FC<{ data: IsliderData[] }> = ({ data }) => {
  /// <---States--->
  const [activeCard, setCard] = useState(1);
  const [animating, setAnimation] = useState(false);
  const { width } = useWindowSize();

  /// <---Refs--->
  const activeCardRef = useRef<(HTMLAnchorElement | null)[]>([]);

  /// <---Use Effects--->
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

  /// <---Handle Mouse Events--->
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

  //Function to check if the slider buttons should be disabled or not
  const checkLeftButton = () => {
    if (activeCard === 0) return true;
    else if (width! > 1280 && activeCard === 1) return true;
    return false;
  };

  const checkRightButton = () => {
    if (data.length - 1 === activeCard) return true;
    else if (width! > 1280 && activeCard === data.length - 2) return true;
    return false;
  };

  return (
    <div className={`${styles.slider} ${styles.container}`}>
      <div className={styles["slider-h-wrapper"]}>
        <h1 className={styles["slider-heading"]}>Travel Packages</h1>
      </div>
      <div className={styles["slider-wrapper"]}>
        <button
          className={`${styles["slider-l-arrow"]} ${
            checkLeftButton() ? styles["disabled-btn"] : ""
          }`}
          onClick={(e) => handleClick(e)}
          disabled={checkLeftButton()}
        />
        <div className={styles["sc-container"]}>
          <div className={styles["sc-wrapper"]}>
            {data.map((card, index) => (
              <Link
                href="/packages/[name]/[packages]"
                as={card.url}
                key={`sc-${index * 9586}`}
              >
                <a
                  ref={(el) => activeCardRef.current.push(el)}
                  key={`sc-${index}`}
                  className={`${styles["sc"]} ${
                    card.index === activeCard
                      ? styles["sc-active"]
                      : styles["sc-inactive"]
                  } ${
                    card.index === activeCard - 1
                      ? styles["sc-active-left"]
                      : styles["sc-inactive-left"]
                  } ${
                    card.index === activeCard + 1
                      ? styles["sc-active-right"]
                      : styles["sc-inactive-right"]
                  }`}
                >
                  <div className={styles["sc-img-wrapper"]}>
                    <Image layout="fill" src={`${card.images![0]?.url}`} />
                  </div>
                  <div className={styles["sc-content"]}>
                    <div className={styles["sc-heading"]}>
                      <h3>{_.startCase(card.title)}</h3>
                    </div>
                    <div className={styles["sc-body"]}>
                      <ClampLines
                        id={`clamped-content-${index * 7}`}
                        text={card.description as string}
                        buttons={false}
                        lines={6}
                        innerElement="p"
                      />
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <button
          className={`${styles["slider-r-arrow"]} ${
            checkRightButton() ? styles["disabled-btn"] : ""
          }`}
          onClick={(e) => handleClick(e)}
          disabled={checkRightButton()}
        />
      </div>
      <div className={styles["slider-cta"]}>
        <Link href="/packages">
          <a className={styles["cta-btn"]}>More Packages</a>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
