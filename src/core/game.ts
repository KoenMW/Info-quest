import { Scene } from "phaser";
import tilemapJson from "../assets/tiled/first.json";
import Player from "./player";
import Remote from "./remote";

const baseFileURL = "https://koenmw.github.io/image";
export default class game extends Scene {
  private map!: Phaser.Tilemaps.Tilemap;
  private tileset: Phaser.Tilemaps.Tileset | null = null;
  private backgroundTileset: Phaser.Tilemaps.Tileset | null = null;
  private backgroundLayer: Phaser.Tilemaps.TilemapLayer | null = null;
  private midgroundLayer: Phaser.Tilemaps.TilemapLayer | null = null;
  private groundLayer: Phaser.Tilemaps.TilemapLayer | null = null;
  private halfgroundLayer: Phaser.Tilemaps.TilemapLayer | null = null;
  private deathLayer: Phaser.Tilemaps.TilemapLayer | null = null;

  private player!: Player;

  constructor() {
    super("game");

    //temp
    this.backgroundLayer;
    this.midgroundLayer;
    this.halfgroundLayer;
    this.deathLayer;
  }

  preload() {
    this.load.image({
      key: "tiles",
      url: `${baseFileURL}/tilemap_packed.png`,
    });

    this.load.image({
      key: "background",
      url: `${baseFileURL}/tilemap-backgrounds_packed.png`,
    });
    this.load.tilemapTiledJSON("dungeon", tilemapJson);

    this.load.spritesheet("player", `${baseFileURL}/character.png`, {
      frameWidth: 24,
      frameHeight: 24,
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
    this.backgroundLayer = this.map.createLayer(
      "Background Layer",
      this.backgroundTileset,
      0,
      0
    );

    this.midgroundLayer = this.map.createLayer(
      "Midground Layer",
      this.tileset,
      0,
      0
    );

    this.groundLayer = this.map.createLayer("Ground Layer", this.tileset, 0, 0);

    this.halfgroundLayer = this.map.createLayer(
      "Halfground Layer",
      this.tileset,
      0,
      0
    );

    this.deathLayer = this.map.createLayer("Death", this.tileset, 0, 0);
  }

  private cameraInit() {
    const camera = this.cameras.main;

    camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    camera.startFollow(this.player, true, 0.7, 0.7);
  }

  private collisionInit() {
    if (this.groundLayer) {
      this.physics.add.collider(this.player, this.groundLayer);
      this.groundLayer.setCollision([
        0, 1, 2, 3, 4, 5, 20, 21, 22, 23, 24, 25, 40, 41, 42, 43, 60, 61, 62,
        63, 80, 81, 82, 83, 100, 101, 102, 103, 120, 121, 122, 123, 124, 140,
        141, 142, 143, 144,
      ]);
    }
  }

  create() {
    this.initMap();
    this.player = new Player(this, 100, 200);

    this.cameraInit();

    this.collisionInit();

    Remote.create(
      "fjdsaklfjdsafkjadslkf",
      (event) => console.log(event),
      (input) => {
        console.log(input);
        this.player.setMovement(input);
      }
    );
  }

  update() {
    this.player.update();
  }
}
