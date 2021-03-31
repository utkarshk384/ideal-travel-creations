import _gsapAnimation from "./Animation";
import gsap from "gsap";

import styles from "styles/pages/dync-package.module.scss";

class _Animation extends _gsapAnimation {
  public init() {
    gsap.set(`.${styles.itinerary}`, {
      height: "3rem",
      filter: "opacity(60%)",
    });
  }

  public itineraryDropdown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.currentTarget as HTMLDivElement;
    const btnEl = target.children[0].children[1] as HTMLButtonElement;
    const headingEl = target.children[0].children[0]
      .children[0] as HTMLHeadElement;

    const tl = gsap.timeline({
      defaults: { duration: 0.75, ease: "power4.out" },
    });

    if (target.style.height === "3rem") {
      tl.to(target, { height: "auto", filter: "opacity(80%)" })
        .to(btnEl, {
          rotateZ: 180,
          delay: -0.75,
        })
        .set(headingEl, {
          textOverflow: "clip",
          whiteSpace: "normal",
          delay: -0.75,
        });
    } else
      tl.to(target, { height: "3rem", filter: "opacity(60%)" })
        .to(btnEl, {
          rotateZ: 0,
          delay: -0.75,
        })
        .set(headingEl, {
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          delay: -0.75,
        });
  }

  public mountAnimation(node: HTMLElement, done: () => void, state: boolean) {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", onComplete: done },
    });

    if (state) tl.from(node, { y: -100 });
    else tl.to(node, { y: -100 });
  }
}
const Animation = new _Animation();

export { Animation as default };
