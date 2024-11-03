import Phaser from "phaser";
import { game } from "../core/game";
import "./screen.css";
import { bounds } from "../core/const";

const screen = document.querySelector<HTMLElement>(".screen") as HTMLElement;
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  parent: screen,
  scale: {
    mode: Phaser.Scale.FIT,
    width: bounds.width,
    height: bounds.height,
  },
  zoom: 4,
  scene: game,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

const main = () => {
  new Phaser.Game(config);
};

export default main;
