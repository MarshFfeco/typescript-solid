export class Messaging {
  public SendMessage(msg: string): void {
    const newMessage = `Message Sent\n ${msg}`;

    console.log(newMessage);
  }
}
