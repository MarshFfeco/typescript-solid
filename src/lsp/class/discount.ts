/* eslint-disable prettier/prettier */
export abstract class Discount {
  protected discount = 0.0;

  Calculate(value: number): number {
    return value - value * this.discount
  }
}


export class FifityPorcentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TwentyFivePorcentDiscount extends Discount {
  protected readonly discount = 0.25;
}

export class NoDiscount extends Discount { }
