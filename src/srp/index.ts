import { Messaging } from "./services/Messaging";
import { Order } from "./entities/Order";
import { Percistancy } from "./services/Percistancy";
import { Product } from "./entities/Product";
import { ShoppingCard } from "./entities/ShoppingCard";

const shop = new ShoppingCard();
const msg = new Messaging();
const ps = new Percistancy();
const order = new Order(shop, msg, ps);

shop.AddItem = new Product("1", 50.5);
shop.AddItem = new Product("2", 100);
shop.AddItem = new Product("3", 4.5);
order.Checkout();

console.log(shop.Items);
console.log(shop.Total);
console.log(order.Status);
