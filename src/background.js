class Background {
  setup() {
    // landscape layer = 1
    this.redHills = loadImage(
      "assets/Backgrounds/landscapes/layer_01_1200x730.png"
    );
    // landscape layer = 2
    this.occaBushes = loadImage(
      "assets/Backgrounds/landscapes/layer_02_1200x624.png"
    );
    // landscape layer = 3
    this.darkGreenBushes = loadImage(
      "assets/Backgrounds/landscapes/layer_03_1200x612.png"
    );
    // landscape layer = 4
    this.tropicalBushes = loadImage(
      "assets/Backgrounds/landscapes/layer_04_1200x606.png"
    );
    // landscape layer = 5
    this.grass = loadImage(
      "assets/Backgrounds/landscapes/layer_05_1200x600.png"
    );
    // landscape layer = 6
    this.foregroundBushes = loadImage(
      "assets/Backgrounds/landscapes/layer_06_1200x600.png"
    );

    // ground
    this.grassFloorImg = loadImage(
      "assets/Backgrounds/ground/gras_block_1200x96.png"
    );

    // background decoration
    this.signForward = loadImage(
      "assets/Objects/signs/board_forward_128x128.png"
    );
    this.signDanger = loadImage(
      "assets/Objects/signs/board_poison_128x128.png"
    );
  }

  draw() {
    for (let i = 0; i <= SCENE_W; i += WIDTH) {
      // landscape layer = 1
      image(this.redHills, i, 0);
      // landscape layer = 2
      image(this.occaBushes, i, 710 - this.occaBushes.height);
      // landscape layer = 3
      image(this.darkGreenBushes, i, 710 - this.darkGreenBushes.height);
      // landscape layer = 4
      image(this.tropicalBushes, i, 710 - this.tropicalBushes.height);
      // landscape layer = 5
      image(this.grass, i, 740 - this.grass.height);
      // landscape layer = 6
      image(this.foregroundBushes, i, 710 - this.foregroundBushes.height);
      // ground floor layer = 7
      image(this.grassFloorImg, i, height - this.grassFloorImg.height);
    }

    // sign forward
    image(this.signForward, 50, 710 - this.signForward.height);
    // sign danger
    image(this.signDanger, WIDTH * 1.5, 710 - this.signDanger.height);
  }
}
