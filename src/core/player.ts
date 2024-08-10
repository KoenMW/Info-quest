import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  public grounded = false;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "player");
    scene.add.existing(this);
    scene.physics.add.existing(this);

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

  update() {
    if (!this.body || !this.cursors) return;

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

    if (this.cursors.left.isDown) {
      this.setVelocityX(-100);
    } else if (this.cursors.right.isDown) {
      this.setVelocityX(100);
    } else {
      this.setVelocityX(0);
    }

    if (this.cursors.space.isDown && this.grounded) {
      this.setVelocityY(-200);
    }
  }
}
