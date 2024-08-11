import { TRINNController } from "trinn-remote-control";
import { inputs } from "../types";

abstract class Controller {
  static controller: TRINNController;

  static close() {
    if (this.controller) {
      this.controller.sendData("close");
    }
  }
  static create(
    id: string,
    onConnectionEvent: (event: "close" | "open") => void
  ) {
    this.controller = new TRINNController(id);

    this.controller.onConnection(() => {
      onConnectionEvent("open");
    });
    this.controller.onConnectionClose(() => {
      onConnectionEvent("close");
    });

    this.controller.onData((data) => {
      if (data.type === "ack") {
        this.controller.sendData({
          type: "ack",
          randomValue: data.randomValue,
        });
      }
    });
  }

  public static send(input: inputs) {
    this.controller.sendData({
      type: "input",
      input,
    });
  }
}

export default Controller;
