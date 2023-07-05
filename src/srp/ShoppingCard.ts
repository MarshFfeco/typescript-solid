type CardItem = {
  name: string;
  price: number;
};

type Orderstatus = "open" | "close";

export class ShoppingCard {
  private readonly items: CardItem[] = [];
  private status: Orderstatus = "open";

  set AddItem(item: CardItem) {
    this.items.push(item);
  }

  set RemoveItem(id: number) {
    this.items.splice(id, 1);
  }

  get Items(): Readonly<CardItem[]> {
    return this.items;
  }

  get Total(): number {
    return parseFloat(
      this.Items.reduce((acu, self) => acu + self.price, 0).toFixed(2)
    );
  }

  get Status(): Orderstatus {
    return this.status;
  }

  private IsEmpty(): boolean {
    return this.Items.length == 0;
  }

  public Checkout(): void {
    if (this.IsEmpty()) {
      throw new Error("Card is empty");
    }

    const msg = `Is all Ok: total R$${this.Total}`;

    this.status = "close";
    this.SendMessage(msg);
    this.SaveOrder();
    this.Clear();
  }

  Clear(): void {
    this.items.length = 0;
  }

  SaveOrder(): void {
    console.log("Your Order was Saved");
  }

  private SendMessage(msg: string): void {
    const newMessage = `Message Sent\n ${msg}`;

    console.log(newMessage);
  }
}

const shop = new ShoppingCard();

shop.AddItem = { name: "2", price: 50.5 };
shop.AddItem = { name: "1", price: 100 };
shop.Checkout();

console.log(shop.Items);
console.log(shop.Total);
console.log(shop.Status);
