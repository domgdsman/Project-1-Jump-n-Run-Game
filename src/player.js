class Player {
  constructor(color) {
    this.playerWidth = 46;
    this.playerHeight = 52;
    this.playerX = WIDTH / 2;
    this.playerY = HEIGHT - 96 - this.playerHeight / 2 + 4;
    this.velocity = 8;
    this.jumpCounter = 0;
    this.health = 3;
    this.score = 0;
    this.color = color;
    this.status = "idle";
    this.onObstacle = false;
  }

  setup() {
    this.hitBox = createSprite(
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );

    this.hitBox.setCollider(
      "rectangle",
      0,
      0,
      this.playerWidth,
      this.playerHeight
    );

    this.idleSpriteSheet = loadSpriteSheet(
      `../assets/Dino Sprites/${this.color}_idle_x4_72x72.png`,
      72,
      72,
      4
    );
    this.runSpriteSheet = loadSpriteSheet(
      `../assets/Dino Sprites/${this.color}_running_x6_72x72.png`,
      72,
      72,
      6
    );
    this.hurtSpriteSheet = loadSpriteSheet(
      `../assets/Dino Sprites/${this.color}_hurt_x4_72x72.png`,
      72,
      72,
      4
    );

    this.idleAnimation = this.hitBox.addAnimation("idle", this.idleSpriteSheet);
    this.runAnimation = this.hitBox.addAnimation("run", this.runSpriteSheet);
    this.hurtAnimation = this.hitBox.addAnimation("hurt", this.hurtSpriteSheet);
  }

  jump() {
    if (this.hitBox.position.y > 650) this.jumpCounter = 0;
    if (this.jumpCounter == 2) return;
    this.velocity = 0;
    this.velocity -= 15;
    this.jumpCounter++;
  }

  collectDiamond(collected) {
    // play a sound for collecting the diamond and display score
    if (this.color === collected.color) {
      this.score += 10;
    } else this.score += 5;
    collected.remove();
  }

  collectHp(collected) {
    collected.remove();
    if (this.health === 3) {
      return;
    } else if (this.health === 2.5) {
      this.health += 0.5;
    } else this.health += 1;
  }

  collectClock(collected) {
    game.timer += 10;
    collected.remove();
  }

  receiveDamage(rocket) {
    rocket.changeAnimation("explode", rocketExplosion);
    this.status = "hurt";

    setTimeout(() => {
      this.status = "idle";
    }, 840);

    this.health -= rocket.damagePotentiale;
    rocket.damagePotentiale = 0;
    this.hitBox.position.x -= 30 * rocket.rocketDirection;
    setTimeout(rocket.remove.bind(rocket), 420);
  }

  draw() {
    drawSprite(this.hitBox);

    // camera fixed on player x-position and y = centered
    camera.position.x = this.hitBox.position.x;
    camera.position.y = 400;
    if (this.hitBox.position.x <= 600) camera.position.x = 600;
    if (this.hitBox.position.x >= SCENE_W + WIDTH / 2)
      camera.position.x = SCENE_W + WIDTH / 2;

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

    // gravity & velocity components
    this.onObstacle = false;
    this.hitBox.position.y += this.velocity;

    // stop gravity when player reaches ground or stands on obstacles
    if (this.hitBox.position.y >= 690) {
      this.velocity = 0;
      this.hitBox.position.y = 690; // reset to ground level
    } else if (this.hitBox.collide(game.OBSTACLES)) {
      this.velocity = 0;
      this.jumpCounter = 0;
    } else this.velocity += GRAVITY;

    this.hitBox.changeAnimation(this.status);

    if (keyIsDown(LEFT_ARROW)) {
      this.hitBox.mirrorX(-1);
      this.hitBox.changeAnimation("run", this.runAnimation);
      this.hitBox.setSpeed(10, 180);
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.hitBox.mirrorX(1);
      this.hitBox.changeAnimation("run", this.runAnimation);
      this.hitBox.setSpeed(10, 0);
    } else this.hitBox.setSpeed(0);

    this.hitBox.collide(game.DIAMONDS, (collector, collected) =>
      this.collectDiamond(collected)
    );

    this.hitBox.collide(game.HEALTHPACKS, (collector, collected) =>
      this.collectHp(collected)
    );

    this.hitBox.collide(game.CLOCKS, (collector, collected) =>
      this.collectHp(collected)
    );

    this.hitBox.collide(game.ROCKETS, (player, rocket) =>
      this.receiveDamage(rocket)
    );
  }
}
