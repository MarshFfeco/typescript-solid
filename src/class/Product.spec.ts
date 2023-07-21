import { Product } from './Product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return name and price', () => {
    const sut = createSut("short", 49.90);

    expect(sut).toHaveProperty('name', 'short')
    expect(sut.price).toBeCloseTo(49.90)
  });
});
