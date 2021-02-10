import { MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SpanHeading_ArrayType = React.MutableRefObject<
  (HTMLSpanElement | HTMLHeadingElement | null)[]
>;

type refType = MutableRefObject<(HTMLDivElement | HTMLButtonElement | null)[]>;
type targetRefType = MutableRefObject<HTMLDivElement | null>;

export default abstract class _gsapAnimation {
  public slideIn(ref: SpanHeading_ArrayType, delay: number = 1) {
    const tl = gsap.timeline();

    tl.from(ref.current, {
      y: 100,
      opacity: 0,
      stagger: { amount: 1 },
      delay,
    });

    return tl;
  }

  public slideIn_ScrollTrigger<
    T extends refType,
    K extends targetRefType,
    J extends gsap.TweenVars,
    L extends gsap.plugins.ScrollTriggerStaticVars
  >(ref: T, targetRef: K, config?: J, triggerConfig?: L) {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from(ref.current, {
      stagger: { amount: 0.75 },
      y: 25,
      opacity: 0,
      ...config,
    });

    ScrollTrigger.create({
      trigger: targetRef.current as HTMLDivElement,
      toggleActions: "play none complete reset",
      start: "-30% 65%",
      animation: tl,
      ...triggerConfig,
    });
  }

  public parallexSection(
    ref: string,
    targetRef: targetRefType,
    scrollConfig?: gsap.plugins.ScrollTriggerStaticVars
  ) {
    const tl = gsap.timeline();

    gsap.set(ref, {
      css: { height: "auto", maxHeight: "inherit" },
    });

    tl.to(ref, {
      yPercent: 50,
      ease: "none",
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetRef.current as HTMLDivElement,
      toggleActions: "play none complete reset",
      start: "-50% 65%",
      end: "+=80%",
      animation: tl,
      scrub: true,
      ...scrollConfig,
    });
    return scrollTrigger;
  }
}
