///<----Global Imports--->
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import gsap from "gsap";
import { Transition } from "react-transition-group";

///<----Local Imports--->
import { routerIndex } from "./helperFuncs";

//Types
import type { setBooleanState } from "@/src/helperTypes";

//Data
import navLinks from "./NavData";

//Styles
import styles from "styles/components/nav.module.scss";

interface Istates {
  menu: boolean;
  setAnimation: setBooleanState;
  setMenu: setBooleanState;
}

const Menu: React.FC<{
  states: Istates;
}> = (props) => {
  //Router
  const router = useRouter();

  //States passed down from navbar.tsx
  const { menu, setAnimation, setMenu } = props.states;

  const endListener = (node: HTMLElement, done: () => void): void => {
    if (menu)
      gsap.from(node, {
        x: "100%",
        onComplete: done,
      });
    else
      gsap.to(node, {
        x: "100%",
        onComplete: done,
      });
  };

  return (
    <Transition
      in={menu}
      mountOnEnter
      unmountOnExit
      timeout={1000}
      addEndListener={endListener}
      onEntered={() => setAnimation(false)}
      onExited={() => setAnimation(false)}
    >
      <ul className={styles["mobile-menu"]}>
        {navLinks.map((link, index: number) => (
          <li
            key={`navMobile-${index * 436}`}
            className={`${styles["nav__links"]} ${
              routerIndex(router.asPath) === link.index
                ? styles["nav-active-mobile"]
                : ""
            }`}
          >
            {/* To DO: Make the menu disappear when a option is clicked */}
            <button
              onClick={() => {
                setMenu(false);
              }}
            >
              <Link href={link.href}>{link.name}</Link>
            </button>
          </li>
        ))}
      </ul>
    </Transition>
  );
};

export default Menu;
