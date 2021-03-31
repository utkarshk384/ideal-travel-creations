/// <---Global Imports--->
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

/// <---Local Imports--->
//Data
import data from "../api/home.json";

//Animations
import homeAnimation from "../../src/Animations/homeAnimation";

//Styles
import styles from "styles/pages/home.module.scss";

interface IData {
  heading: string;
  body: string;
}

const WhyUs = () => {
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
      className={`${styles.cards} ${styles.container}`}
      ref={cardContainerRef}
    >
      <div className={styles["cards-heading"]}>
        <h1>Why Travel with us?</h1>
      </div>
      <div className={styles["cards-container"]}>
        {data["why-us"].map((card, index) => (
          <Card
            key={`why-us-1-${index * 4875}`}
            data={card}
            ref={(el) => cardRefs.current.push(el)}
          />
        ))}
      </div>
      <div className={styles["cards-cta"]}>
        <Link href="/contact">
          <a href="/contact" className={styles["cta-btn"]}>
            Contact Us
          </a>
        </Link>
      </div>
    </div>
  );
};
const Card = React.forwardRef<HTMLDivElement, { data: IData }>(
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
        className={styles["cards-card"]}
        ref={ref}
      >
        <div>
          <h2>{data.heading}</h2>
        </div>
        <div>
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
