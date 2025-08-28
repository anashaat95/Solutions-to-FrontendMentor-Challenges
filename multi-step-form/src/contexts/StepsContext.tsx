import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface StepsContextType {
  curStep: number;
  setCurStep: Dispatch<SetStateAction<number>>;
}

const defaultValue: StepsContextType = {
  curStep: 1,
  setCurStep: () => {}, // placeholder function
};

const StepsContext = createContext<StepsContextType>(defaultValue);
export const useStepsContext = (): StepsContextType => {
  const ctx = useContext(StepsContext);
  if (ctx === undefined) throw new Error("You are using the StepsContext outside its Provider");
  return ctx;
};

export const StepsContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [curStep, setCurStep] = useState(1);

  return <StepsContext.Provider value={{ curStep, setCurStep }}>{children}</StepsContext.Provider>;
};

export default StepsContext;
