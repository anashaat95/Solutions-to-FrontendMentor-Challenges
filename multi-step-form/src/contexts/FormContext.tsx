import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { ePlan } from "../components/types/formTypes";

export interface FormContextType {
  name: string;
  email: string;
  phone: string;
  plan: ePlan;
  isYearly: boolean;
  isOnlineService: boolean;
  isLargerStorage: boolean;
  isCustomizableProfile: boolean;
  setFormValues: Dispatch<SetStateAction<FormContextType>>;
}

const defaultValue: FormContextType = {
  name: "",
  email: "",
  phone: "",
  plan: ePlan.arcade,
  isYearly: false,
  isOnlineService: false,
  isLargerStorage: false,
  isCustomizableProfile: false,
  setFormValues: () => {},
};

const FormContext = createContext<FormContextType>(defaultValue);

export const FormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formValues, setFormValues] = useState<FormContextType>(defaultValue);

  return <FormContext.Provider value={{ ...formValues, setFormValues }}>{children}</FormContext.Provider>;
};

export default FormContext;
