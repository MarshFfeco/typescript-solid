import { Discount, FifityPorcentDiscount, TwentyFivePorcentDiscount, NoDiscount } from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no Discount', () => {
    const sut = createSut(NoDiscount);

    expect(sut.Calculate(100)).toBe(100)
  });

  it('should have TwentyFivePorcentDiscount', () => {
    const sut = createSut(TwentyFivePorcentDiscount);

    expect(sut.Calculate(100)).toBe(75)
  });

  it('should have FifityPorcentDiscount', () => {
    const sut = createSut(FifityPorcentDiscount);

    expect(sut.Calculate(100)).toBe(50)
  });
});
