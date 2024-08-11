import controller from "../core/controller";

const leftButton = document.querySelector<HTMLButtonElement>(".left");
const rightButton = document.querySelector<HTMLButtonElement>(".right");
const jumpButton = document.querySelector<HTMLButtonElement>(".jump");

const controllerView = () => {
  if (!leftButton || !rightButton || !jumpButton) {
    console.error("Buttons not found");
    return;
  }
  controller.create("fjdsaklfjdsafkjadslkf", (event) => console.log(event));

  leftButton.addEventListener("mousedown", () => {
    controller.send("left_press");
  });

  leftButton.addEventListener("mouseup", () => {
    controller.send("left_release");
  });

  rightButton.addEventListener("mousedown", () => {
    controller.send("right_press");
  });

  rightButton.addEventListener("mouseup", () => {
    controller.send("right_release");
  });

  jumpButton.addEventListener("mousedown", () => {
    controller.send("jump");
  });
};

export default controllerView;
