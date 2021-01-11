import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin);

interface InavRef {
  prevRef: HTMLLIElement | null;
  currRef: HTMLLIElement | null;
}

class gsapAnimation {
  private navRef: React.MutableRefObject<InavRef> | null;
  constructor() {
    this.navRef = null;
  }

  // public initialAnimation(): void {
  //   const tl = gsap.timeline();
  // }

  public navLinkAnim(navRef: React.MutableRefObject<InavRef>): void {
    this.navRef = navRef;
    const { prevRef, currRef } = this.navRef.current;
    const tl = gsap.timeline();

    console.log(prevRef, currRef);

    if (prevRef) tl.to(CSSRulePlugin.getRule(`${prevRef}::after`), { cssRule: { left: '55px' } });
    tl.from(CSSRulePlugin.getRule(`${currRef}::after`), { cssRule: { right: '55px' } });

    // if (prevRef) tl.to(prevRef, { left: '55px' });
    // tl.from(currRef, { right: '55px' });
  }
}

export default gsapAnimation;
