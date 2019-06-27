class Landing {
  constructor() {
    this.blueX = 340;
    this.blueY = 500;
    this.distance = 170;
    this.blueVelocity = 16;
    this.redVelocity = 16;
    this.greenVelocity = 16;
    this.yellowVelocity = 16;
    this.playWasClicked = false;
    this.musicIsLooping = false;
    this.clickToPlaySize = 50;
    this.clickToPlayXPos = 415;
  }
  setup() {
    // sprites
    this.bluePlayer = createSprite(this.blueX, this.blueY, 72, 72);
    this.redPlayer = createSprite(
      this.blueX + this.distance,
      this.blueY,
      72,
      72
    );
    this.greenPlayer = createSprite(
      this.blueX + this.distance * 2,
      this.blueY,
      72,
      72
    );
    this.yellowPlayer = createSprite(
      this.blueX + this.distance * 3,
      this.blueY,
      72,
      72
    );

    this.bluePlayer.addAnimation("idle", blueIdle);
    this.bluePlayer.addAnimation("run", blueRun);
    this.bluePlayer.scale = 1.2;

    this.redPlayer.addAnimation("idle", redIdle);
    this.redPlayer.addAnimation("run", redRun);
    this.redPlayer.scale = 1.2;

    this.greenPlayer.addAnimation("idle", greenIdle);
    this.greenPlayer.addAnimation("run", greenRun);
    this.greenPlayer.scale = 1.2;

    this.yellowPlayer.addAnimation("idle", yellowIdle);
    this.yellowPlayer.addAnimation("run", yellowRun);
    this.yellowPlayer.scale = 1.2;
    textFont(arcadeClassic);
  }

  draw() {
    // console.log(`X:${mouseX}`);
    // console.log(`Y:${mouseY}`);

    // background
    image(landingBg, 0, 0);
    image(landingFloor, 0, 800 - landingFloor.height);

    // grass blocks
    image(lightAmboss, this.blueX - 60, this.blueY + 32);
    image(lightAmboss, this.blueX - 60 + this.distance, this.blueY + 32);
    image(lightAmboss, this.blueX - 60 + this.distance * 2, this.blueY + 32);
    image(lightAmboss, this.blueX - 60 + this.distance * 3, this.blueY + 32);
    push();
    textSize(80);
    fill("#001F38");
    text("Raptor    vs    Rockets", 240, 120);
    pop();

    if (!this.playWasClicked) {
      push();
      textSize(this.clickToPlaySize);
      fill("#DC143C");
      text("click    to    play!", this.clickToPlayXPos, 400);
      pop();
      if (mouseX >= 415 && mouseX <= 790 && mouseY >= 360 && mouseY <= 400) {
        this.clickToPlaySize = 60;
        this.clickToPlayXPos = 380;
      } else {
        this.clickToPlaySize = 50;
        this.clickToPlayXPos = 415;
      }
      if (
        mouseX >= 415 &&
        mouseX <= 790 &&
        mouseY >= 360 &&
        mouseY <= 400 &&
        mouseIsPressed
      ) {
        this.playWasClicked = true;
      }
    }

    if (this.playWasClicked) {
      // music
      if (!this.musicIsLooping) {
        menuMusic.volume(0.2);
        menuMusic.loop();

        push();
        textSize(30);
        fill("#001F38");
        text("Music   ON", width - 150, 35);
        pop();

        if (
          mouseX >= 1050 &&
          mouseX <= 1175 &&
          mouseY >= 15 &&
          mouseY <= 35 &&
          mouseIsPressed
        ) {
          setTimeout(() => {
            this.musicIsLooping = true;
          }, 150);
        }
      } else {
        menuMusic.stop();

        push();
        textSize(30);
        fill("#DC143C");
        text("Music   OFF", width - 160, 35);
        pop();

        if (
          mouseX >= 1050 &&
          mouseX <= 1175 &&
          mouseY >= 15 &&
          mouseY <= 35 &&
          mouseIsPressed
        ) {
          setTimeout(() => {
            this.musicIsLooping = false;
          }, 300);
        }
      }

      push();
      textSize(40);
      fill("#001F38");
      text("Choose   your   Raptor", 410, 380);
      pop();
      drawSprites();

      // gravity & velocity components
      this.bluePlayer.position.y += this.blueVelocity;
      this.redPlayer.position.y += this.redVelocity;
      this.greenPlayer.position.y += this.greenVelocity;
      this.yellowPlayer.position.y += this.yellowVelocity;
      if (this.bluePlayer.position.y >= 500) {
        this.blueVelocity = 0;
        this.bluePlayer.position.y = 500;
      } else this.blueVelocity += GRAVITY;

      if (this.redPlayer.position.y >= 500) {
        this.redVelocity = 0;
        this.redPlayer.position.y = 500;
      } else this.redVelocity += GRAVITY;

      if (this.greenPlayer.position.y >= 500) {
        this.greenVelocity = 0;
        this.greenPlayer.position.y = 500;
      } else this.greenVelocity += GRAVITY;

      if (this.yellowPlayer.position.y >= 500) {
        this.yellowVelocity = 0;
        this.yellowPlayer.position.y = 500;
      } else this.yellowVelocity += GRAVITY;

      // hover over a player
      if (
        mouseX > this.bluePlayer.position.x - this.bluePlayer.width / 2 &&
        mouseX < this.bluePlayer.position.x + this.bluePlayer.width / 2 &&
        mouseY > this.bluePlayer.position.y - this.bluePlayer.height / 2 &&
        mouseY < this.bluePlayer.position.y + this.bluePlayer.height / 2
      ) {
        this.bluePlayer.changeAnimation("run");
      } else this.bluePlayer.changeAnimation("idle");
      if (
        mouseX > this.redPlayer.position.x - this.redPlayer.width / 2 &&
        mouseX < this.redPlayer.position.x + this.redPlayer.width / 2 &&
        mouseY > this.redPlayer.position.y - this.redPlayer.height / 2 &&
        mouseY < this.redPlayer.position.y + this.redPlayer.height / 2
      ) {
        this.redPlayer.changeAnimation("run");
      } else this.redPlayer.changeAnimation("idle");
      if (
        mouseX > this.greenPlayer.position.x - this.greenPlayer.width / 2 &&
        mouseX < this.greenPlayer.position.x + this.greenPlayer.width / 2 &&
        mouseY > this.greenPlayer.position.y - this.greenPlayer.height / 2 &&
        mouseY < this.greenPlayer.position.y + this.greenPlayer.height / 2
      ) {
        this.greenPlayer.changeAnimation("run");
      } else this.greenPlayer.changeAnimation("idle");
      if (
        mouseX > this.yellowPlayer.position.x - this.yellowPlayer.width / 2 &&
        mouseX < this.yellowPlayer.position.x + this.yellowPlayer.width / 2 &&
        mouseY > this.yellowPlayer.position.y - this.yellowPlayer.height / 2 &&
        mouseY < this.yellowPlayer.position.y + this.yellowPlayer.height / 2
      ) {
        this.yellowPlayer.changeAnimation("run");
      } else this.yellowPlayer.changeAnimation("idle");

      // select a player and start the game
      if (
        mouseX > this.bluePlayer.position.x - this.bluePlayer.width / 2 &&
        mouseX < this.bluePlayer.position.x + this.bluePlayer.width / 2 &&
        mouseY > this.bluePlayer.position.y - this.bluePlayer.height / 2 &&
        mouseY < this.bluePlayer.position.y + this.bluePlayer.height / 2 &&
        mouseIsPressed
      ) {
        selectPlayer.play();
        this.blueVelocity = 0;
        this.blueVelocity -= 8;
        game = new Game("blue");
        game.setup();
        setTimeout(() => {
          PAGE = "game";
        }, 1000);
      }
      if (
        mouseX > this.redPlayer.position.x - this.redPlayer.width / 2 &&
        mouseX < this.redPlayer.position.x + this.redPlayer.width / 2 &&
        mouseY > this.redPlayer.position.y - this.redPlayer.height / 2 &&
        mouseY < this.redPlayer.position.y + this.redPlayer.height / 2 &&
        mouseIsPressed
      ) {
        selectPlayer.play();
        this.redVelocity = 0;
        this.redVelocity -= 8;
        game = new Game("red");
        game.setup();
        setTimeout(() => {
          PAGE = "game";
        }, 1000);
      }
      if (
        mouseX > this.greenPlayer.position.x - this.greenPlayer.width / 2 &&
        mouseX < this.greenPlayer.position.x + this.greenPlayer.width / 2 &&
        mouseY > this.greenPlayer.position.y - this.greenPlayer.height / 2 &&
        mouseY < this.greenPlayer.position.y + this.greenPlayer.height / 2 &&
        mouseIsPressed
      ) {
        selectPlayer.play();
        this.greenVelocity = 0;
        this.greenVelocity -= 8;
        game = new Game("green");
        game.setup();
        setTimeout(() => {
          PAGE = "game";
        }, 1000);
      }
      if (
        mouseX > this.yellowPlayer.position.x - this.yellowPlayer.width / 2 &&
        mouseX < this.yellowPlayer.position.x + this.yellowPlayer.width / 2 &&
        mouseY > this.yellowPlayer.position.y - this.yellowPlayer.height / 2 &&
        mouseY < this.yellowPlayer.position.y + this.yellowPlayer.height / 2 &&
        mouseIsPressed
      ) {
        selectPlayer.play();
        this.yellowVelocity = 0;
        this.yellowVelocity -= 8;
        game = new Game("yellow");
        game.setup();
        setTimeout(() => {
          PAGE = "game";
        }, 1000);
      }
    }
  }
}
