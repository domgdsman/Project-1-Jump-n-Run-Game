class Rocket {
  constructor() {
    this.randomDirectionArray = [-1, 1];
    this.rocketDirection = this.randomDirectionArray[Math.round(Math.random())];
    this.rocketWidth = 64;
    this.rocketHeight = 44;
    this.rocketX =
      camera.position.x +
      (WIDTH / 2 + Math.random() * WIDTH) * this.rocketDirection;
    this.rocketY = this.rocketHeight + Math.random() * 656;
    this.speed = 5 * this.rocketDirection; // adjust rocket speed here
  }
  setup() {
    this.rocketHitBox = createSprite(
      this.rocketX,
      this.rocketY,
      this.rocketWidth,
      this.rocketHeight
    );
    this.rocketHitBox.setCollider("circle", 0, 0, 18);

    this.rocketHitBox.addAnimation("rotate", rocketRotate);
    this.rocketHitBox.addAnimation("explode", rocketExplosion);

    this.rocketHitBox.damagePotentiale = 0.5;

    this.rocketHitBox.rocketDirection = this.rocketDirection;
  }
  draw() {
    drawSprite(this.rocketHitBox);
    this.rocketHitBox.mirrorX(this.rocketDirection);
    this.rocketHitBox.position.x -= this.speed;
  }
}
