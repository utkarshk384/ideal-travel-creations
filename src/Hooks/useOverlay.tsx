import { useEffect, useState, useContext } from "react";
import { OverlayContext } from "@/src/Contexts/overlayContext";
import useLayoutEffect from "./useIsomorphicLayoutEffect";

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
    if (overlay) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
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
