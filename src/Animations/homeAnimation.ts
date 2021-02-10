import _gsapAnimation from "./Animation";
import gsap from "gsap";

class _homeAnimation extends _gsapAnimation {
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
}

const homeAnimation = new _homeAnimation();

export { homeAnimation as default };
