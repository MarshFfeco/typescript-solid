import { CardItem } from "./interfaces/Carditem";

export class ShoppingCard {
  private readonly items: CardItem[] = [];

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

  get IsEmpty(): boolean {
    return this.Items.length == 0;
  }

  Clear(): void {
    this.items.length = 0;
  }
}
