let hitBox; // is there another solution? can i put it inside the player object or game object?

class Player {
  constructor() {
    this.hitBox = hitBox;
    this.playerWidth = 46;
    this.playerHeight = 52;
    this.playerX = WIDTH / 6;
    this.playerY = HEIGHT - 96 - this.playerHeight / 2 + 4; // 690: sprites are positioned centered by default + 4 for grass level adjustment
    this.velocity = 8;
  }

  setup() {
    this.hitBox = createSprite(
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );

    // load sprite animations
    this.idleAnimation = this.hitBox.addAnimation("idle", bluePlayerIdle);
    this.runAnimation = this.hitBox.addAnimation("run", bluePlayerRun);
    this.hurtAnimation = this.hitBox.addAnimation("hurt", bluePlayerHurt);
    // this.jumpAnimation = loadAnimation(allPlayersJump);
    // this.landAnimation = loadAnimation(allPlayersLand);
  }

  land() {
    if (this.hitBox.position > 680)
      //adjust landing animation trigger
      animation(
        this.landAnimation,
        this.hitBox.position.x,
        this.hitBox.position.y + this.playerHeight / 2
      );
  }

  jump() {
    if (this.hitBox.position.y > 685) jumpCounter = 0; // double jump feature
    if (jumpCounter == 2) return;
    this.velocity = 0;
    this.velocity -= 15;
    jumpCounter++;
    // console.log(jumpCounter); //for testing
  }

  draw() {
    drawSprites();
    console.log(this.hitBox.position.y); // for testing

    // gravity & velocity components
    this.hitBox.position.y += this.velocity;

    // stop gravity when player reaches ground
    if (this.hitBox.position.y >= 690) {
      this.velocity = 0;
    } else this.velocity += GRAVITY;

    this.hitBox.changeAnimation("idle", this.idleAnimation);

    if (keyIsDown(LEFT_ARROW)) {
      this.hitBox.mirrorX(-1); // reverts sprite image direction
      this.hitBox.changeAnimation("run", this.bluePlayerRun);
      this.hitBox.setSpeed(6, 180);
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.hitBox.mirrorX(1);
      this.hitBox.changeAnimation("run", this.runAnimation);
      this.hitBox.setSpeed(6, 0);
    } else this.hitBox.setSpeed(0);
  }
}
