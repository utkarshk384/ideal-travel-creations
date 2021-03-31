import React, { createContext, useState } from "react";

interface IContext {
  overlay: boolean;
  setOverlay?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OverlayContext = createContext<IContext>({ overlay: false });

const OverlayProvider: React.FC = (props) => {
  const [overlay, setOverlay] = useState(false);

  return (
    <OverlayContext.Provider value={{ overlay, setOverlay }}>
      {props.children}
    </OverlayContext.Provider>
  );
};

export default OverlayProvider;
