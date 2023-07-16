import { PercistancyProtocol } from "../class/interfaces/PercistancyProtocol";

export class Percistancy implements PercistancyProtocol {
  public SaveOrder(): void {
    console.log("Your Order was Saved");
  }
}
