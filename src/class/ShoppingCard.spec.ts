import { ShoppingCard } from './ShoppingCard';
import { Discount } from "./discount";
import { CardItem } from './interfaces/Carditem';

const CreatedDiscountMock = (): Discount => {
  class DiscountMock extends Discount {
  }

  return new DiscountMock()
}

const createSutIndividual = () => {
  const dm = CreatedDiscountMock()

  const sut = new ShoppingCard(dm);

  return { sut, dm }
};

const createCardItem = (name: string, price: number) => {
  class CardItemMock implements CardItem {
    constructor(public name: string, public price: number) { }
  }

  return new CardItemMock(name, price)
}

const createSUTWithProducts = () => {
  const { sut, dm } = createSutIndividual()
  const item1: CardItem = createCardItem("a", 50)
  const item2: CardItem = createCardItem("b", 50)

  sut.AddItem = item1
  sut.AddItem = item2

  return { sut, dm }
}

describe('shoppingCart', () => {
  afterEach(() => jest.clearAllMocks());

  it('should be an empty cart when no product is added', () => {
    const { sut } = createSutIndividual()

    expect(sut.IsEmpty).toBe(true)
  });

  it('should have two cart items', () => {
    const { sut } = createSUTWithProducts()

    expect(sut.Items.length).toBe(2)
  });

  it('should test total and totalwithdiscount', () => {
    const { sut } = createSUTWithProducts()

    expect(sut.Total).toBe(100)
    expect(sut.TotalWidthDicount).toBe(100)
  });

  it('should add products and clear cards', () => {
    const { sut } = createSUTWithProducts()

    expect(sut.Items.length).toBe(2)

    sut.Clear()

    expect(sut.Items.length).toBe(0)
  });

  it('should remove 1 product', () => {
    const { sut } = createSUTWithProducts()

    sut.RemoveItem = 0

    expect(sut.Items.length).toBe(1)
  });
});
