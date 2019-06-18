class Diamond {
  constructor() {
    this.diamondWidth = 64;
    this.diamondHeight = 64;
    this.diamondColorsArray = ["red", "yellow", "green", "blue"];
    this.diamondColor = this.diamondColorsArray[Math.floor(Math.random() * 4)];
    this.diamondX =
      WIDTH +
      Math.ceil(Math.random() * TIMES_PLAYINGFIELD * WIDTH) -
      this.diamondWidth;
    this.diamondY = 64 + Math.random() * 600;
    // this.points = 5;
  }

  setup() {
    this.diamondHitBox = createSprite(
      this.diamondX,
      this.diamondY,
      this.diamondWidth,
      this.diamondHeight
    );

    this.diamondHitBox.addAnimation(
      "yellow",
      `../assets/Obstacles & Objects/crystals/crystal_${
        this.diamondColor
      }_64x64.png`
    );
    // this.diamondHitBox.points = this.points;

    this.diamondHitBox.setCollider(
      "rectangle",
      0,
      4,
      this.diamondWidth,
      this.diamondHeight - 24
    );

    this.diamondHitBox.debug = true; // remove when finished
  }

  draw() {
    drawSprite();
  }
}
