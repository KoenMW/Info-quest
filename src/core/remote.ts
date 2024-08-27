import { TRINNRemote } from "trinn-remote-control";
import { Inputs } from "../types";

abstract class Remote {
  static remote: TRINNRemote;
  private static unconfirmedAcks: number[] = [];
  private static ackInterval: NodeJS.Timeout | null = null;

  static create(
    id: string,
    onConnectionEvent: (event: "close" | "open") => void,
    onInputEvent: (input: Inputs) => void
  ) {
    this.remote = new TRINNRemote(id);

    this.remote.onConnection(() => {
      onConnectionEvent("open");
      this.unconfirmedAcks = [];

      if (this.ackInterval) clearInterval(this.ackInterval);
      this.ackInterval = setInterval(() => {
        const randomValue = Math.random();
        this.remote.sendData({ type: "ack", randomValue });
        this.unconfirmedAcks.push(randomValue);

        if (this.unconfirmedAcks.length > 3) {
          onConnectionEvent("close");
        }
      }, 2 * 1000);
    });
    this.remote.onConnectionClose(() => onConnectionEvent("close"));

    this.remote.onData((data) => {
      if (data === "close") return onConnectionEvent("close");
      if (data.type === "ack") {
        const indexOfValue = this.unconfirmedAcks.indexOf(data.randomValue);
        if (indexOfValue > -1) {
          this.unconfirmedAcks = [];
        }
      } else if (data.type === "input") {
        onInputEvent(data.input);
      } else {
        console.log("UNKNOWN DATA", data);
      }
    });
  }
}

export default Remote;
