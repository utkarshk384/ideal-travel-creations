import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.to(targetRef.current, {
      background: "#506629",
      boxShadow: "0px 1px 2px 1px #000000",
      duration: 0.5,
    });

    ScrollTrigger.create({
      trigger: (ref as React.MutableRefObject<HTMLDivElement>)!.current,
      start: "400 350",
      end: "+=0",
      toggleActions: "play none reverse reset",
      animation: tl,
    });

    return tl;
  }
}

export { gsapAnimation as default };
export type { InavRef };
