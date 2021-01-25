/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext } from "react";
import gsap from "gsap";
import { Transition } from "react-transition-group";
import Link from "next/link";

import { NavigationContext } from "../../src/Context/NavigationContext";
import navLinks from "./NavData";

interface Istates {
  menu: boolean;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<{
  states: Istates;
  handleRef: (el: HTMLLIElement) => void;
}> = (props) => {
  const { selectedIndex, setIndex } = useContext(NavigationContext);

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
      <ul className="mobile-menu">
        {navLinks.map((link, index: number) => (
          <li
            key={`navMobile-${index}`}
            className={`nav__links ${
              selectedIndex === link.index ? "nav-active-mobile" : ""
            }`}
            ref={props.handleRef}
          >
            {/* To DO: Make the menu disappear when a option is clicked */}
            <button
              onClick={() => {
                setIndex(link.index);
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
