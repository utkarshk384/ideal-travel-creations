///<----Global Imports--->
import React from "react";
import NextLink from "next/link";
import Link from "@/components/Link";
import { useRouter } from "next/router";
import gsap from "gsap";

import { Transition } from "react-transition-group";

///<----Local Imports--->
import { routerIndex } from "./helperFuncs";

//Types
import type { setBooleanState, urlType } from "@/src/types/helperTypes";

//Data
import navLinks from "./NavData";

//Styles
import styles from "../../styles/layout/nav.module.scss";

interface Istates {
  menu: boolean;
  setAnimation: setBooleanState;
  setMenu: setBooleanState;
}
const Menu = React.forwardRef<HTMLUListElement, { states: Istates }>(
  (props, ref) => {
    //Router
    const router = useRouter();

    //States passed down from navbar.tsx
    const { menu, setAnimation, setMenu } = props.states;

    const endListener = (node: HTMLElement, done: () => void): void => {
      const NextEl = document.querySelector("#__next") as HTMLDivElement;
      if (menu) {
        gsap.set(NextEl, { overflow: "hidden" });
        gsap.from(node, {
          x: "100%",
          onComplete: done,
        });
      } else
        gsap.to(node, {
          x: "100%",
          onComplete: () => {
            gsap.set(NextEl, { overflow: "visible" });
            done();
          },
        });
    };

    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      childrenCount: number
    ) => {
      if (childrenCount > 0) {
        const el = e.currentTarget;

        el.classList.toggle(styles.active);

        if (el.classList.contains(styles.active)) {
          gsap.to(el, {});
        }
      } else setMenu(false);
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
        <ul className={styles["mobile-menu"]} ref={ref}>
          {navLinks.map((link, index: number) => (
            <button
              key={`navMobile-${index * 436}`}
              className={`${styles["nav__links"]} ${
                routerIndex(router.asPath) === link.index
                  ? styles["nav-active-mobile"]
                  : ""
              } ${link.children.length > 0 ? styles["with-children"] : ""}`}
              onClick={(e) => handleClick(e, link.children.length)}
            >
              {link.children.length > 0 ? (
                <>
                  {link.name}
                  <ChildLinks data={link.children} />
                </>
              ) : (
                <NextLink href={link.href}>{link.name}</NextLink>
              )}
            </button>
          ))}
        </ul>
      </Transition>
    );
  }
);

const ChildLinks: React.FC<{ data?: urlType[] }> = ({ data }) => {
  return (
    <div className={styles["mobile-children-container"]}>
      {data?.map((url, index) => (
        <Link
          key={`mobile-nav-link-1-${index * 2354}`}
          href={url?.href}
          as={url?.as}
          className={styles["mobile-children-links"]}
        >
          {url?.name}
        </Link>
      ))}
    </div>
  );
};
export default Menu;
