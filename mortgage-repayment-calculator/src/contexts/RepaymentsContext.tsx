import { createContext, useContext, useState } from "react";
import MortgageCalculator from "../helpers/MortgageCalculator";
import { eMortgageType } from "../types/formTypes";

type repaymentsStateObj = {
  amount: number;
  term: number;
  rate: number;
  type: eMortgageType;
};

type repaymentsContextTypes = {
  setRepaymentValues: (obj: repaymentsStateObj) => void;
  monthlyRepayment: string;
  termPayment: string;
};

const defaults = {
  setRepaymentValues: () => {},
  monthlyRepayment: "0",
  termPayment: "0",
};

const RepaymentsContext = createContext<repaymentsContextTypes>(defaults);

const RepaymentsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [repaymentValues, setRepaymentValues] = useState<repaymentsStateObj>();

  const monthlyRepayment = MortgageCalculator.monthlyRepayment(
    repaymentValues?.amount || 0,
    repaymentValues?.term || 0,
    repaymentValues?.rate || 0,
    repaymentValues?.type || eMortgageType.none
  );

  const termPayment = MortgageCalculator.totalRepay(
    repaymentValues?.amount || 0,
    repaymentValues?.term || 0,
    repaymentValues?.rate || 0,
    repaymentValues?.type || eMortgageType.none
  );

  return <RepaymentsContext.Provider value={{ monthlyRepayment, termPayment, setRepaymentValues }}>{children}</RepaymentsContext.Provider>;
};

export const useRepaymentsContext = (): repaymentsContextTypes => {
  const ctx = useContext(RepaymentsContext);
  if (ctx === undefined) throw new Error("You are using the RepaymentContext outside its provider");
  return ctx;
};

export default RepaymentsContextProvider;
