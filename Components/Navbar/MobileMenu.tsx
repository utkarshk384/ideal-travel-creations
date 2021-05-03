///<----Global Imports--->
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import gsap from "gsap";
import { Transition } from "react-transition-group";

///<----Local Imports--->
import { routerIndex } from "./helperFuncs";

//Types
import type { setBooleanState, urlType } from "@/src/helperTypes";

//Data
import navLinks from "./NavData";

//Styles
import styles from "../../styles/components/nav.module.scss";

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

    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      childrenCount: number
    ) => {
      if (childrenCount > 0) {
        e.currentTarget.children[0].classList.toggle("active");
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
                <Link href={link.href}>{link.name}</Link>
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
        >
          <a href={url?.href} className={styles["mobile-children-links"]}>
            {url?.name}
          </a>
        </Link>
      ))}
    </div>
  );
};
export default Menu;
