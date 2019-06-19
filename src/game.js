class Game {
  constructor(color) {
    this.timer = 60;
    this.background = new Background();
    this.player = new Player(color);
    this.obstaclesArray = [];
    this.diamondsArray = [];
    this.hpArray = [];
    this.clockArray = [];
    this.rocketsArray = [];
    this.obstacle = new PresetJ(0); // for testing
  }

  setup() {
    this.background.setup();
    this.player.setup();
    this.OBSTACLES = new Group();

    this.obstacle.setup(); //for testing

    // ############# OBSTACLES #############
    /*
    for (let i = 1; i <= TIMES_PLAYINGFIELD; i++) {
      // one obstacle object per screen starting from second screen
      this.obstaclesArray.push(
        // to have empty screens as well
        [
          // {},
          new PresetA(i),
          new PresetB(
            i
          )  ,
          new PresetC(i),
          new PresetD(i),
          new PresetE(i),
          new PresetF(i),
          new PresetG(i),
          new PresetH(i),
          new PresetI(i),
          new PresetJ(i) 
        ][Math.floor(Math.random() * 2)]
      );
      console.log(this.obstaclesArray);
      // if (this.obstaclesArray[i])
      this.obstaclesArray[i].setup();
    }
    */
    // ############# OBSTACLES #############

    this.DIAMONDS = new Group();
    for (let i = 0; i < TIMES_PLAYINGFIELD * 5; i++) {
      // adjust diamond spawn here
      this.diamondsArray.push(new Diamond());
      this.diamondsArray[i].setup();
      this.DIAMONDS.add(this.diamondsArray[i].diamondHitBox);
      this.diamondsArray[i].diamondHitBox.bounce(this.DIAMONDS); // this makes sure each diamond is bounced off, when placed in same x-y-position as a previously placed diamond
    }
    this.HEALTHPACKS = new Group();
    for (let i = 0; i < Math.round(TIMES_PLAYINGFIELD / 3); i++) {
      // adjust hp spawn here
      this.hpArray.push(new Healthpack());
      this.hpArray[i].setup();
      this.HEALTHPACKS.add(this.hpArray[i].hpHitBox);
      this.hpArray[i].hpHitBox.bounce(this.DIAMONDS); // this makes sure hp are not placed on diamonds
    }
    this.CLOCKS = new Group();
    for (let i = 0; i < Math.round(TIMES_PLAYINGFIELD / 3); i++) {
      // adjust clock spawn here
      this.clockArray.push(new Clock());
      this.clockArray[i].setup();
      this.CLOCKS.add(this.clockArray[i].clockHitBox);
      this.clockArray[i].clockHitBox.bounce(this.HEALTHPACKS); // this makes sure clocks are not placed on health packs
      this.clockArray[i].clockHitBox.bounce(this.DIAMONDS); // this makes sure clocks are not placed on diamonds
    }
    this.ROCKETS = new Group();
  }

  draw() {
    this.background.draw();

    this.player.draw();

    drawSprites(this.OBSTACLES);

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
    if (this.player.health === 0) this.game.over();
    if (frameCount % 60 == 0 && this.timer > 0) {
      this.timer--;
      // console.log(this.timer); // for testing
    }
    if (this.timer === 0) {
      this.game.over();
    }
  }

  over() {
    noLoop();
  }
}
