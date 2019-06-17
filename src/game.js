class Game {
  constructor(color) {
    this.background = new Background();
    this.player = new Player();
  }

  setup() {
    this.background.setup();
    this.player.setup();
  }

  draw() {
    this.background.draw();
    this.player.draw();
  }
}
