class Player {
  constructor() {
    this.playerWidth = 46;
    this.playerHeight = 52;
    this.playerX = WIDTH / 2;
    this.playerY = HEIGHT - 96 - this.playerHeight / 2 + 4; // 690: sprites are positioned centered by default + 4 for grass level adjustment
    this.velocity = 8;
    this.jumpCounter = 0;
    this.health = 3;
    // add player color to either select from starting screen or change with diamonds collected
    this.score = 0; // add player score to increase on diamond collision
  }

  setup() {
    this.hitBox = createSprite(
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );

    this.hitBox.setCollider(
      // adjust player collider with debug
      "rectangle",
      0,
      0,
      this.playerWidth,
      this.playerHeight
    );

    // load sprite animations
    this.idleAnimation = this.hitBox.addAnimation("idle", bluePlayerIdle);
    this.runAnimation = this.hitBox.addAnimation("run", bluePlayerRun);
    this.hurtAnimation = this.hitBox.addAnimation("hurt", bluePlayerHurt);

    this.hitBox.debug = true; // remove when finished
  }

  jump() {
    if (this.hitBox.position.y > 650) this.jumpCounter = 0; // double jump feature refreshes 40p over ground for fluidity
    if (this.jumpCounter == 2) return;
    this.velocity = 0;
    this.velocity -= 15;
    this.jumpCounter++;
    // console.log(jumpCounter); //for testing
  }

  collect(collected) {
    // add a scoring system dependent on diamond color and player color
    // play a sound for collecting the diamond
    this.score += 1;
    console.log(this.score);
    collected.remove();
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
    if (this.hitBox.position.x < this.playerWidth / 2)
      this.hitBox.position.x = this.playerWidth / 2;
    if (this.hitBox.position.y < 0) this.hitBox.position.y = 0;
    if (this.hitBox.position.x > SCENE_W + WIDTH - this.playerWidth / 2)
      this.hitBox.position.x = SCENE_W + WIDTH - this.playerWidth / 2;
    if (this.hitBox.position.y > SCENE_H) this.hitBox.position.y = SCENE_H;

    // health bar
    if (this.health === 3) image(health30, camera.position.x - width / 2, 0);
    else if (this.health === 2.5)
      image(health25, camera.position.x - width / 2, 0);
    else if (this.health === 2)
      image(health20, camera.position.x - width / 2, 0);
    else if (this.health === 1.5)
      image(health15, camera.position.x - width / 2, 0);
    else if (this.health === 1)
      image(health10, camera.position.x - width / 2, 0);
    else if (this.health === 0.5)
      image(health05, camera.position.x - width / 2, 0);
    else image(health00, camera.position.x - width / 2, 0);

    // console.log(this.hitBox.position.x); // for testing: display player x-position
    // console.log(this.hitBox.position.y); // for testing: display player y-position

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

    this.hitBox.collide(game.DIAMONDS, (collector, collected) =>
      this.collect(collected)
    );
  }
}
