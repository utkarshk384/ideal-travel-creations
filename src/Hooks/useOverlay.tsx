import { useEffect, useState, useContext, useLayoutEffect } from "react";
import { OverlayContext } from "@/src/Contexts/overlayContext";

const useOverlay = () => {
  ///Global State
  const { overlay, setOverlay } = useContext(OverlayContext);

  ///<----States--->
  const [activeOverlay, setActiveOverlay] = useState(false);

  ///<----Use Effects--->
  useEffect(() => {
    const el = document.querySelector(".overlay");

    if (el?.classList.contains("tinted-bg")) {
      setActiveOverlay(true);
    } else {
      setActiveOverlay(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeOverlay]);

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (overlay) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [overlay]);

  useEffect(() => {
    if (overlay) {
      document.querySelector(".overlay")?.classList.add("tint-bg");
    } else {
      document.querySelector(".overlay")?.classList.remove("tint-bg");
    }
  }, [overlay]);

  return { overlay, setOverlay, activeOverlay };
};

export default useOverlay;
