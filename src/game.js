class Game {
  constructor(color) {
    this.background = new Background();
    this.player = new Player();
    this.diamondsArray = [];
    this.DIAMONDS = diamonds;
  }

  setup() {
    this.background.setup();
    this.player.setup();
    this.DIAMONDS = new Group();
  }

  draw() {
    // create crystals here
    if (frameCount <= 10 * TIMES_PLAYINGFIELD) {
      if (frameCount % 2 === 0) {
        this.diamondsArray.push(new Diamond());
      }
    }
    this.background.draw();
    this.diamondsArray.forEach(diamond => {
      diamond.draw();
    });
    this.player.draw();
    this.player.hitBox.collide(this.DIAMONDS, collect);
  }
}
