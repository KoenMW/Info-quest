import { Location } from "../types";
import { bounds } from "./const";
import { setData } from "./dom";
import Game from "./game";

export default class CollactableHidden extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Game) {
    const location: Location = {
      x: 57,
      y: 68,
    };
    super(
      scene,
      location.x * bounds.tileSize,
      location.y * bounds.tileSize,
      "collactable_hidden"
    );
    scene.add.existing(this);
    scene.physics.add.existing(this);
    if (!this.anims.exists("idle")) {
      this.anims.create({
        key: "idle",
        frames: [
          { key: "collectable", frame: 0 },
          { key: "collectable", frame: 1 },
        ],
        frameRate: 5,
        repeat: -1,
      });
    }

    this.anims.play("idle", true);

    scene.setPlayerCollision(this, () => {
      setData({
        ec: 0,
        nl: "Je hebt de verborgen coin gevonden!",
        en: "You have collected the hidden coin!",
        nameEN: "",
        nameNL: "",
      });
      this.destroy();
    });
  }
}
