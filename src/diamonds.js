class Diamond {
  constructor() {
    this.diamondWidth = 64;
    this.diamondHeight = 64;
    this.diamondColorsArray = ["red", "yellow", "green", "blue"];
    this.diamondColor = this.diamondColorsArray[Math.floor(Math.random() * 4)];
    this.diamondX =
      WIDTH +
      Math.ceil(
        Math.random() * TIMES_PLAYINGFIELD * (WIDTH - this.diamondWidth)
      );
    this.diamondY = this.diamondWidth + Math.random() * 600;
  }

  setup() {
    this.diamondHitBox = createSprite(
      this.diamondX,
      this.diamondY,
      this.diamondWidth,
      this.diamondHeight
    );

    this.diamondHitBox.addAnimation(
      "color",
      `assets/Objects/crystals/crystal_${this.diamondColor}_64x64.png`
    );

    this.diamondHitBox.setCollider(
      "rectangle",
      0,
      4,
      this.diamondWidth,
      this.diamondHeight - 24
    );

    this.diamondHitBox.color = this.diamondColor;
  }

  draw() {
    drawSprite(this.diamondHitBox);
    if (frameCount % 3 === 0)
      this.diamondHitBox.displace(game.player.hitBox, (collected, collector) =>
        game.player.collectDiamond(collected)
      );
  }
}
