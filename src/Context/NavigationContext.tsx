import { useState, createContext, Dispatch, SetStateAction } from "react";

export interface InavContext {
  selectedIndex: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

const NavigationContext = createContext<InavContext>({
  selectedIndex: 0,
  setIndex: (index) => index,
});

const NavigationProvider: React.FC = ({ children }) => {
  const [selectedIndex, setIndex] = useState(0);
  const value = { selectedIndex, setIndex };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider, NavigationContext };
