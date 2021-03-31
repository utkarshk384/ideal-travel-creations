///<----Global Imports--->
import React, { useEffect, useRef } from "react";
import { useNProgress } from "@tanem/react-nprogress";

///<----Local Imports--->
import { FourDots } from "@/components/Spinners-and-Loaders/Spinners";
import loaderAnimation, { AnimationType } from "@/animations/loaderAnimation";
import useWindowSize from "@/src/Hooks/useWindow";

export const LoaderOverlay: React.FC<{ isRouteChanging: boolean }> = ({
  isRouteChanging,
}) => {
  ///<----Custom Hooks--->
  //Local
  const { width } = useWindowSize(); //Get the size of the user screen

  //Global
  const { animationDuration, progress } = useNProgress({
    isAnimating: isRouteChanging,
  });

  ///<----Refs--->
  const barRef = useRef<HTMLDivElement | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const spinnerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationType | null>(null);

  ///<----Use Effects--->
  useEffect(() => {
    const Animation = loaderAnimation([barRef, spinnerRef, loaderRef]);
    animationRef.current = Animation;
  }, []); // Initiate the animation

  useEffect(() => {
    if (isRouteChanging) animationRef.current?.onRouteChangeStart();
    else animationRef.current?.onRouteChangeEnd();
  }, [isRouteChanging]);

  useEffect(() => {
    if (width! >= 1024) animationRef.current?.setSpinnerPos(false);
    else animationRef.current?.setSpinnerPos(true);
  }, [width]); //Dynamically set the top position of the spinner based on screen size.

  return (
    <>
      <style jsx global>{`
        #loader {
          position: fixed;
          top: 0;
          pointer-events: none;
          z-index: 8;
          opacity: 0;
          height: 200px;
          width: 100%;
          background: transparent;
        }

        .bar {
          background: #c39462;
          height: 3px;
          left: 0;
          margin-left: ${(-1 + progress) * 100}%;
          position: fixed;
          top: 0;
          transition: margin-left ${animationDuration}ms linear;
          width: 100%;
          z-index: 1031;
        }

        .spinner-container{
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-item: flex-end;
        }
        
        .spinner{
          position: absolute;
          right: -10%;
          height: 100px;
          width: 100px;
          margin-right: 2rem;
       }
  
        }
      `}</style>
      <div id="loader" ref={loaderRef}>
        <div className="bar" ref={barRef}></div>
        <div className="spinner-container">
          <div className="spinner" ref={spinnerRef}>
            <FourDots width={75} height={75} />
          </div>
        </div>
      </div>
    </>
  );
};
