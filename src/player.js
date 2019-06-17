let hitBox;

class Player {
  constructor() {
    this.hitBox = hitBox;
    this.playerWidth = 46;
    this.playerHeight = 52;
    this.playerX = WIDTH / 2;
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
  }

  jump() {
    if (this.hitBox.position.y > 650) jumpCounter = 0; // double jump feature refreshes 40p over ground for fluidity
    if (jumpCounter == 2) return;
    this.velocity = 0;
    this.velocity -= 15;
    jumpCounter++;
    // console.log(jumpCounter); //for testing
  }

  draw() {
    // camera fixed on player x-position and y = centered
    camera.position.x = this.hitBox.position.x;
    camera.position.y = 400;
    if (this.hitBox.position.x <= 600) camera.position.x = 600; // adjust accordingly depending on how long the game field is
    if (this.hitBox.position.x >= SCENE_W + WIDTH / 2)
      camera.position.x = SCENE_W + WIDTH / 2;

    drawSprites();

    // lock the player position inside limited playing field
    if (this.hitBox.position.x < 0) this.hitBox.position.x = 0;
    if (this.hitBox.position.y < 0) this.hitBox.position.y = 0;
    if (this.hitBox.position.x > SCENE_W + WIDTH)
      this.hitBox.position.x = SCENE_W + WIDTH;
    if (this.hitBox.position.y > SCENE_H) this.hitBox.position.y = SCENE_H;

    console.log(this.hitBox.position.y); // for testing
    console.log(this.hitBox.position.x); // for testing

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
      this.hitBox.setSpeed(10, 180);
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.hitBox.mirrorX(1);
      this.hitBox.changeAnimation("run", this.runAnimation);
      this.hitBox.setSpeed(10, 0);
    } else this.hitBox.setSpeed(0);
  }
}
