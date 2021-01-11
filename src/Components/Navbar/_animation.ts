import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ForwardedRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface InavRef {
  prevRef: HTMLLIElement | null;
  currRef: HTMLLIElement | null;
}

class gsapAnimation {
  public stickyNavbar(
    ref: React.ForwardedRef<HTMLDivElement>,
    targetRef: React.RefObject<HTMLDivElement>
  ) {
    const tl = gsap.timeline();
    tl.to(targetRef.current, {
      scrollTrigger: {
        trigger: ref!.current,
        markers: true,
        start: "400 center",
        end: "+=0",
        toggleActions: "play none reverse none",
      },
      background: "#547a13",
      boxShadow: "0px 1px 2px 1px #000000",
      ease: "power2.in",
    });

    return tl;
  }
}

export { gsapAnimation as default };
export type { InavRef };
