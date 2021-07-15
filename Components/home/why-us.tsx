/// <---Global Imports--->
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

/// <---Local Imports--->
import { homeData } from "@/src/types/helperTypes";

//Animations
import homeAnimation from "../../src/Animations/homeAnimation";

//Styles
import styles from "styles/pages/home.module.scss";

const WhyUs: React.FC<{ data: homeData[] }> = ({ data }) => {
  // <---Refs--->
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // <---Use EFfects--->
  useEffect(() => {
    homeAnimation.slideIn_ScrollTrigger(cardRefs, cardContainerRef, {
      stagger: 0,
      delay: 0.15,
    });
  }, []);
  return (
    <div
      className={`${styles["cards-wrapper"]} ${styles["home-container"]}`}
      ref={cardContainerRef}
    >
      <div className={styles["cards-heading"]}>
        <h1>Why Travel with us?</h1>
      </div>
      <div className={styles["cards-container"]}>
        {data.map((card, index) => (
          <Card
            key={`whyUs-1-${index * 4875}`}
            data={card}
            ref={(el) => cardRefs.current.push(el)}
          />
        ))}
      </div>
      <div className={styles["cta"]}>
        <Link href="/contact">
          <button className={styles["cta-btn"]}>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};
const Card = React.forwardRef<HTMLDivElement, { data: homeData }>(
  ({ data }, ref) => {
    const cleanRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
      const dompurify = DOMPurify(window);
      cleanRef.current!.innerHTML = dompurify.sanitize(data.body);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div
        key={`${data.heading.length * 45}`}
        className={styles["card-wrapper"]}
        ref={ref}
      >
        <h2>{data.heading}</h2>
        <div className={styles["card-content"]}>
          <p
            dangerouslySetInnerHTML={{
              __html: cleanRef.current?.innerHTML as string,
            }}
            ref={cleanRef}
          />
        </div>
      </div>
    );
  }
);

export default WhyUs;
