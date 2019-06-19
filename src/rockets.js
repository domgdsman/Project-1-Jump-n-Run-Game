class Rocket {
  constructor() {
    this.randomDirectionArray = [-1, 1]; // array to choose from
    this.rocketDirection = this.randomDirectionArray[Math.round(Math.random())]; // randomly picks an index to select direction
    this.rocketWidth = 64;
    this.rocketHeight = 44;
    this.rocketX = camera.position.x + (WIDTH / 2) * this.rocketDirection;
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

    this.rocketHitBox.damagePotentiale = 0.5; // makes sure the player is hurt only once by a single rocket

    this.rocketHitBox.rocketDirection = this.rocketDirection;

    // this.rocketHitBox.debug = true; // remove when finished
  }
  draw() {
    drawSprite(this.rocketHitBox);
    this.rocketHitBox.mirrorX(this.rocketDirection); // reverts sprite image direction
    // this.rocketHitBox.position.x -= this.speed;
  }
}
