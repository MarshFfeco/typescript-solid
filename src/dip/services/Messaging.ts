import { MessagingProtocol } from "../class/interfaces/MessagingProtocol";

export class Messaging implements MessagingProtocol {
  public SendMessage(msg: string): void {
    const newMessage = `Message Sent\n ${msg}`;

    console.log(newMessage);
  }
}
