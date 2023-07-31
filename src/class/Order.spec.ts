import { Order } from "./Order";
import { CardItem } from "./interfaces/Carditem";
import { MessagingProtocol } from "./interfaces/MessagingProtocol";
import { PercistancyProtocol } from "./interfaces/PercistancyProtocol";
import { ShoppingCardProtocol } from "./interfaces/ShoppingCartProtocol";
import { CustomerOrder } from "./interfaces/customerProtocol";

class ShoppingCardMock implements ShoppingCardProtocol {
  set AddItem(item: CardItem) { }

  set RemoveItem(id: number) { }

  get Items(): Readonly<CardItem[]> {
    return []
  }

  get Total(): number { return 1 }

  get TotalWidthDicount(): number { return 2 }

  get IsEmpty(): boolean { return false }

  Clear(): void { }
}

class MessagingMock implements MessagingProtocol {
  SendMessage(msg: string): void { }
}

class PercistancyMock implements PercistancyProtocol {
  SaveOrder(): void {
  }
}

class CustomerMock implements CustomerOrder {
  get getName(): string {
    return ""
  }
  get getIDN(): string {
    return ""
  }
}

const makeSut = () => {
  const shoppingCardMock = new ShoppingCardMock()
  const messagingMock = new MessagingMock()
  const percistancyMock = new PercistancyMock()
  const customerMock = new CustomerMock()
  const sut = new Order(shoppingCardMock, messagingMock, percistancyMock, customerMock)

  return {
    sut,
    shoppingCardMock,
    messagingMock,
    customerMock,
    percistancyMock
  };
}

describe('Order', () => {
  it("should not checout if cart is empty", () => {
    const { sut } = makeSut()
    sut.Checkout()

    expect(sut.Status).toBe("close")
  })

  it("should sen an email to customer", () => {
    const { sut, messagingMock } = makeSut()
    const messagingMockSpy = jest.spyOn(messagingMock, "SendMessage")

    sut.Checkout()

    expect(messagingMockSpy).toHaveBeenCalledTimes(1)
  })

  it("should save order", () => {
    const { sut, percistancyMock } = makeSut()
    const percistancyMockSpy = jest.spyOn(percistancyMock, "SaveOrder")

    sut.Checkout()

    expect(percistancyMockSpy).toHaveBeenCalledTimes(1)
  })

  it("should clear cartr", () => {
    const { sut, shoppingCardMock } = makeSut()
    const shoppingCardMockSpy = jest.spyOn(shoppingCardMock, "Clear")

    sut.Checkout()

    expect(shoppingCardMockSpy).toHaveBeenCalledTimes(1)
  })
})
