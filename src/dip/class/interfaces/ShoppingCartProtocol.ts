import { CardItem } from "./Carditem";

export interface ShoppingCardProtocol {

  set AddItem(item: CardItem)

  set RemoveItem(id: number)

  get Items(): Readonly<CardItem[]>

  get Total(): number

  get TotalWidthDicount(): number

  get IsEmpty(): boolean

  Clear(): void
}
