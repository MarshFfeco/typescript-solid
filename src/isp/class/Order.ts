import { Messaging } from "../services/Messaging";
import { Percistancy } from "../services/Percistancy";
import { ShoppingCard } from "./ShoppingCard";
import { Orderstatus } from "./interfaces/Orderstatus";
import { CustomerOrder } from "./interfaces/customerProtocol";

export class Order {
  private status: Orderstatus = "open";

  constructor(
    private readonly cart: ShoppingCard,
    private readonly msg: Messaging,
    private readonly ps: Percistancy,
    private readonly customer: CustomerOrder
  ) { }

  get Status(): Orderstatus {
    return this.status;
  }

  public Checkout(): void {
    if (this.cart.IsEmpty) {
      throw new Error("Card is empty");
    }

    const msg = `Is all Ok: total R$${this.cart.TotalWidthDicount}`;

    this.status = "close";
    this.msg.SendMessage(msg);
    this.ps.SaveOrder();
    this.cart.Clear();
    console.log(`the client is: ${this.customer.getName}, ${this.customer.getIDN}`)
  }
}
