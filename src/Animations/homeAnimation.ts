import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import _gsapAnimation from "./Animation";
import type { targetRefType } from "./Animation";

gsap.registerPlugin(ScrollTrigger);

class _Animation extends _gsapAnimation {
  public sliderSection(
    activeRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>,
    event: string
  ) {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });
    if (event === "left")
      tl.to(activeRefs.current, { css: { left: "-=125%" } });
    else if (event === "right")
      tl.to(activeRefs.current, { css: { left: "+=125%" } });

    return tl;
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

const Animation = new _Animation();

export { Animation as default };
