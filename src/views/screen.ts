import Phaser from "phaser";
import { game } from "../core/game";
import "./screen.css";

const screen = document.querySelector<HTMLElement>(".screen") as HTMLElement;
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  parent: screen,
  scale: {
    mode: Phaser.Scale.FIT,
    width: 512,
    height: 256,
  },
  zoom: 4,
  scene: game,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
};

const main = () => {
  new Phaser.Game(config);
};

export default main;
