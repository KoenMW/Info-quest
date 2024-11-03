import Phaser from "phaser";
import { Inputs, Location } from "../types";
import { bounds } from "./const";
import { viewingData } from "./dom";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  public grounded = false;
  private left = false;
  private right = false;
  private jump = false;
  private origin: Location = { x: 0, y: 0 };

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "player");
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.origin = { x, y };

    this.setGravityY(200);

    if (scene.input.keyboard) {
      this.cursors = scene.input.keyboard.createCursorKeys();
    }

    this.anims.create({
      key: "idle",
      frames: [{ key: "player", frame: 0 }],
      frameRate: 10,
    });

    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "jump",
      frames: [{ key: "player", frame: 1 }],
      frameRate: 10,
    });
  }

  public setMovement(input: Inputs) {
    if (viewingData) {
      this.left = false;
      this.right = false;
      this.jump = false;
    }
    switch (input) {
      case "left_press":
        this.left = true;
        break;
      case "left_release":
        this.left = false;
        break;
      case "right_press":
        this.right = true;
        break;
      case "right_release":
        this.right = false;
        break;
      case "jump":
        this.jump = true;
        break;
      case "jump_release":
        this.jump = false;
        break;
    }
  }

  private resetPosition() {
    this.x = this.origin.x;
    this.y = this.origin.y;
  }

  update() {
    if (!this.body || !this.cursors) return;

    if (this.body.velocity.x > 0) {
      this.setFlipX(true);
    } else if (this.body.velocity.x < 0) {
      this.setFlipX(false);
    }

    if (this.body.velocity.x !== 0) {
      this.anims.play("run", true);
    } else {
      this.anims.play("idle", true);
    }

    if (this.body.blocked.down) {
      this.grounded = true;
    } else {
      this.anims.play("jump", true);
      this.grounded = false;
    }

    if (this.left) {
      this.setVelocityX(-100);
    } else if (this.right) {
      this.setVelocityX(100);
    } else {
      this.setVelocityX(0);
    }

    if (this.jump && this.grounded) {
      this.jump = false;
      this.setVelocityY(-200);
    }

    if (
      this.body.position.y > bounds.tileSize * bounds.mapSize ||
      this.body.position.y < 0 ||
      this.body.position.x < 0 ||
      this.body.position.x > bounds.tileSize * bounds.mapSize
    )
      this.resetPosition();
  }
}
