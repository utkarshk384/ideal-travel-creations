/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext } from "react";
import gsap from "gsap";
import { Transition } from "react-transition-group";
import Link from "next/link";

import { routerIndex } from "../../src/helperFuncs";
import navLinks from "./NavData";
import { useRouter } from "next/router";

import styles from "styles/components/nav.module.scss";

interface Istates {
  menu: boolean;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<{
  states: Istates;
}> = (props) => {
  //router
  const router = useRouter();

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
            key={`navMobile-${index}`}
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
