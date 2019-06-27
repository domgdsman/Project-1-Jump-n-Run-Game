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
    this.currentFrame = 0;
    this.objectsPerFrame = [];
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

    // ##### code here #####

    for (let i = 0; i <= TIMES_PLAYINGFIELD; i++) {
      this.objectsPerFrame.push(Object.assign({}));
      this.objectsPerFrame[i].obstacles = this.obstaclesArray.filter(
        obstacle => obstacle.x1 >= i * WIDTH && obstacle.x1 < (i + 1) * WIDTH
      )[0];
      this.objectsPerFrame[i].diamonds = this.diamondsArray.filter(
        diamond =>
          diamond.diamondX >= i * WIDTH && diamond.diamondX < (i + 1) * WIDTH
      );
      this.objectsPerFrame[i].hps = this.hpArray.filter(
        hp => hp.hpX >= i * WIDTH && hp.hpX < (i + 1) * WIDTH
      );
      this.objectsPerFrame[i].clocks = this.clockArray.filter(
        clock => clock.clockX >= i * WIDTH && clock.clockX < (i + 1) * WIDTH
      );
    }

    // ##### code here #####
  }

  draw() {
    // ##### console.log here #####

    // console.log(this.currentFrame);
    // console.log(!!game.objectsPerFrame[game.currentFrame].obstacles);

    // ##### console.log here #####
    this.background.draw();
    // ##### code here #####

    this.currentFrame = Math.floor(camera.position.x / WIDTH);

    for (let i = -1; i <= 1; i++) {
      if (
        this.currentFrame + i > 0 &&
        this.currentFrame + i <= TIMES_PLAYINGFIELD
      ) {
        this.objectsPerFrame[this.currentFrame + i].obstacles.draw();
        this.objectsPerFrame[this.currentFrame + i].diamonds.forEach(function(
          diamond
        ) {
          diamond.draw();
        });
        this.objectsPerFrame[this.currentFrame + i].hps.forEach(function(hp) {
          hp.draw();
        });
        this.objectsPerFrame[this.currentFrame + i].clocks.forEach(function(
          clock
        ) {
          clock.draw();
        });
      }
    }

    // ##### code here #####

    this.player.draw();

    // readying up rockets every x frames, adjust rocket spawn here
    if (frameCount % 30 === 0) {
      this.rocketsArray.push(new Rocket());
      this.rocketsArray[this.rocketsArray.length - 1].setup();
      this.ROCKETS.add(
        this.rocketsArray[this.rocketsArray.length - 1].rocketHitBox
      );
    }

    // deleting rockets
    if (this.rocketsArray.length >= 15) {
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
