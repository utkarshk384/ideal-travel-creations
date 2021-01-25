import React, { useContext, useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./MobileMenu";
import { NavigationContext } from "../../src/Context/NavigationContext";
import navLinks from "./NavData";
import useWindowSize from "../../src/Hooks/useWindow";

import gsapAnimation, { InavRef } from "./_animation";

const Nav = React.forwardRef<HTMLDivElement, { className?: string }>(
  (props, ref) => {
    //Navigation Context
    const { selectedIndex, setIndex } = useContext(NavigationContext);

    //Local States
    const [menu, setMenu] = useState<boolean>(false);
    const [animating, setAnimation] = useState<boolean>(false);

    //Custom Hooks
    const size = useWindowSize();

    //Use Refs
    const burgerIconRef = useRef<HTMLDivElement>(null);
    const navigationLinkRef = useRef<InavRef>({ prevRef: null, currRef: null });
    const navWrapperRef = useRef<HTMLDivElement>(null);

    //Handle Refs
    const handleNavRef = (el: HTMLLIElement): void => {
      navLinks.forEach((link) => {
        if (selectedIndex === link.index) {
          navigationLinkRef.current.prevRef = navigationLinkRef.current.currRef;
        }
        navigationLinkRef.current.currRef = el;
      });
    };

    //useEffects

    useEffect(() => {
      let gsapAnim = new gsapAnimation();
      gsapAnim.stickyNavbar(ref, navWrapperRef);
    }, []);

    useEffect((): void => {
      if (menu) {
        burgerIconRef.current!.classList.add("open");
        return;
      }
      burgerIconRef.current!.classList.remove("open");
    }, [menu]);

    return (
      <nav className={props.className || "nav"} ref={navWrapperRef}>
        <div className="nav-container">
          <div>
            <Image
              src="/images/logo/ideal-logo-white.png"
              width={215}
              height={85}
              layout="fixed"
            />
          </div>
          {/*eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <button
            className="nav-burger-icon"
            onClick={() => {
              setMenu(!menu);
              setAnimation(true);
            }}
            disabled={animating}
          >
            <div className="nav-burger__btn" ref={burgerIconRef} />
          </button>

          {size.width! <= 1024 && (
            <Menu
              states={{ menu, setAnimation, setMenu }}
              handleRef={handleNavRef}
            />
          )}

          <ul className="nav-ul">
            {navLinks.map((link, index: number) => (
              <li
                key={`navLinks-${index}`}
                className="nav-links "
                ref={handleNavRef}
              >
                <button
                  onClick={() => setIndex(link.index)}
                  className={`${
                    selectedIndex === link.index ? "nav-active" : ""
                  }`}
                >
                  <Link href={link.href}>{link.name}</Link>
                  <span />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
);

export default Nav;
