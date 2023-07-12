import { Messaging } from "./services/Messaging";
import { Order } from "./class/Order";
import { Percistancy } from "./services/Percistancy";
import { Product } from "./class/Product";
import { ShoppingCard } from "./class/ShoppingCard";
import {
  FifityPorcentDiscount,
  TwentyFivePorcentDiscount,
  NoDiscount,
} from "./class/discount";

const noDiscount = new NoDiscount();
const twenty = new TwentyFivePorcentDiscount();
const fifity = new FifityPorcentDiscount();

const shop = new ShoppingCard(noDiscount);
const msg = new Messaging();
const ps = new Percistancy();
const order = new Order(shop, msg, ps);

shop.AddItem = new Product("1", 75);
shop.AddItem = new Product("2", 25);
shop.AddItem = new Product("3", 400);
// order.Checkout();

console.log(shop.Items);
console.log(shop.TotalWidthDicount);
console.log(order.Status);
