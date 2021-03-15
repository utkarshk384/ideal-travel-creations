import react, { useEffect, useState } from "react";
import _ from "lodash";

const useHideNav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = _.debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return visible;
};

export default useHideNav;
