class Game {
  constructor(color) {
    this.background = new Background();
    this.player = new Player();
    this.diamondsArray = [];
    this.rocketsArray = [];
    // this.rocket = new Rocket(); // for testing
  }

  setup() {
    this.background.setup();
    this.player.setup();
    this.DIAMONDS = new Group();
    for (let i = 0; i < TIMES_PLAYINGFIELD * 5; i++) {
      this.diamondsArray.push(new Diamond());
      this.diamondsArray[i].setup();
      this.DIAMONDS.add(this.diamondsArray[i].diamondHitBox);
      this.diamondsArray[i].diamondHitBox.bounce(this.DIAMONDS); // this makes sure each diamond is bounced off, when placed in same x-y-position as a previously placed diamond
    }
    this.ROCKETS = new Group();
    // this.rocket.setup(); // for testing
    // this.ROCKETS.add(this.rocket.rocketHitBox); // for testing
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.diamondsArray.forEach(function(diamond) {
      diamond.draw();
    });

    // readying up rockets every 120 frames
    if (frameCount % 45 === 0) {
      this.rocketsArray.push(new Rocket());
      this.rocketsArray[this.rocketsArray.length - 1].setup();
      this.ROCKETS.add(
        this.rocketsArray[this.rocketsArray.length - 1].rocketHitBox
      );
    }
    // deleting rockets every 300 frames
    if (frameCount % 300 === 0) {
      this.rocketsArray.shift().rocketHitBox.remove();
    }

    // drawing all active rockets
    this.rocketsArray.forEach(function(rocket) {
      rocket.draw();
    });
    if (this.player.health === 0) this.game.over();
  }

  over() {
    noLoop();
  }
}
