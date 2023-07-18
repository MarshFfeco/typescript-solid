/* eslint-disable prettier/prettier */
import { CardItem } from "./interfaces/Carditem";

export class Product implements CardItem {
  constructor(public name: string, public price: number) { }
}
