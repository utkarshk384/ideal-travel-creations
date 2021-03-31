import _gsapAnimation from "./Animation";
import gsap from "gsap";

type refType = {
  BookTourRef: React.MutableRefObject<HTMLDivElement | null>;
  CustomizeTourRef: React.MutableRefObject<HTMLDivElement | null>;
};

type stateType = {
  first: boolean;
  second: boolean;
};
type setStateType = React.Dispatch<React.SetStateAction<stateType>>;

interface IState {
  active: stateType;
  setActive: setStateType;
}
type eventType = React.MouseEvent<HTMLButtonElement, MouseEvent>;

class _Animation extends _gsapAnimation {
  private tl: gsap.core.Timeline;
  private BookTourRef: HTMLDivElement;
  private CustomizeTourRef: HTMLDivElement;
  private setActive: setStateType;
  private active: stateType;

  constructor() {
    super();
    this.tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  }

  public init(refs: refType, state: IState) {
    this.BookTourRef = refs.BookTourRef.current as HTMLDivElement;
    this.CustomizeTourRef = refs.CustomizeTourRef.current as HTMLDivElement;
    this.active = state.active;
    this.setActive = state.setActive;

    gsap.set(this.CustomizeTourRef, { left: "100%" });
  }

  public slideAnimation(
    e: eventType,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    const el = e.currentTarget;
    const index = parseInt(
      el.attributes.getNamedItem("data-index")?.value as string
    );

    if (index === 1) this.toLeft(setState);
    else if (index === 2) this.toRight(setState);
  }

  private toRight(setState: React.Dispatch<React.SetStateAction<boolean>>) {
    if (!this.active.first && this.active.second) {
      setState(false);
      return;
    }

    this.tl
      .to(this.BookTourRef, {
        left: "-100%",
      })
      .to(this.CustomizeTourRef, {
        left: "0%",
        delay: -0.5,
      })
      .then(() => {
        this.setActive({ first: false, second: true });
        setState(false);
        this.active = { first: false, second: true };
      });
  }
  private toLeft(setState: React.Dispatch<React.SetStateAction<boolean>>) {
    if (this.active.first && !this.active.second) {
      setState(false);
      return;
    }

    this.tl
      .to(this.CustomizeTourRef, {
        left: "100%",
        delay: -0.5,
      })
      .to(this.BookTourRef, {
        left: "0%",
      })
      .then(() => {
        this.setActive({ first: true, second: false });
        setState(false);
        this.active = { first: true, second: false };
      });
  }
}
const Animation = new _Animation();

export { Animation as default };
