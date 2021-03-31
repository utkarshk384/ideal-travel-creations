import gsap from "gsap";

import _gsapAnimation from "./Animation";

type elType = React.MutableRefObject<HTMLDivElement | null>;

class _Animation extends _gsapAnimation {
  private tl: gsap.core.Timeline;
  private bar: HTMLDivElement;
  private spinner: HTMLDivElement;
  private loader: HTMLDivElement;

  constructor(ref: elType[]) {
    super();
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });
    this.tl = tl;
    this.bar = ref[0].current as HTMLDivElement;
    this.spinner = ref[1].current as HTMLDivElement;
    this.loader = ref[2].current as HTMLDivElement;
  }

  public onRouteChangeStart() {
    this.tl
      .set(this.loader, { opacity: 1 })
      .to(this.bar, {
        opacity: 1,
        duration: 1,
      })
      .to(this.spinner, { right: "0", delay: -0.5, duration: 0.75 });
  }
  public onRouteChangeEnd() {
    this.tl
      .to(this.bar, {
        opacity: 0,
        duration: 1,
      })
      .to(this.spinner, { right: "-9rem", delay: -0.5, duration: 1 })
      .set(this.loader, { opacity: 0 });
  }

  public setSpinnerPos(isMobile: boolean) {
    if (isMobile) {
      gsap.set(this.spinner, { top: "40%" });
    } else {
      gsap.set(this.spinner, { top: "0%" });
    }
  }
}

const Animation = (ref: elType[]) => {
  return new _Animation(ref);
};
export default Animation;

type AnimationType = _Animation;

export type { AnimationType };
