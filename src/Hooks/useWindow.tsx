import react, { useEffect, useState } from "react";
import _ from "lodash";
interface Iconfig {
  width: number | undefined;
  height: number | undefined;
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<Iconfig>({
    width: undefined,

    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize

    const handleResize = _.debounce(
      () => {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,

          height: window.innerHeight,
        });
      },
      50,
      { trailing: true }
    );

    // Add event listener

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size

    handleResize();

    // Remove event listener on cleanup

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

const breakpoints = {
  xs: 450,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
export { breakpoints };
