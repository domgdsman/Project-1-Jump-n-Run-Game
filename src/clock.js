class Clock {
  constructor() {
    this.clockWidth = 64;
    this.clockHeight = 71;
    this.clockX =
      WIDTH +
      Math.ceil(Math.random() * TIMES_PLAYINGFIELD * WIDTH) -
      this.clockWidth;
    this.clockY = this.clockWidth + Math.random() * 600;
  }
  setup() {
    this.clockHitBox = createSprite(
      this.clockX,
      this.clockY,
      this.clockWidth,
      this.clockWidth
    );

    this.clockHitBox.addAnimation("clock", timePlus);

    this.clockHitBox.setCollider("circle", 0, 2, 22);
  }

  draw() {
    drawSprite(this.clockHitBox);
  }
}
