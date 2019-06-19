class Healthpack {
  constructor() {
    this.hpWidth = 50;
    this.hpHeight = 48;
    this.hpX =
      WIDTH +
      Math.ceil(Math.random() * TIMES_PLAYINGFIELD * WIDTH) -
      this.hpWidth;
    this.hpY = this.hpWidth + Math.random() * 600;
  }
  setup() {
    this.hpHitBox = createSprite(
      this.hpX,
      this.hpY,
      this.hpWidth,
      this.hpWidth
    );

    this.hpHitBox.addAnimation("heart", healthPack);

    this.hpHitBox.setCollider("circle", 0, -2, 20);
  }

  draw() {
    drawSprite(this.hpHitBox);
  }
}
