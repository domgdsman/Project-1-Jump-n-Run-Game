class Game {
  constructor(color) {
    this.timer = 59;
    this.background = new Background();
    this.player = new Player(color);
    this.obstaclesArray = [];
    this.diamondsArray = [];
    this.hpArray = [];
    this.clockArray = [];
    this.rocketsArray = [];
    this.bulletTime = 1;
  }

  setup() {
    this.background.setup();
    this.player.setup();

    this.OBSTACLES = new Group();
    for (let i = 1; i <= TIMES_PLAYINGFIELD; i++) {
      this.obstaclesArray[i] = [
        new PresetA(i),
        new PresetB(i),
        new PresetC(i),
        new PresetD(i),
        new PresetE(i),
        new PresetF(i),
        new PresetG(i),
        new PresetH(i),
        new PresetI(i),
        new PresetJ(i)
      ].slice()[Math.floor(Math.random() * 10)];
      this.obstaclesArray[i].setup();
    }

    this.DIAMONDS = new Group();
    for (let i = 0; i < TIMES_PLAYINGFIELD * 5; i++) {
      this.diamondsArray.push(new Diamond());
      this.diamondsArray[i].setup();
      this.DIAMONDS.add(this.diamondsArray[i].diamondHitBox);
      this.diamondsArray[i].diamondHitBox.bounce(this.DIAMONDS);
      this.diamondsArray[i].diamondHitBox.bounce(this.OBSTACLES);
    }

    this.HEALTHPACKS = new Group();
    for (let i = 0; i < Math.round(TIMES_PLAYINGFIELD / 6); i++) {
      this.hpArray.push(new Healthpack());
      this.hpArray[i].setup();
      this.HEALTHPACKS.add(this.hpArray[i].hpHitBox);
      this.hpArray[i].hpHitBox.bounce(this.OBSTACLES);
      this.hpArray[i].hpHitBox.bounce(this.DIAMONDS);
    }

    this.CLOCKS = new Group();
    for (let i = 0; i < Math.round(TIMES_PLAYINGFIELD / 10); i++) {
      this.clockArray.push(new Clock());
      this.clockArray[i].setup();
      this.CLOCKS.add(this.clockArray[i].clockHitBox);
      this.clockArray[i].clockHitBox.bounce(this.OBSTACLES);
      this.clockArray[i].clockHitBox.bounce(this.DIAMONDS);
      this.clockArray[i].clockHitBox.bounce(this.HEALTHPACKS);
    }
    this.ROCKETS = new Group();
  }

  draw() {
    this.background.draw();

    drawSprites(this.OBSTACLES);

    this.player.draw();

    this.diamondsArray.forEach(function(diamond) {
      diamond.draw();
    });
    this.hpArray.forEach(function(healthpack) {
      healthpack.draw();
    });
    this.clockArray.forEach(function(clock) {
      clock.draw();
    });

    // readying up rockets every x frames, adjust rocket spawn here
    if (frameCount % 40 === 0) {
      this.rocketsArray.push(new Rocket());
      this.rocketsArray[this.rocketsArray.length - 1].setup();
      this.ROCKETS.add(
        this.rocketsArray[this.rocketsArray.length - 1].rocketHitBox
      );
    }

    // deleting rockets every x frames, adjust if it gets too laggy
    if (frameCount % 300 === 0) {
      this.rocketsArray.shift().rocketHitBox.remove();
    }

    // drawing all active rockets
    this.rocketsArray.forEach(function(rocket) {
      rocket.draw();
    });

    // possible game endings by death or time out
    if (this.player.health === 0) {
      gameOver.play();
      this.over();
    }
    if (frameCount % 60 == 0 && this.timer > 0) {
      this.timer--;
    }
    if (this.timer === 0) {
      gameOver.play();
      this.over();
    }
  }

  over() {
    textSize(80);
    fill("#001F38");
    text("GAME    OVER", camera.position.x - 180, camera.position.y - 30);
    noLoop();
    setInterval(() => location.reload(), 1500);
  }
}
