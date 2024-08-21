import { getParam } from "vanilla-js-ts-router";
import controller from "../core/controller";

const leftButton = document.querySelector<HTMLButtonElement>(".left");
const rightButton = document.querySelector<HTMLButtonElement>(".right");
const jumpButton = document.querySelector<HTMLButtonElement>(".jump");

const setMoveButton = (
  button: HTMLButtonElement | null,
  direction: "left" | "right"
) => {
  if (!button) {
    console.error(`${direction} button not found`);
    return;
  }

  button.addEventListener("mousedown", () => {
    controller.send(`${direction}_press`);
  });

  button.addEventListener("mouseup", () => {
    controller.send(`${direction}_release`);
  });

  button.addEventListener("touchstart", () => {
    controller.send(`${direction}_press`);
  });

  button.addEventListener("touchend", () => {
    controller.send(`${direction}_release`);
  });

  button.addEventListener("mouseleave", () => {
    controller.send(`${direction}_release`);
  });

  button.addEventListener("touchcancel", () => {
    controller.send(`${direction}_release`);
  });
};

const setJumpButton = (button: HTMLButtonElement | null) => {
  if (!button) {
    console.error("Jump button not found");
    return;
  }

  button.addEventListener("mousedown", () => {
    controller.send("jump");
  });

  button.addEventListener("touchstart", () => {
    controller.send("jump");
  });
};

const controllerView = () => {
  const key = getParam("key");
  if (!key) {
    console.error("No key found");
    return;
  }

  controller.create(key, (event) => console.log(event));

  setMoveButton(leftButton, "left");
  setMoveButton(rightButton, "right");

  setJumpButton(jumpButton);
};

export default controllerView;
