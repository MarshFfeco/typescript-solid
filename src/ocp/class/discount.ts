/* eslint-disable prettier/prettier */
export abstract class Discount {
  abstract Calculate(value: number): number
}


export class FifityPorcentDiscount extends Discount {
  private readonly discount = 0.5;

  Calculate(value: number): number {
    return value - value * this.discount
  }
}

export class TwentyFivePorcentDiscount extends Discount {
  private readonly discount = 0.25;

  Calculate(value: number): number {
    return value - value * this.discount
  }
}

export class NoDiscount extends Discount {
  Calculate(value: number): number {
    return value
  }
}
