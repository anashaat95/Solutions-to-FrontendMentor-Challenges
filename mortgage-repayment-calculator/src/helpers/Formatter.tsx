export class Formatter {
  private static numberFormatter = new Intl.NumberFormat("en-Us", { maximumFractionDigits: 0 });
  private static priceFormatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  public static formateNumber(num: number) {
    return this.numberFormatter.format(num);
  }

  public static formatePrice(num: number) {
    return this.priceFormatter.format(num);
  }
}
