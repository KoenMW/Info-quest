import Phaser from "phaser";
import { game } from "../core/game";
import "./screen.css";
import { bounds } from "../core/const";

const screen = document.querySelector<HTMLElement>(".screen") as HTMLElement;

// these are the settings for the Phaser game, you can change them to your liking
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
  render: {
    pixelArt: true,
    antialias: false,
    roundPixels: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

// Here we create a new Phaser game with the above configuration and export it as the default export of this module
const main = () => {
  new Phaser.Game(config);
};

export default main;
