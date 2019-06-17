let diamondHitBox;
let diamonds;
let points = 5;

function collect(spriteA, spriteB) {
  // add a scoring system dependent on diamond color and player color
  // play a sound for collecting the diamond
  spriteA.score += spriteB.points;
  console.log(spriteA.score);
  spriteB.remove();
}

class Diamond {
  constructor() {
    this.diamondWidth = 64;
    this.diamondHeight = 40;
    this.diamondColor = diamondColorsArray[Math.floor(Math.random() * 4)];
    this.diamondX =
      WIDTH +
      Math.ceil(Math.random() * TIMES_PLAYINGFIELD * WIDTH) -
      this.diamondWidth;
    this.diamondY = 64 + Math.random() * 600;
    this.diamondHitBox = diamondHitBox;
    this.points = points;
  }

  setup() {
    this.diamondHitBox = createSprite(
      this.diamondX,
      this.diamondY,
      this.diamondWidth,
      this.diamondHeight
    );

    this.diamondHitBox.points = this.points;

    game.DIAMONDS.add(this.diamondHitBox); // add sprite to diamonds group

    this.diamondHitBox.setCollider(
      "rectangle",
      0,
      -4,
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
