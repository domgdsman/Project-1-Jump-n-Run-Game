class Game {
  constructor(color) {
    this.background = new Background();
    this.player = new Player();
    this.diamondsArray = [];
  }

  setup() {
    this.background.setup();
    this.player.setup();
    this.DIAMONDS = new Group();
    for (let i = 0; i < TIMES_PLAYINGFIELD * 5; i++) {
      this.diamondsArray.push(new Diamond());
      this.diamondsArray[i].setup();
      this.DIAMONDS.add(this.diamondsArray[i].diamondHitBox);
    }
  }

  draw() {
    // creating crystals here
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
  }
}
