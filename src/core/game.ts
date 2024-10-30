import { Scene } from "phaser";
import tilemapJson from "../assets/tiled/map.json";
import Player from "./player";
import Remote from "./remote";
import { setModule, setQRCode, setRestart, setStartScreen } from "./dom";
import { generateKey } from "./utils";
import Collactable from "./collactable";
import data, { dataLocations } from "./data";
import characterSprite from "../assets/spritesheet/character.png";
import collactableSprite from "../assets/spritesheet/collactable.png";
import backgroundTileset from "../assets/tiled/tiles/tilemap-backgrounds_packed.png";
import baseTileset from "../assets/tiled/tiles/tilemap_packed.png";
import { local } from "./const";
import { setupTRINN } from "trinn-remote-control";

const setKeyBoard = (player: Player) => {
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        player.setMovement("left_press");
        break;
      case "ArrowRight":
        player.setMovement("right_press");
        break;
      case " ":
        player.setMovement("jump");
        break;
    }
  });

  document.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        player.setMovement("left_release");
        break;
      case "ArrowRight":
        player.setMovement("right_release");
        break;
      case " ":
        player.setMovement("jump_release");
        break;
    }
  });
};

const setInput = async (scene: Phaser.Scenes.ScenePlugin, player: Player) => {
  if (!local) {
    await setupTRINN(import.meta.env.VITE_TURN_SERVER_KEY);
    const key = generateKey();
    setQRCode(key);

    Remote.create(
      key,
      (event) => {
        if (event === "close") {
          scene.pause();
          setRestart();
        } else {
          setModule();
          scene.resume();
        }
      },
      (input) => {
        player.setMovement(input);
      }
    );
  } else {
    setStartScreen();
    setKeyBoard(player);
  }
};

class Game extends Scene {
  private map!: Phaser.Tilemaps.Tilemap;
  private tileset: Phaser.Tilemaps.Tileset | null = null;
  private backgroundTileset: Phaser.Tilemaps.Tileset | null = null;
  private groundLayer: Phaser.Tilemaps.TilemapLayer | null = null;

  private player!: Player;

  constructor() {
    super("game");
  }

  preload() {
    this.load.image({
      key: "tiles",
      url: baseTileset,
    });

    this.load.image({
      key: "background",
      url: backgroundTileset,
    });
    this.load.tilemapTiledJSON("dungeon", tilemapJson);

    this.load.spritesheet("player", characterSprite, {
      frameWidth: 24,
      frameHeight: 24,
      startFrame: 0,
      endFrame: 1,
    });

    this.load.spritesheet("collectable", collactableSprite, {
      frameWidth: 18,
      frameHeight: 18,
      startFrame: 0,
      endFrame: 1,
    });
  }

  private initMap() {
    this.map = this.make.tilemap({
      key: "dungeon",
      tileHeight: 18,
      tileWidth: 18,
    });

    this.tileset = this.map.addTilesetImage("base", "tiles");
    this.backgroundTileset = this.map.addTilesetImage(
      "background",
      "background"
    );

    if (!this.tileset || !this.backgroundTileset) return;
    this.map.createLayer("background", this.backgroundTileset, 0, 0);

    this.map.createLayer("midground", this.tileset, 0, 0);

    this.groundLayer = this.map.createLayer("ground", this.tileset, 0, 0);

    this.map.createLayer("door", this.tileset, 0, 0);
  }

  private cameraInit() {
    const camera = this.cameras.main;

    camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    camera.startFollow(this.player, true, 0.7, 0.7);
  }

  private collisionInit() {
    if (this.groundLayer) {
      this.physics.add.collider(this.player, this.groundLayer);
      this.groundLayer.setCollisionBetween(0, 1000);
    }
  }

  public setPlayerCollision(
    sprite: Phaser.Physics.Arcade.Sprite,
    callback: () => void
  ) {
    this.physics.add.collider(this.player, sprite, callback);
  }

  async create() {
    this.initMap();
    this.player = new Player(this, 1300, 2000);

    await setInput(this.scene, this.player);

    data.forEach((_value, index) => {
      new Collactable(this, dataLocations[index]);
    });

    this.cameraInit();

    this.collisionInit();
    this.scene.pause();
  }

  update() {
    this.player.update();
  }
}

export default Game;

export const game = new Game();
