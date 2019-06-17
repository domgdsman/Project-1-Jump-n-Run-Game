let diamondHitBox;

class Diamond {
  constructor() {
    this.diamondWidth = 64;
    this.diamondHeight = 50;
    this.diamondColor = diamondColorsArray[Math.floor(Math.random() * 4)];
    this.diamondX =
      WIDTH + Math.ceil(Math.random() * TIMES_PLAYINGFIELD * WIDTH);
    this.diamondY = 64 + Math.random() * 600;
    this.diamondHitBox = diamondHitBox;
  }

  setup() {
    this.diamondHitBox = createSprite(
      this.diamondX,
      this.diamondY,
      this.diamondWidth,
      this.diamondHeight
    );
  }

  draw() {
    if (this.diamondColor === "red") {
      image(redDiamond, this.diamondX, this.diamondY);
    } else if (this.diamondColor === "blue") {
      image(blueDiamond, this.diamondX, this.diamondY);
    } else if (this.diamondColor === "green") {
      image(greenDiamond, this.diamondX, this.diamondY);
    } else image(yellowDiamond, this.diamondX, this.diamondY);
  }
}
