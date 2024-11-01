import { Location } from "../types";
import data from "./data";
import { setCollected, setData } from "./dom";
import Game from "./game";

export default class Collactable extends Phaser.Physics.Arcade.Sprite {
  public static collected: number = 0;

  constructor(scene: Game, location: Location) {
    super(scene, location.x, location.y, "collectable");
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
      setData(data[Collactable.collected]);
      Collactable.collected++;
      setCollected(Collactable.collected * 30);
      this.destroy();
    });
  }
}
