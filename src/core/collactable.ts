import { Data } from "../types";

export default class Collactable extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, data: Data) {
    super(scene, x, y, "collectable");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.anims.create({
      key: "idle",
      frames: [
        { key: "collectable", frame: 0 },
        { key: "collectable", frame: 1 },
      ],
      frameRate: 5,
      repeat: -1,
    });

    this.anims.play("idle", true);
    data;
  }
}
