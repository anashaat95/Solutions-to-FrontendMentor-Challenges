import { eMortgageType } from "../types/formTypes.ts";

class MortgageCalculator {
  public static monthlyRepayment = (amount: number, term: number, rate: number, type: eMortgageType): string => {
    if (type === eMortgageType.none) return "0";
    const monthlyRate = rate / 100 / 12;
    const months = term * 12;

    if (+type === +eMortgageType.interest) {
      return (amount * monthlyRate).toFixed(2);
    } else {
      return ((amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)).toFixed(2);
    }
  };

  public static totalRepay = (amount: number, term: number, rate: number, type: eMortgageType) => {
    return (parseFloat(this.monthlyRepayment(amount, term, rate, type)) * term * 12).toFixed(2);
  };
}

export default MortgageCalculator;
