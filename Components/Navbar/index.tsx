import React, { useState, useRef, useEffect, useReducer } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "react-transition-group";

import Menu from "./MobileMenu";
import navLinks from "./NavData";
import useWindowSize from "../../src/Hooks/useWindow";

import gsapAnimation from "./_animation";
import _, { uniqueId } from "lodash";
import useHideNav from "../../src/Hooks/useHideNav";
import hoverReducer from "../../src/reducers/hoverReducer";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useRouter } from "next/router";
import { routerIndex } from "src/helperFuncs";

import type {
  hovActionTypes,
  hovState,
  IHoverState,
} from "../../src/reducers/hoverReducer";

import styles from "styles/components/nav.module.scss";

interface IChildLinks {
  name: string;
  href: string;
  as: string;
}

const hovIniState: IHoverState = {
  packages: { parent: false, menu: false },
  aboutBhutan: { parent: false, menu: false },
};

const Nav = React.forwardRef<
  HTMLDivElement,
  { className?: string; disableAnimation?: boolean; routerHistory?: string[] }
>((props, ref) => {
  //Router
  const router = useRouter();

  //Local States
  const [menu, setMenu] = useState<boolean>(false);
  const [animating, setAnimation] = useState<boolean>(false);

  const [hover, hovDispatch] = useReducer(hoverReducer, hovIniState);
  //Custom Hooks
  const size = useWindowSize();
  const visible = useHideNav();

  //Use Refs
  const burgerIconRef = useRef<HTMLDivElement>(null);
  const navWrapperRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLSpanElement[]>([]);

  //handle MouseEvents

  const onHover = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const el = e.currentTarget;

    const dataName = el.attributes["data-name" as any];

    if (dataName.nodeValue === "Packages")
      hovDispatch({ type: "parent-package-active" });
    else if (dataName.nodeValue === "About Bhutan")
      hovDispatch({ type: "parent-aboutBhutan-active" });
    else return;
  };

  //useEffects

  useEffect(() => {
    if (!visible) {
      hovDispatch({ type: "both-aboutBhutan" });
      hovDispatch({ type: "both-packages" });
    }
  }, [visible]);

  useEffect(() => {
    if (!props.disableAnimation) {
      let gsapAnim = new gsapAnimation();
      gsapAnim.stickyNavbar(ref, navWrapperRef);
    } else {
      navWrapperRef.current?.classList.add(styles["nav-bg"]);
    }
  }, [props.disableAnimation, ref]);

  useEffect((): void => {
    if (menu) {
      burgerIconRef.current!.classList.add(styles.open);
      disableBodyScroll(
        (document.getElementsByTagName("body") as unknown) as Element
      );
      return;
    }
    burgerIconRef.current!.classList.remove(styles.open);
    enableBodyScroll(
      (document.getElementsByTagName("body") as unknown) as Element
    );
  }, [menu]);

  return (
    <nav
      className={styles[`${props.className}`] || styles.nav}
      ref={navWrapperRef}
      style={{ top: visible ? "0" : "-100px" }}
    >
      <div className={styles["nav-container"]}>
        <button
          className={styles["nav-burger-icon"]}
          onClick={() => {
            setMenu(!menu);
            setAnimation(true);
          }}
          disabled={animating}
        >
          <div className={styles["nav-burger__btn"]} ref={burgerIconRef} />
        </button>
        <div>
          <Link href="/">
            <Image
              src="/images/logo/ideal-logo-white.png"
              width={215}
              height={85}
              layout="fixed"
            />
          </Link>
        </div>

        {size.width! <= 1024 && (
          <Menu states={{ menu, setAnimation, setMenu }} />
        )}

        <ul className={styles["nav-ul"]}>
          <HoverMenu
            data={navLinks[1].children}
            states={{ state: hover.packages, dispatch: hovDispatch }}
            name={navLinks[1].name}
          />
          <HoverMenu
            data={navLinks[2]?.children}
            states={{ state: hover.aboutBhutan, dispatch: hovDispatch }}
            name={navLinks[2].name}
          />
          {navLinks.map((link) => (
            <button
              key={uniqueId(`nav-links-${new Date().getUTCDate()}`)}
              data-name={link.name}
              className={styles["nav-links"]}
              onMouseEnter={(e) => onHover(e)}
            >
              <span
                ref={(el) => navItemsRef.current.push(el as HTMLSpanElement)}
                className={`${styles["nav-span"]} ${
                  routerIndex(router.asPath) === link.index
                    ? styles["nav-active"]
                    : ""
                }`}
              >
                <Link href={link.href}>{link.name}</Link>
              </span>
            </button>
          ))}
        </ul>
      </div>
    </nav>
  );
});

const HoverMenu: React.FC<{
  data?: IChildLinks[];
  states: {
    state: hovState;
    dispatch: React.Dispatch<hovActionTypes>;
  };
  name: string;
}> = ({ data, states, name }) => {
  const endListener = (node: HTMLElement, done: () => void) => {
    const tl = gsap.timeline();
    if (tl.isActive()) tl.kill();

    if (states.state.parent || states.state.menu)
      tl.from(node, { x: "-10%", opacity: 0, onComplete: done });
    else
      tl.to(node, { x: "-10%", opacity: 0, duration: 0.2, onComplete: done });
  };

  const onLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = e.currentTarget;

    const dataName = el.attributes["data-name" as any];

    if (dataName.nodeValue === "Packages")
      states.dispatch({ type: "both-packages" });
    else if (dataName.nodeValue === "About Bhutan")
      states.dispatch({ type: "both-aboutBhutan" });
    else return;
  };

  const onMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = e.currentTarget;
    const dataName = el.attributes["data-name" as any];

    if (dataName.nodeValue === "Packages")
      states.dispatch({ type: "menu-package-active" });
    else if (dataName.nodeValue === "About Bhutan")
      states.dispatch({ type: "menu-aboutBhutan-active" });
    else return;
  };

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={states.state.parent}
      timeout={1000}
      addEndListener={endListener}
    >
      <div
        className={`${styles["nav-hover-menu"]} ${
          styles[`hov-${_.kebabCase(name)}`]
        }`}
        onMouseLeave={(e) => onLeave(e)}
        onMouseEnter={(e) => onMouseOver(e)}
        data-name={name}
      >
        <div className={styles["push-content"]} />

        <div className={styles.content}>
          {data?.map((childLink) => (
            <Link
              key={uniqueId(`${new Date().getUTCDate()}`)}
              href={childLink?.href as string}
              as={childLink?.as}
            >
              {childLink?.name}
            </Link>
          ))}
        </div>
      </div>
    </Transition>
  );
};

export default Nav;
