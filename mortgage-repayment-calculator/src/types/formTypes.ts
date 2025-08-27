export type FormValues = {
  amount: number;
  term: number;
  rate: number;
  type: eMortgageType;
};

export enum eMortgageType {
  none,
  repayment,
  interest,
}
