import { getParam } from "vanilla-js-ts-router";
import controller from "../core/controller";
import { setupTRINN } from "trinn-remote-control";
import { mobileCheck } from "../core/utils";
import { setModule } from "../core/dom";
import "./controller.css";

/*
  This is the controller view, it is responsible for sending the input to the screen view. It uses the TRINN library to send the input to the screen view.
*/

const leftButton = document.querySelector<HTMLButtonElement>(".left");
const rightButton = document.querySelector<HTMLButtonElement>(".right");
const jumpButton = document.querySelector<HTMLButtonElement>(".jump");

const isMobile = mobileCheck();

console.log(isMobile ? "Mobile" : "Desktop");

const setMoveButton = (
  button: HTMLButtonElement | null,
  direction: "left" | "right",
) => {
  if (!button) {
    console.error(`${direction} button not found`);
    return;
  }

  if (isMobile) {
    button.addEventListener("touchstart", () => {
      controller.send(`${direction}_press`);
    });

    button.addEventListener("touchend", () => {
      controller.send(`${direction}_release`);
    });

    button.addEventListener("touchcancel", () => {
      controller.send(`${direction}_release`);
    });
  } else {
    button.addEventListener("mousedown", () => {
      controller.send(`${direction}_press`);
    });

    button.addEventListener("mouseup", () => {
      controller.send(`${direction}_release`);
    });

    button.addEventListener("mouseleave", () => {
      controller.send(`${direction}_release`);
    });
  }
};

const setJumpButton = (button: HTMLButtonElement | null) => {
  if (!button) {
    console.error("Jump button not found");
    return;
  }

  if (isMobile) {
    button.addEventListener("touchstart", () => {
      controller.send("jump");
    });
  } else {
    button.addEventListener("mousedown", () => {
      controller.send("jump");
    });
  }
};

const setLanguegeSelect = () => {
  const languageButtons =
    document.querySelectorAll<HTMLButtonElement>(".lang button");
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      if (lang && (lang === "en" || lang === "nl")) {
        setModule();
        controller.sendLang(lang);
      }
    });
  });
};

// This is the main function of the controller view, it sets up the TRINN library and the event listeners for the buttons
const controllerView = async () => {
  await setupTRINN(import.meta.env.VITE_TURN_SERVER_KEY);
  const key = getParam("key");
  if (!key) {
    console.error("No key found");
    return;
  }

  controller.create(key, (event) => console.log(event));

  setMoveButton(leftButton, "left");
  setMoveButton(rightButton, "right");
  setLanguegeSelect();

  setJumpButton(jumpButton);

  setModule("lang");
};

export default controllerView;
