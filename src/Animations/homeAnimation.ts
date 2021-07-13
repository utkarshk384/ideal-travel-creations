import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import _gsapAnimation from "./Animation";
import type { targetRefType } from "./Animation";

gsap.registerPlugin(ScrollTrigger);

type paramsType = {
  cardWidth: number;
  sliderWidth: number;
  isExtraSmall: boolean;
};

class _Animation extends _gsapAnimation {
  private sliderWidth: number;
  private cardWidth: number;
  private screenOffset: number = 70;
  // If true,
  //then the transitions and width will be set with an offset of -70px because in smaller screens the default values seems to overflow from the main container
  private ref: React.MutableRefObject<HTMLDivElement | null>;

  public init(
    ref: React.MutableRefObject<HTMLDivElement | null>,
    css: paramsType
  ) {
    this.ref = ref;
    this.updateVal({
      cardWidth: css.cardWidth,
      sliderWidth: css.sliderWidth,
      isExtraSmall: css.isExtraSmall,
    });
  }

  public updateVal(params: paramsType) {
    console.log("Before", this.cardWidth);
    this.sliderWidth = params.sliderWidth * 16;
    this.cardWidth = params.cardWidth * 16;

    const offset = params.isExtraSmall ? this.screenOffset : 0;

    gsap.set(this.ref.current, { width: this.sliderWidth });
    gsap.set(this.ref.current!.children as HTMLCollection, {
      // width: this.cardWidth,
      x: (i) => i * (this.cardWidth + 80) - offset,
    });
    console.log(this.cardWidth);
  }

  public sliderSection(
    activeRefs: React.MutableRefObject<HTMLDivElement | null>,
    event: string
  ) {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    tl.to(activeRefs.current?.children as HTMLCollection, {
      x: (i, target) => {
        const offset =
          event === "left" ? this.cardWidth + 80 : -this.cardWidth - 80;
        return (gsap.getProperty(target, "x") as number) + offset;
      },
      modifiers: {
        x: gsap.utils.unitize((x) =>
          gsap.utils.wrap(
            -this.cardWidth - 80,
            (this.cardWidth + 80) * 4,
            parseInt(x)
          )
        ),
      },
    });

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
      markers: false,
      ...scrollConfig,
    });
    return scrollTrigger;
  }
}

const Animation = new _Animation();

export { Animation as default };
