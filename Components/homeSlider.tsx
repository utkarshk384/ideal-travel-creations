/* eslint-disable jsx-a11y/anchor-is-valid */
/// <---Global Imports--->
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Clamp from "react-multiline-clamp";

/// <---Local Imports--->
//Custom Hooks
import useWindowSize, { breakpoints } from "../src/Hooks/useWindow";

//Animations
import homeAnimation from "../src/Animations/homeAnimation";

//Styles
import styles from "styles/pages/home.module.scss";

//Types
import { ISliderData } from "@/src/helperTypes";
import Utilities from "@/src/utils";

const Slider: React.FC<{ data: ISliderData[] }> = ({ data }) => {
  /// <---States--->
  const [activeCard, setCard] = useState(1);
  const [animating, setAnimation] = useState(false);
  const { width } = useWindowSize();

  /// <---Refs--->
  const activeCardRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  /// <---Use Effects--->
  useEffect(() => {
    if (width! >= breakpoints.lg)
      homeAnimation.init(carouselRef, {
        cardWidth: 20,
        sliderWidth: 70,
        isExtraSmall: false,
      });
    else
      homeAnimation.init(carouselRef, {
        cardWidth: 20,
        sliderWidth: 70,
        isExtraSmall: true,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAnimation(false);
  }, [activeCard]);

  useEffect(() => {
    let sliderWidth = 70;
    let cardWidth = 20;
    let isXS = false;
    if (width! <= breakpoints.lg) {
      sliderWidth = 30;
      if (width! <= breakpoints.xs) isXS = true;
    }
    homeAnimation.updateVal({ sliderWidth, cardWidth, isExtraSmall: isXS });
  }, [width]);

  /// <---Handle Mouse Events--->
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnimation(true);
    const eventTarget = e.currentTarget;

    if (eventTarget.classList.contains(styles["slider-l-arrow"])) {
      homeAnimation.sliderSection(carouselRef, "left").then(() =>
        setCard(() => {
          if (activeCard === 0) return data.length - 1;
          return activeCard - 1;
        })
      );
    } else if (eventTarget.classList.contains(styles["slider-r-arrow"])) {
      homeAnimation.sliderSection(carouselRef, "right").then(() =>
        setCard(() => {
          if (activeCard === data.length - 1) return 0;
          return activeCard + 1;
        })
      );
    }
  };

  return (
    <div className={`${styles.slider} ${styles["home-container"]}`}>
      <div className={styles["slider-h-wrapper"]}>
        <h1>Travel Packages</h1>
      </div>
      <div className={styles["sc-container"]}>
        <div className={styles["sc-wrapper"]} ref={carouselRef}>
          {data?.map((card, index) => (
            <Link
              href="/packages/[name]/[packages]"
              as={card.url}
              key={`sc-${index * 9586}`}
            >
              <a
                ref={(el) => activeCardRef.current.push(el)}
                key={`sc-${index}`}
                className={`${styles["sc"]} ${
                  card.index === activeCard ? styles["sc-active"] : ""
                } `}
              >
                <div className={styles["sc-img-wrapper"]}>
                  {/* PROD: Change the image location  */}
                  {/* <Image
                    layout="intrinsic"
                    height={card.images?.[0]?.height}
                    width={card.images?.[0]?.width}
                    objectFit="contain"
                    src={`${card.images?.[0]?.url}`}
                  /> */}
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src={"/images/travel-packages/Happiness-Travel.jpg"}
                  />
                </div>
                <div className={styles["sc-content"]}>
                  <div className={styles["sc-heading"]}>
                    <h3>{Utilities.startCase(card.title)}</h3>
                  </div>
                  <div className={styles["sc-body"]}>
                    <Clamp lines={5}>
                      <p>{card.description}</p>
                    </Clamp>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles["slider-controls"]}>
        <button
          className={`${styles["slider-l-arrow"]}`}
          onClick={(e) => handleClick(e)}
          disabled={animating}
        />
        <button
          className={`${styles["slider-r-arrow"]} `}
          onClick={(e) => handleClick(e)}
          disabled={animating}
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
