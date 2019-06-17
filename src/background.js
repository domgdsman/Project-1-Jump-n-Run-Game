class Background {
  constructor() {
    // landscape layer = 1
    this.landscapeX1 = 0;
    this.landscapeX2 = WIDTH;
  }

  setup() {
    // landscape layer = 1
    this.redHills = loadImage(
      "../assets/Backgrounds/landscapes/layer_01_1200x730.png"
    );
    // landscape layer = 2
    this.occaBushes = loadImage(
      "../assets/Backgrounds/landscapes/layer_02_1200x624.png"
    );
    // landscape layer = 3
    this.darkGreenBushes = loadImage(
      "../assets/Backgrounds/landscapes/layer_03_1200x612.png"
    );
    // landscape layer = 4
    this.tropicalBushes = loadImage(
      "../assets/Backgrounds/landscapes/layer_04_1200x606.png"
    );
    // landscape layer = 5
    this.grass = loadImage(
      "../assets/Backgrounds/landscapes/layer_05_1200x600.png"
    );
    // landscape layer = 6
    this.foregroundBushes = loadImage(
      "../assets/Backgrounds/landscapes/layer_06_1200x600.png"
    );

    // ground
    this.grassFloorImg = loadImage(
      "../assets/Backgrounds/ground/gras_block_1200x96.png"
    );
  }

  draw() {
    // background("aliceblue"); // for testing

    // landscape layer = 1
    image(this.redHills, 0, 0);
    // image(this.misticalHillsImg, this.landscapeX2, 0, width, height);
    // landscape layer = 2
    image(this.occaBushes, 0, 710 - this.occaBushes.height);
    // landscape layer = 3
    image(this.darkGreenBushes, 0, 710 - this.darkGreenBushes.height);
    // landscape layer = 4
    image(this.tropicalBushes, 0, 710 - this.tropicalBushes.height);
    // landscape layer = 5
    image(this.grass, 0, 740 - this.grass.height);
    // landscape layer = 6
    image(this.foregroundBushes, 0, 710 - this.foregroundBushes.height);

    /* 
    // moving background function
    this.landscapeX1 -= 5;
    this.landscapeX2 -= 5;
    
    if (this.landscapeX1 < -width) {
      this.landscapeX1 = width;
    }
    if (this.landscapeX2 < -width) {
      this.landscapeX2 = width;
    }
    */

    // ground floor layer = 4
    image(this.grassFloorImg, 0, height - this.grassFloorImg.height);
  }
}
