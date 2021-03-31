import { useState, useRef, useEffect, useLayoutEffect } from "react";

const useLockBodyScroll = () => {
  const [locked, setLock] = useState(false);
  const originalStyleRef = useRef<string>("");

  useEffect(() => {
    // Get original body overflow
    originalStyleRef.current = window.getComputedStyle(document.body).overflow;

    // Prevent scrolling on mount
    if (locked) document.body.style.overflow = "hidden";

    // Re-enable scrolling when component unmounts
  }, [locked]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = originalStyleRef.current;
    };
  }); // To ensure that the effect is reversed on unmount

  return { locked, setLock };
};

export default useLockBodyScroll;
