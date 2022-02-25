///<----Global Imports--->
import React, { useState, useRef, useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import Link from "@/components/Link";
import gsap from "gsap";
import _ from "lodash";
import { Transition } from "react-transition-group";

///<----Local Imports--->

import { routerIndex } from "./helperFuncs";

import Image from "next/image";

//Data
import Menu from "./MobileMenu";
import navLinks from "./NavData";

//Custom hooks
import useWindowSize from "../../src/Hooks/useWindow";
import useHideNav from "../../src/Hooks/useHideNav";

//Animations
import gsapAnimation from "../../src/Animations/navAnimation";

//Reducer functions
import hoverReducer from "../../src/reducers/hoverReducer";

//Styles
import styles from "styles/layout/nav.module.scss";

//Imported Types
import type {
  hovActionTypes,
  hovState,
  IHoverState,
} from "../../src/reducers/hoverReducer";
import type { urlType } from "@/src/types/helperTypes";
import useOverlay from "@/src/Hooks/useOverlay";

interface IProps {
  className?: string;
  disableAnimation?: boolean;
  routerHistory?: string[];
}

const hovIniState: IHoverState = {
  packages: { parent: false, menu: false },
  aboutBhutan: { parent: false, menu: false },
};

const Nav = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  //Router
  const router = useRouter();

  ///<----Local States--->
  const [menu, setMenu] = useState<boolean>(false);
  const [animating, setAnimation] = useState<boolean>(false);

  ///<----Global States--->
  const [hover, hovDispatch] = useReducer(hoverReducer, hovIniState);

  ///<----Custom hooks--->
  const size = useWindowSize(); //Listens for the resize of browser window
  const visible = useHideNav(menu); // Listens for the scroll event to hide the navbar accordingly.
  const { activeOverlay } = useOverlay();

  ///<----Refs--->
  const burgerIconRef = useRef<HTMLDivElement>(null);
  const navWrapperRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLSpanElement[]>([]);
  const menuRef = useRef<HTMLUListElement | null>(null);

  ///<----Handle MouseEvents--->
  const onHover = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const el = e.currentTarget;
    const dataName = el.attributes["data-name" as any];

    if (dataName.nodeValue === "Packages")
      hovDispatch({ type: "parent-package-active" });
    else if (dataName.nodeValue === "About Bhutan")
      hovDispatch({ type: "parent-aboutBhutan-active" });
    else return;
  };

  ///<----Use Effects--->

  useEffect(() => {
    setMenu(false);
  }, [size.width]);

  useEffect(() => {
    if (!visible) {
      hovDispatch({ type: "both-aboutBhutan" });
      hovDispatch({ type: "both-packages" });
    }
  }, [visible]); // Hides the hover menus if navbar is hidden.

  useEffect(() => {
    if (!props.disableAnimation) {
      let gsapAnim = new gsapAnimation();
      gsapAnim.changeNavColor(ref, navWrapperRef);
    } else {
      navWrapperRef.current?.classList.add(styles["nav-bg"]);
    }
  }, [props.disableAnimation, ref]); // If page !=home then the navbar background is set.
  useEffect(() => {
    if (menu) {
      burgerIconRef.current!.classList.add(styles.open);
      return;
    }
    burgerIconRef.current!.classList.remove(styles.open);
  }, [menu]);
  return (
    <nav
      className={`${styles.nav} ${props.className || ""} `}
      ref={navWrapperRef}
      style={{
        top: visible ? "0" : "-100px",
        position: menu ? "fixed" : "sticky",
      }}
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
        <div style={{ cursor: "pointer" }}>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/ideal-travel-creations/image/upload/v1629189611/ideal-logo-white_a26brg.png"
              width={225}
              height={95}
              layout="fixed"
            />
          </Link>
        </div>

        {size.width! <= 1024 && (
          <Menu states={{ menu, setAnimation, setMenu }} ref={menuRef} />
        )}

        <ul className={styles["nav-ul"]}>
          <HoverMenu
            data={navLinks[2]?.children}
            states={{ state: hover.aboutBhutan, dispatch: hovDispatch }}
            name={navLinks[2].name}
          />
          <HoverMenu
            data={navLinks[1].children}
            states={{ state: hover.packages, dispatch: hovDispatch }}
            name={navLinks[1].name}
          />
          {navLinks.map((link, index) => (
            <button
              key={`nav-links-s-${index * 213}`}
              data-name={link.name}
              className={styles["nav-links"]}
              onMouseEnter={activeOverlay ? () => {} : (e) => onHover(e)}
            >
              <span
                ref={(el) => navItemsRef.current.push(el as HTMLSpanElement)}
                className={`${styles["nav-span"]} ${
                  routerIndex(router?.asPath) === link.index
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
  data?: urlType[];
  states: {
    state: hovState;
    dispatch: React.Dispatch<hovActionTypes>;
  };
  name: string;
}> = ({ data, states, name }) => {
  //Animation function for the RTG Transistion component.
  const endListener = (node: HTMLElement, done: () => void) => {
    const tl = gsap.timeline();
    if (tl.isActive()) tl.kill();

    if (states.state.parent || states.state.menu)
      tl.from(node, { x: "-10%", opacity: 0, onComplete: done });
    else
      tl.to(node, { x: "-10%", opacity: 0, duration: 0.2, onComplete: done });
  };

  ///<----Handle Mouse Events--->
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
        role="button"
        tabIndex={0}
        className={`${styles["nav-hover-menu"]} ${
          styles[`hov-${_.kebabCase(name)}`]
        }`}
        onMouseLeave={(e) => onLeave(e)}
        onMouseEnter={(e) => onMouseOver(e)}
        data-name={name}
      >
        <div className={styles["push-content"]} />

        <div className={styles.content}>
          {data?.map((childLink, index) => (
            <Link
              key={`child-links-s=${index * 123}`}
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
