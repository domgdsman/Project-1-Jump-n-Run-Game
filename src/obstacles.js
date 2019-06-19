class PresetA {
  constructor(screenNumber) {
    this.x1 = 334 + screenNumber * WIDTH;
    this.y1 = 486;
    this.width1 = 168;
    this.height1 = 72;
    this.x2 = this.x1 + 100 + 168;
    this.y2 = 486;
    this.width2 = 168;
    this.height2 = 72;
    this.x3 = this.x1 + (100 + 168) * 2;
    this.y3 = 486;
    this.width3 = 168;
    this.height3 = 72;
  }

  setup() {
    // load sprites
    this.obstacleHitBoxOne = createSprite(
      this.x1,
      this.y1,
      this.width1,
      this.height1
    );

    this.obstacleHitBoxTwo = createSprite(
      this.x2,
      this.y2,
      this.width2,
      this.height2
    );
    this.obstacleHitBoxThree = createSprite(
      this.x3,
      this.y3,
      this.width3,
      this.height3
    );

    // load sprite animations
    this.obstacleHitBoxOne.addAnimation("el", darkAmboss);
    this.obstacleHitBoxTwo.addAnimation("el", darkAmboss);
    this.obstacleHitBoxThree.addAnimation("el", darkAmboss);

    // set colliders
    this.obstacleHitBoxOne.setCollider("rectangle", 0, 0, 166, 70);
    this.obstacleHitBoxTwo.setCollider("rectangle", 0, 0, 166, 70);
    this.obstacleHitBoxThree.setCollider("rectangle", 0, 0, 166, 70);

    //  debugger
    this.obstacleHitBoxOne.debug = true; // for testing
    this.obstacleHitBoxTwo.debug = true; // for testing
    this.obstacleHitBoxThree.debug = true; // for testing

    // add sprites to global group
    game.OBSTACLES.add(this.obstacleHitBoxOne);
    game.OBSTACLES.add(this.obstacleHitBoxTwo);
    game.OBSTACLES.add(this.obstacleHitBoxThree);
  }
}

class PresetB {
  constructor(screenNumber) {
    this.x1 = 130 + screenNumber * WIDTH;
    this.y1 = 550;
    this.width1 = 48;
    this.height1 = 48;
    this.x2 = this.x1 + 120;
    this.y2 = this.y1 - 75;
    this.width2 = 48;
    this.height2 = 48;
    this.x3 = this.x2 + 150;
    this.y3 = this.y2 - 80;
    this.width3 = 72;
    this.height3 = 72;
    this.x4 = this.x3 + 200;
    this.y4 = this.y3 - 50;
    this.width4 = 72;
    this.height4 = 168;
    this.x5 = this.x4 + 230;
    this.y5 = this.y4 + 50;
    this.width5 = 120;
    this.height5 = 72;
    this.x6 = this.x5 + 250;
    this.y6 = this.y5 + 150;
    this.width6 = 48;
    this.height6 = 48;
  }

  setup() {
    // load sprites
    this.obstacleHitBoxOne = createSprite(
      this.x1,
      this.y1,
      this.width1,
      this.height1
    );

    this.obstacleHitBoxTwo = createSprite(
      this.x2,
      this.y2,
      this.width2,
      this.height2
    );
    this.obstacleHitBoxThree = createSprite(
      this.x3,
      this.y3,
      this.width3,
      this.height3
    );
    this.obstacleHitBoxFour = createSprite(
      this.x4,
      this.y4,
      this.width4,
      this.height4
    );
    this.obstacleHitBoxFive = createSprite(
      this.x5,
      this.y5,
      this.width5,
      this.height5
    );
    this.obstacleHitBoxSix = createSprite(
      this.x6,
      this.y6,
      this.width6,
      this.height6
    );

    // load sprite animations
    this.obstacleHitBoxOne.addAnimation("el", smallBlock);
    this.obstacleHitBoxTwo.addAnimation("el", smallBlock);
    this.obstacleHitBoxThree.addAnimation("el", bigBlock);
    this.obstacleHitBoxFour.addAnimation("el", darkAmbossVert);
    this.obstacleHitBoxFive.addAnimation("el", lightAmboss);
    this.obstacleHitBoxSix.addAnimation("el", darkAmbossVert);

    // set colliders
    this.obstacleHitBoxOne.setCollider("rectangle", 0, 0, 48, 48);
    this.obstacleHitBoxTwo.setCollider("rectangle", 0, 0, 48, 48);
    this.obstacleHitBoxThree.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxFour.setCollider("rectangle", 0, 0, 72, 168);
    this.obstacleHitBoxFive.setCollider("rectangle", 0, 0, 120, 72);
    this.obstacleHitBoxSix.setCollider("rectangle", 0, 0, 72, 168);

    //  debugger
    this.obstacleHitBoxOne.debug = true; // for testing
    this.obstacleHitBoxTwo.debug = true; // for testing
    this.obstacleHitBoxThree.debug = true; // for testing
    this.obstacleHitBoxFour.debug = true; // for testing
    this.obstacleHitBoxFive.debug = true; // for testing
    this.obstacleHitBoxSix.debug = true; // for testing

    // add sprites to global group
    game.OBSTACLES.add(this.obstacleHitBoxOne);
    game.OBSTACLES.add(this.obstacleHitBoxTwo);
    game.OBSTACLES.add(this.obstacleHitBoxThree);
    game.OBSTACLES.add(this.obstacleHitBoxFour);
    game.OBSTACLES.add(this.obstacleHitBoxFive);
    game.OBSTACLES.add(this.obstacleHitBoxSix);
  }
}

class PresetC {
  constructor(screenNumber) {
    this.x1 = 200 + screenNumber * WIDTH;
    this.y1 = 500;
    this.width1 = 120;
    this.height1 = 72;
    this.x2 = this.x1 + 200;
    this.y2 = this.y1 - 100;
    this.width2 = 120;
    this.height2 = 72;
    this.x3 = this.x2 + 200;
    this.y3 = this.y2 - 100;
    this.width3 = 120;
    this.height3 = 72;
    this.x4 = this.x3 + 200;
    this.y4 = this.y3 + 100;
    this.width4 = 120;
    this.height4 = 72;
    this.x5 = this.x4 + 200;
    this.y5 = this.y4 + 100;
    this.width5 = 120;
    this.height5 = 72;
  }

  setup() {
    // load sprites
    this.obstacleHitBoxOne = createSprite(
      this.x1,
      this.y1,
      this.width1,
      this.height1
    );

    this.obstacleHitBoxTwo = createSprite(
      this.x2,
      this.y2,
      this.width2,
      this.height2
    );
    this.obstacleHitBoxThree = createSprite(
      this.x3,
      this.y3,
      this.width3,
      this.height3
    );
    this.obstacleHitBoxFour = createSprite(
      this.x4,
      this.y4,
      this.width4,
      this.height4
    );
    this.obstacleHitBoxFive = createSprite(
      this.x5,
      this.y5,
      this.width5,
      this.height5
    );

    // load sprite animations
    this.obstacleHitBoxOne.addAnimation("el", lightAmboss);
    this.obstacleHitBoxTwo.addAnimation("el", lightAmboss);
    this.obstacleHitBoxThree.addAnimation("el", lightAmboss);
    this.obstacleHitBoxFour.addAnimation("el", lightAmboss);
    this.obstacleHitBoxFive.addAnimation("el", lightAmboss);

    // set colliders
    this.obstacleHitBoxOne.setCollider("rectangle", 0, 0, 120, 72);
    this.obstacleHitBoxTwo.setCollider("rectangle", 0, 0, 120, 72);
    this.obstacleHitBoxThree.setCollider("rectangle", 0, 0, 120, 72);
    this.obstacleHitBoxFour.setCollider("rectangle", 0, 0, 120, 72);
    this.obstacleHitBoxFive.setCollider("rectangle", 0, 0, 120, 72);

    //  debugger
    this.obstacleHitBoxOne.debug = true; // for testing
    this.obstacleHitBoxTwo.debug = true; // for testing
    this.obstacleHitBoxThree.debug = true; // for testing
    this.obstacleHitBoxFour.debug = true; // for testing
    this.obstacleHitBoxFive.debug = true; // for testing

    // add sprites to global group
    game.OBSTACLES.add(this.obstacleHitBoxOne);
    game.OBSTACLES.add(this.obstacleHitBoxTwo);
    game.OBSTACLES.add(this.obstacleHitBoxThree);
    game.OBSTACLES.add(this.obstacleHitBoxFour);
    game.OBSTACLES.add(this.obstacleHitBoxFive);
  }
}

/*
class presetFour {}
image(darkAmbossVert, 200, 400);
image(lightAmboss, 350, 500);
image(lightAmboss, 350 + lightAmboss.width, 500);
image(darkAmbossVert, 700, 400);
image(darkAmbossVert, 1000, 550);
image(darkAmbossVert, 1000, 550 - darkAmbossVert.height);
image(darkAmbossVert, 1000, 550 - darkAmbossVert.height * 2);
*/

class PresetD {
  constructor(screenNumber) {
    this.x1 = 120 + screenNumber * WIDTH;
    this.y1 = 450;
    this.width1 = 72;
    this.height1 = 168;
    this.x2 = this.x1 + 220;
    this.y2 = this.y1 + 50;
    this.width2 = 120;
    this.height2 = 72;
    this.x3 = this.x2 + 120;
    this.y3 = this.y2;
    this.width3 = 120;
    this.height3 = 72;
    this.x4 = this.x3 + 220;
    this.y4 = this.y3 - 50;
    this.width4 = 72;
    this.height4 = 168;
    this.x5 = this.x4 + 350;
    this.y5 = this.y4 + 180;
    this.width5 = 72;
    this.height5 = 168;
    this.x6 = this.x5;
    this.y6 = this.y5 - 168;
    this.width6 = 72;
    this.height6 = 168;
    this.x7 = this.x6;
    this.y7 = this.y6 - 168;
    this.width7 = 72;
    this.height7 = 168;
  }

  setup() {
    // load sprites
    this.obstacleHitBoxOne = createSprite(
      this.x1,
      this.y1,
      this.width1,
      this.height1
    );

    this.obstacleHitBoxTwo = createSprite(
      this.x2,
      this.y2,
      this.width2,
      this.height2
    );
    this.obstacleHitBoxThree = createSprite(
      this.x3,
      this.y3,
      this.width3,
      this.height3
    );
    this.obstacleHitBoxFour = createSprite(
      this.x4,
      this.y4,
      this.width4,
      this.height4
    );
    this.obstacleHitBoxFive = createSprite(
      this.x5,
      this.y5,
      this.width5,
      this.height5
    );
    this.obstacleHitBoxSix = createSprite(
      this.x6,
      this.y6,
      this.width6,
      this.height6
    );
    this.obstacleHitBoxSeven = createSprite(
      this.x7,
      this.y7,
      this.width7,
      this.height7
    );

    // load sprite animations
    this.obstacleHitBoxOne.addAnimation("el", darkAmbossVert);
    this.obstacleHitBoxTwo.addAnimation("el", lightAmboss);
    this.obstacleHitBoxThree.addAnimation("el", lightAmboss);
    this.obstacleHitBoxFour.addAnimation("el", darkAmbossVert);
    this.obstacleHitBoxFive.addAnimation("el", darkAmbossVert);
    this.obstacleHitBoxSix.addAnimation("el", darkAmbossVert);
    this.obstacleHitBoxSeven.addAnimation("el", darkAmbossVert);

    // set colliders
    this.obstacleHitBoxOne.setCollider("rectangle", 0, 0, 72, 168);
    this.obstacleHitBoxTwo.setCollider("rectangle", 0, 0, 120, 72);
    this.obstacleHitBoxThree.setCollider("rectangle", 0, 0, 120, 72);
    this.obstacleHitBoxFour.setCollider("rectangle", 0, 0, 72, 168);
    this.obstacleHitBoxFive.setCollider("rectangle", 0, 0, 72, 168);
    this.obstacleHitBoxSix.setCollider("rectangle", 0, 0, 72, 168);
    this.obstacleHitBoxSeven.setCollider("rectangle", 0, 0, 72, 168);

    //  debugger
    this.obstacleHitBoxOne.debug = true; // for testing
    this.obstacleHitBoxTwo.debug = true; // for testing
    this.obstacleHitBoxThree.debug = true; // for testing
    this.obstacleHitBoxFour.debug = true; // for testing
    this.obstacleHitBoxFive.debug = true; // for testing
    this.obstacleHitBoxSix.debug = true; // for testing
    this.obstacleHitBoxSeven.debug = true; // for testing

    // add sprites to global group
    game.OBSTACLES.add(this.obstacleHitBoxOne);
    game.OBSTACLES.add(this.obstacleHitBoxTwo);
    game.OBSTACLES.add(this.obstacleHitBoxThree);
    game.OBSTACLES.add(this.obstacleHitBoxFour);
    game.OBSTACLES.add(this.obstacleHitBoxFive);
    game.OBSTACLES.add(this.obstacleHitBoxSix);
    game.OBSTACLES.add(this.obstacleHitBoxSeven);
  }
}

class PresetE {
  constructor(screenNumber) {
    this.x1 = 350 + screenNumber * WIDTH;
    this.y1 = 550;
    this.width1 = 168;
    this.height1 = 72;
    this.x2 = this.x1;
    this.y2 = this.y1 - 300;
    this.width2 = 168;
    this.height2 = 72;
    this.x3 = this.x2 + 168;
    this.y3 = this.y2 + 300;
    this.width3 = 168;
    this.height3 = 72;
    this.x4 = this.x3;
    this.y4 = this.y3 - 300;
    this.width4 = 168;
    this.height4 = 72;
    this.x5 = this.x4 + 168;
    this.y5 = this.y4 + 300;
    this.width5 = 168;
    this.height5 = 72;
    this.x6 = this.x5;
    this.y6 = this.y5 - 300;
    this.width6 = 168;
    this.height6 = 72;
    this.x7 = this.x6 + 168;
    this.y7 = this.y6 + 300;
    this.width7 = 168;
    this.height7 = 72;
    this.x8 = this.x7;
    this.y8 = this.y7 - 300;
    this.width8 = 168;
    this.height8 = 72;
    this.x9 = this.x1 + 100;
    this.y9 = this.y1 - 80;
    this.width9 = 72;
    this.height9 = 72;
    this.x10 = this.x9 + 300;
    this.y10 = this.y9 - 140;
    this.width10 = 72;
    this.height10 = 72;
  }

  setup() {
    // load sprites
    this.obstacleHitBoxOne = createSprite(
      this.x1,
      this.y1,
      this.width1,
      this.height1
    );

    this.obstacleHitBoxTwo = createSprite(
      this.x2,
      this.y2,
      this.width2,
      this.height2
    );
    this.obstacleHitBoxThree = createSprite(
      this.x3,
      this.y3,
      this.width3,
      this.height3
    );
    this.obstacleHitBoxFour = createSprite(
      this.x4,
      this.y4,
      this.width4,
      this.height4
    );
    this.obstacleHitBoxFive = createSprite(
      this.x5,
      this.y5,
      this.width5,
      this.height5
    );
    this.obstacleHitBoxSix = createSprite(
      this.x6,
      this.y6,
      this.width6,
      this.height6
    );
    this.obstacleHitBoxSeven = createSprite(
      this.x7,
      this.y7,
      this.width7,
      this.height7
    );
    this.obstacleHitBoxEight = createSprite(
      this.x8,
      this.y8,
      this.width8,
      this.height8
    );
    this.obstacleHitBoxNine = createSprite(
      this.x9,
      this.y9,
      this.width9,
      this.height9
    );
    this.obstacleHitBoxTen = createSprite(
      this.x10,
      this.y10,
      this.width10,
      this.height10
    );

    // load sprite animations
    this.obstacleHitBoxOne.addAnimation("el", darkAmboss);
    this.obstacleHitBoxTwo.addAnimation("el", darkAmboss);
    this.obstacleHitBoxThree.addAnimation("el", darkAmboss);
    this.obstacleHitBoxFour.addAnimation("el", darkAmboss);
    this.obstacleHitBoxFive.addAnimation("el", darkAmboss);
    this.obstacleHitBoxSix.addAnimation("el", darkAmboss);
    this.obstacleHitBoxSeven.addAnimation("el", darkAmboss);
    this.obstacleHitBoxEight.addAnimation("el", darkAmboss);
    this.obstacleHitBoxNine.addAnimation("el", bigBlock);
    this.obstacleHitBoxTen.addAnimation("el", bigBlock);

    // set colliders
    this.obstacleHitBoxOne.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxTwo.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxThree.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxFour.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxFive.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxSix.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxSeven.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxEight.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxNine.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxTen.setCollider("rectangle", 0, 0, 72, 72);

    //  debugger
    this.obstacleHitBoxOne.debug = true; // for testing
    this.obstacleHitBoxTwo.debug = true; // for testing
    this.obstacleHitBoxThree.debug = true; // for testing
    this.obstacleHitBoxFour.debug = true; // for testing
    this.obstacleHitBoxFive.debug = true; // for testing
    this.obstacleHitBoxSix.debug = true; // for testing
    this.obstacleHitBoxSeven.debug = true; // for testing
    this.obstacleHitBoxEight.debug = true; // for testing
    this.obstacleHitBoxNine.debug = true; // for testing
    this.obstacleHitBoxTen.debug = true; // for testing

    // add sprites to global group
    game.OBSTACLES.add(this.obstacleHitBoxOne);
    game.OBSTACLES.add(this.obstacleHitBoxTwo);
    game.OBSTACLES.add(this.obstacleHitBoxThree);
    game.OBSTACLES.add(this.obstacleHitBoxFour);
    game.OBSTACLES.add(this.obstacleHitBoxFive);
    game.OBSTACLES.add(this.obstacleHitBoxSix);
    game.OBSTACLES.add(this.obstacleHitBoxSeven);
    game.OBSTACLES.add(this.obstacleHitBoxEight);
    game.OBSTACLES.add(this.obstacleHitBoxNine);
    game.OBSTACLES.add(this.obstacleHitBoxTen);
  }
}

class PresetF {
  constructor(screenNumber) {
    this.x1 = 200 + screenNumber * WIDTH;
    this.y1 = 550;
    this.width1 = 72;
    this.height1 = 72;
    this.x2 = this.x1;
    this.y2 = this.y1 - 300;
    this.width2 = 72;
    this.height2 = 72;
    this.x3 = this.x2 + 200;
    this.y3 = this.y2 + 300;
    this.width3 = 72;
    this.height3 = 72;
    this.x4 = this.x3;
    this.y4 = this.y3 - 300;
    this.width4 = 72;
    this.height4 = 72;
    this.x5 = this.x4 + 200;
    this.y5 = this.y4 + 300;
    this.width5 = 72;
    this.height5 = 72;
    this.x6 = this.x5;
    this.y6 = this.y5 - 300;
    this.width6 = 72;
    this.height6 = 72;
    this.x7 = this.x6 + 200;
    this.y7 = this.y6 + 300;
    this.width7 = 72;
    this.height7 = 72;
    this.x8 = this.x7;
    this.y8 = this.y7 - 300;
    this.width8 = 72;
    this.height8 = 72;
    this.x9 = this.x8 + 200;
    this.y9 = this.y8 + 300;
    this.width9 = 72;
    this.height9 = 72;
    this.x10 = this.x9;
    this.y10 = this.y9 - 300;
    this.width10 = 72;
    this.height10 = 72;
  }

  setup() {
    // load sprites
    this.obstacleHitBoxOne = createSprite(
      this.x1,
      this.y1,
      this.width1,
      this.height1
    );

    this.obstacleHitBoxTwo = createSprite(
      this.x2,
      this.y2,
      this.width2,
      this.height2
    );
    this.obstacleHitBoxThree = createSprite(
      this.x3,
      this.y3,
      this.width3,
      this.height3
    );
    this.obstacleHitBoxFour = createSprite(
      this.x4,
      this.y4,
      this.width4,
      this.height4
    );
    this.obstacleHitBoxFive = createSprite(
      this.x5,
      this.y5,
      this.width5,
      this.height5
    );
    this.obstacleHitBoxSix = createSprite(
      this.x6,
      this.y6,
      this.width6,
      this.height6
    );
    this.obstacleHitBoxSeven = createSprite(
      this.x7,
      this.y7,
      this.width7,
      this.height7
    );
    this.obstacleHitBoxEight = createSprite(
      this.x8,
      this.y8,
      this.width8,
      this.height8
    );
    this.obstacleHitBoxNine = createSprite(
      this.x9,
      this.y9,
      this.width9,
      this.height9
    );
    this.obstacleHitBoxTen = createSprite(
      this.x10,
      this.y10,
      this.width10,
      this.height10
    );

    // load sprite animations
    this.obstacleHitBoxOne.addAnimation("el", bigBlock);
    this.obstacleHitBoxTwo.addAnimation("el", bigBlock);
    this.obstacleHitBoxThree.addAnimation("el", bigBlock);
    this.obstacleHitBoxFour.addAnimation("el", bigBlock);
    this.obstacleHitBoxFive.addAnimation("el", bigBlock);
    this.obstacleHitBoxSix.addAnimation("el", bigBlock);
    this.obstacleHitBoxSeven.addAnimation("el", bigBlock);
    this.obstacleHitBoxEight.addAnimation("el", bigBlock);
    this.obstacleHitBoxNine.addAnimation("el", bigBlock);
    this.obstacleHitBoxTen.addAnimation("el", bigBlock);

    // set colliders
    this.obstacleHitBoxOne.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxTwo.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxThree.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxFour.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxFive.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxSix.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxSeven.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxEight.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxNine.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxTen.setCollider("rectangle", 0, 0, 72, 72);

    //  debugger
    this.obstacleHitBoxOne.debug = true; // for testing
    this.obstacleHitBoxTwo.debug = true; // for testing
    this.obstacleHitBoxThree.debug = true; // for testing
    this.obstacleHitBoxFour.debug = true; // for testing
    this.obstacleHitBoxFive.debug = true; // for testing
    this.obstacleHitBoxSix.debug = true; // for testing
    this.obstacleHitBoxSeven.debug = true; // for testing
    this.obstacleHitBoxEight.debug = true; // for testing
    this.obstacleHitBoxNine.debug = true; // for testing
    this.obstacleHitBoxTen.debug = true; // for testing

    // add sprites to global group
    game.OBSTACLES.add(this.obstacleHitBoxOne);
    game.OBSTACLES.add(this.obstacleHitBoxTwo);
    game.OBSTACLES.add(this.obstacleHitBoxThree);
    game.OBSTACLES.add(this.obstacleHitBoxFour);
    game.OBSTACLES.add(this.obstacleHitBoxFive);
    game.OBSTACLES.add(this.obstacleHitBoxSix);
    game.OBSTACLES.add(this.obstacleHitBoxSeven);
    game.OBSTACLES.add(this.obstacleHitBoxEight);
    game.OBSTACLES.add(this.obstacleHitBoxNine);
    game.OBSTACLES.add(this.obstacleHitBoxTen);
  }
}

class PresetG {
  constructor(screenNumber) {
    this.x1 = 300 + screenNumber * WIDTH;
    this.y1 = 60;
    this.width1 = 72;
    this.height1 = 120;
    this.x2 = this.x1;
    this.y2 = this.y1 + 120;
    this.width2 = 72;
    this.height2 = 120;
    this.x3 = this.x2;
    this.y3 = this.y2 + 120;
    this.width3 = 72;
    this.height3 = 120;
    this.x4 = this.x3 + 300;
    this.y4 = this.y3 + 112;
    this.width4 = 72;
    this.height4 = 120;
    this.x5 = this.x4;
    this.y5 = this.y4 + 120;
    this.width5 = 72;
    this.height5 = 120;
    this.x6 = this.x5;
    this.y6 = this.y5 + 120;
    this.width6 = 72;
    this.height6 = 120;
    this.x7 = this.x1 + 600;
    this.y7 = this.y1;
    this.width7 = 72;
    this.height7 = 120;
    this.x8 = this.x7;
    this.y8 = this.y7 + 120;
    this.width8 = 72;
    this.height8 = 120;
    this.x9 = this.x8;
    this.y9 = this.y8 + 120;
    this.width9 = 72;
    this.height9 = 120;
  }

  setup() {
    // load sprites
    this.obstacleHitBoxOne = createSprite(
      this.x1,
      this.y1,
      this.width1,
      this.height1
    );

    this.obstacleHitBoxTwo = createSprite(
      this.x2,
      this.y2,
      this.width2,
      this.height2
    );
    this.obstacleHitBoxThree = createSprite(
      this.x3,
      this.y3,
      this.width3,
      this.height3
    );
    this.obstacleHitBoxFour = createSprite(
      this.x4,
      this.y4,
      this.width4,
      this.height4
    );
    this.obstacleHitBoxFive = createSprite(
      this.x5,
      this.y5,
      this.width5,
      this.height5
    );
    this.obstacleHitBoxSix = createSprite(
      this.x6,
      this.y6,
      this.width6,
      this.height6
    );
    this.obstacleHitBoxSeven = createSprite(
      this.x7,
      this.y7,
      this.width7,
      this.height7
    );
    this.obstacleHitBoxEight = createSprite(
      this.x8,
      this.y8,
      this.width8,
      this.height8
    );
    this.obstacleHitBoxNine = createSprite(
      this.x9,
      this.y9,
      this.width9,
      this.height9
    );

    // load sprite animations
    this.obstacleHitBoxOne.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxTwo.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxThree.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxFour.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxFive.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxSix.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxSeven.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxEight.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxNine.addAnimation("el", lightAmbossVert);

    // set colliders
    this.obstacleHitBoxOne.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxTwo.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxThree.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxFour.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxFive.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxSix.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxSeven.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxEight.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxNine.setCollider("rectangle", 0, 0, 72, 120);

    //  debugger
    this.obstacleHitBoxOne.debug = true; // for testing
    this.obstacleHitBoxTwo.debug = true; // for testing
    this.obstacleHitBoxThree.debug = true; // for testing
    this.obstacleHitBoxFour.debug = true; // for testing
    this.obstacleHitBoxFive.debug = true; // for testing
    this.obstacleHitBoxSix.debug = true; // for testing
    this.obstacleHitBoxSeven.debug = true; // for testing
    this.obstacleHitBoxEight.debug = true; // for testing
    this.obstacleHitBoxNine.debug = true; // for testing

    // add sprites to global group
    game.OBSTACLES.add(this.obstacleHitBoxOne);
    game.OBSTACLES.add(this.obstacleHitBoxTwo);
    game.OBSTACLES.add(this.obstacleHitBoxThree);
    game.OBSTACLES.add(this.obstacleHitBoxFour);
    game.OBSTACLES.add(this.obstacleHitBoxFive);
    game.OBSTACLES.add(this.obstacleHitBoxSix);
    game.OBSTACLES.add(this.obstacleHitBoxSeven);
    game.OBSTACLES.add(this.obstacleHitBoxEight);
    game.OBSTACLES.add(this.obstacleHitBoxNine);
  }
}

class PresetH {
  constructor(screenNumber) {
    this.x1 = 200 + screenNumber * WIDTH;
    this.y1 = 400;
    this.width1 = 168;
    this.height1 = 72;
    this.x2 = this.x1 + 120;
    this.y2 = this.y1;
    this.width2 = 72;
    this.height2 = 72;
    this.x3 = this.x2 + 120;
    this.y3 = this.y2;
    this.width3 = 168;
    this.height3 = 72;
    this.x4 = this.x3 + 350;
    this.y4 = this.y3;
    this.width4 = 168;
    this.height4 = 72;
    this.x5 = this.x4 + 100;
    this.y5 = this.y4;
    this.width5 = 72;
    this.height5 = 72;
    this.x6 = this.x5 + 120;
    this.y6 = this.y5;
    this.width6 = 168;
    this.height6 = 72;
    this.x7 = this.x2;
    this.y7 = this.y2 + 120;
    this.width7 = 72;
    this.height7 = 168;
    this.x8 = this.x7;
    this.y8 = this.y7 - 240;
    this.width8 = 72;
    this.height8 = 168;
    this.x9 = this.x8 + 570;
    this.y9 = this.y8;
    this.width9 = 72;
    this.height9 = 168;
    this.x10 = this.x9;
    this.y10 = this.y9 + 240;
    this.width10 = 72;
    this.height10 = 168;
  }

  setup() {
    // load sprites
    this.obstacleHitBoxOne = createSprite(
      this.x1,
      this.y1,
      this.width1,
      this.height1
    );

    this.obstacleHitBoxTwo = createSprite(
      this.x2,
      this.y2,
      this.width2,
      this.height2
    );
    this.obstacleHitBoxThree = createSprite(
      this.x3,
      this.y3,
      this.width3,
      this.height3
    );
    this.obstacleHitBoxFour = createSprite(
      this.x4,
      this.y4,
      this.width4,
      this.height4
    );
    this.obstacleHitBoxFive = createSprite(
      this.x5,
      this.y5,
      this.width5,
      this.height5
    );
    this.obstacleHitBoxSix = createSprite(
      this.x6,
      this.y6,
      this.width6,
      this.height6
    );
    this.obstacleHitBoxSeven = createSprite(
      this.x7,
      this.y7,
      this.width7,
      this.height7
    );
    this.obstacleHitBoxEight = createSprite(
      this.x8,
      this.y8,
      this.width8,
      this.height8
    );
    this.obstacleHitBoxNine = createSprite(
      this.x9,
      this.y9,
      this.width9,
      this.height9
    );
    this.obstacleHitBoxTen = createSprite(
      this.x10,
      this.y10,
      this.width10,
      this.height10
    );

    // load sprite animations
    this.obstacleHitBoxOne.addAnimation("el", darkAmboss);
    this.obstacleHitBoxTwo.addAnimation("el", bigBlock);
    this.obstacleHitBoxThree.addAnimation("el", darkAmboss);
    this.obstacleHitBoxFour.addAnimation("el", darkAmboss);
    this.obstacleHitBoxFive.addAnimation("el", bigBlock);
    this.obstacleHitBoxSix.addAnimation("el", darkAmboss);
    this.obstacleHitBoxSeven.addAnimation("el", darkAmbossVert);
    this.obstacleHitBoxEight.addAnimation("el", darkAmbossVert);
    this.obstacleHitBoxNine.addAnimation("el", darkAmbossVert);
    this.obstacleHitBoxTen.addAnimation("el", darkAmbossVert);

    // set colliders
    this.obstacleHitBoxOne.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxTwo.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxThree.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxFour.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxFive.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxSix.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxSeven.setCollider("rectangle", 0, 0, 72, 168);
    this.obstacleHitBoxEight.setCollider("rectangle", 0, 0, 72, 168);
    this.obstacleHitBoxNine.setCollider("rectangle", 0, 0, 72, 168);
    this.obstacleHitBoxTen.setCollider("rectangle", 0, 0, 72, 168);

    //  debugger
    this.obstacleHitBoxOne.debug = true; // for testing
    this.obstacleHitBoxTwo.debug = true; // for testing
    this.obstacleHitBoxThree.debug = true; // for testing
    this.obstacleHitBoxFour.debug = true; // for testing
    this.obstacleHitBoxFive.debug = true; // for testing
    this.obstacleHitBoxSix.debug = true; // for testing
    this.obstacleHitBoxSeven.debug = true; // for testing
    this.obstacleHitBoxEight.debug = true; // for testing
    this.obstacleHitBoxNine.debug = true; // for testing
    this.obstacleHitBoxTen.debug = true; // for testing

    // add sprites to global group
    game.OBSTACLES.add(this.obstacleHitBoxOne);
    game.OBSTACLES.add(this.obstacleHitBoxTwo);
    game.OBSTACLES.add(this.obstacleHitBoxThree);
    game.OBSTACLES.add(this.obstacleHitBoxFour);
    game.OBSTACLES.add(this.obstacleHitBoxFive);
    game.OBSTACLES.add(this.obstacleHitBoxSix);
    game.OBSTACLES.add(this.obstacleHitBoxSeven);
    game.OBSTACLES.add(this.obstacleHitBoxEight);
    game.OBSTACLES.add(this.obstacleHitBoxNine);
    game.OBSTACLES.add(this.obstacleHitBoxTen);
  }
}

class PresetI {
  constructor(screenNumber) {
    this.x1 = 200 + screenNumber * WIDTH;
    this.y1 = 380;
    this.width1 = 72;
    this.height1 = 120;
    this.x2 = this.x1;
    this.y2 = this.y1 + 120;
    this.width2 = 72;
    this.height2 = 120;
    this.x3 = this.x1 + 400;
    this.y3 = this.y1;
    this.width3 = 72;
    this.height3 = 120;
    this.x4 = this.x3;
    this.y4 = this.y3 + 120;
    this.width4 = 72;
    this.height4 = 120;
    this.x5 = this.x3 + 400;
    this.y5 = this.y3;
    this.width5 = 72;
    this.height5 = 120;
    this.x6 = this.x5;
    this.y6 = this.y5 + 120;
    this.width6 = 72;
    this.height6 = 120;
    this.x7 = this.x1 + 200;
    this.y7 = this.y1 + 60;
    this.width7 = 72;
    this.height7 = 72;
    this.x8 = this.x7 + 400;
    this.y8 = this.y7;
    this.width8 = 72;
    this.height8 = 72;
  }

  setup() {
    // load sprites
    this.obstacleHitBoxOne = createSprite(
      this.x1,
      this.y1,
      this.width1,
      this.height1
    );

    this.obstacleHitBoxTwo = createSprite(
      this.x2,
      this.y2,
      this.width2,
      this.height2
    );
    this.obstacleHitBoxThree = createSprite(
      this.x3,
      this.y3,
      this.width3,
      this.height3
    );
    this.obstacleHitBoxFour = createSprite(
      this.x4,
      this.y4,
      this.width4,
      this.height4
    );
    this.obstacleHitBoxFive = createSprite(
      this.x5,
      this.y5,
      this.width5,
      this.height5
    );
    this.obstacleHitBoxSix = createSprite(
      this.x6,
      this.y6,
      this.width6,
      this.height6
    );
    this.obstacleHitBoxSeven = createSprite(
      this.x7,
      this.y7,
      this.width7,
      this.height7
    );
    this.obstacleHitBoxEight = createSprite(
      this.x8,
      this.y8,
      this.width8,
      this.height8
    );

    // load sprite animations
    this.obstacleHitBoxOne.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxTwo.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxThree.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxFour.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxFive.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxSix.addAnimation("el", lightAmbossVert);
    this.obstacleHitBoxSeven.addAnimation("el", bigBlock);
    this.obstacleHitBoxEight.addAnimation("el", bigBlock);

    // set colliders
    this.obstacleHitBoxOne.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxTwo.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxThree.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxFour.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxFive.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxSix.setCollider("rectangle", 0, 0, 72, 120);
    this.obstacleHitBoxSeven.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxEight.setCollider("rectangle", 0, 0, 72, 72);

    //  debugger
    this.obstacleHitBoxOne.debug = true; // for testing
    this.obstacleHitBoxTwo.debug = true; // for testing
    this.obstacleHitBoxThree.debug = true; // for testing
    this.obstacleHitBoxFour.debug = true; // for testing
    this.obstacleHitBoxFive.debug = true; // for testing
    this.obstacleHitBoxSix.debug = true; // for testing
    this.obstacleHitBoxSeven.debug = true; // for testing
    this.obstacleHitBoxEight.debug = true; // for testing

    // add sprites to global group
    game.OBSTACLES.add(this.obstacleHitBoxOne);
    game.OBSTACLES.add(this.obstacleHitBoxTwo);
    game.OBSTACLES.add(this.obstacleHitBoxThree);
    game.OBSTACLES.add(this.obstacleHitBoxFour);
    game.OBSTACLES.add(this.obstacleHitBoxFive);
    game.OBSTACLES.add(this.obstacleHitBoxSix);
    game.OBSTACLES.add(this.obstacleHitBoxSeven);
    game.OBSTACLES.add(this.obstacleHitBoxEight);
  }
}

class PresetJ {
  constructor(screenNumber) {
    this.x1 = 300 + screenNumber * WIDTH;
    this.y1 = 150;
    this.width1 = 168;
    this.height1 = 72;
    this.x2 = this.x1 + 120;
    this.y2 = this.y1;
    this.width2 = 72;
    this.height2 = 72;
    this.x3 = this.x2;
    this.y3 = this.y2 + 120;
    this.width3 = 72;
    this.height3 = 168;
    this.x4 = this.x3;
    this.y4 = this.y3 + 120;
    this.width4 = 72;
    this.height4 = 72;
    this.x5 = this.x4 + 120;
    this.y5 = this.y4;
    this.width5 = 168;
    this.height5 = 72;
    this.x6 = this.x5 + 120;
    this.y6 = this.y5;
    this.width6 = 72;
    this.height6 = 72;
    this.x7 = this.x6;
    this.y7 = this.y6 + 120;
    this.width7 = 72;
    this.height7 = 168;
    this.x8 = this.x7 + 72;
    this.y8 = this.y7 + 48;
    this.width8 = 72;
    this.height8 = 72;
    this.x9 = this.x8 + 120;
    this.y9 = this.y8;
    this.width9 = 168;
    this.height9 = 72;
  }

  setup() {
    // load sprites
    this.obstacleHitBoxOne = createSprite(
      this.x1,
      this.y1,
      this.width1,
      this.height1
    );

    this.obstacleHitBoxTwo = createSprite(
      this.x2,
      this.y2,
      this.width2,
      this.height2
    );
    this.obstacleHitBoxThree = createSprite(
      this.x3,
      this.y3,
      this.width3,
      this.height3
    );
    this.obstacleHitBoxFour = createSprite(
      this.x4,
      this.y4,
      this.width4,
      this.height4
    );
    this.obstacleHitBoxFive = createSprite(
      this.x5,
      this.y5,
      this.width5,
      this.height5
    );
    this.obstacleHitBoxSix = createSprite(
      this.x6,
      this.y6,
      this.width6,
      this.height6
    );
    this.obstacleHitBoxSeven = createSprite(
      this.x7,
      this.y7,
      this.width7,
      this.height7
    );
    this.obstacleHitBoxEight = createSprite(
      this.x8,
      this.y8,
      this.width8,
      this.height8
    );
    this.obstacleHitBoxNine = createSprite(
      this.x9,
      this.y9,
      this.width9,
      this.height9
    );

    // load sprite animations
    this.obstacleHitBoxOne.addAnimation("el", darkAmboss);
    this.obstacleHitBoxTwo.addAnimation("el", bigBlock);
    this.obstacleHitBoxThree.addAnimation("el", darkAmbossVert);
    this.obstacleHitBoxFour.addAnimation("el", bigBlock);
    this.obstacleHitBoxFive.addAnimation("el", darkAmboss);
    this.obstacleHitBoxSix.addAnimation("el", bigBlock);
    this.obstacleHitBoxSeven.addAnimation("el", darkAmbossVert);
    this.obstacleHitBoxEight.addAnimation("el", bigBlock);
    this.obstacleHitBoxNine.addAnimation("el", darkAmboss);

    // set colliders
    this.obstacleHitBoxOne.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxTwo.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxThree.setCollider("rectangle", 0, 0, 72, 168);
    this.obstacleHitBoxFour.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxFive.setCollider("rectangle", 0, 0, 168, 72);
    this.obstacleHitBoxSix.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxSeven.setCollider("rectangle", 0, 0, 72, 168);
    this.obstacleHitBoxEight.setCollider("rectangle", 0, 0, 72, 72);
    this.obstacleHitBoxNine.setCollider("rectangle", 0, 0, 168, 72);

    //  debugger
    this.obstacleHitBoxOne.debug = true; // for testing
    this.obstacleHitBoxTwo.debug = true; // for testing
    this.obstacleHitBoxThree.debug = true; // for testing
    this.obstacleHitBoxFour.debug = true; // for testing
    this.obstacleHitBoxFive.debug = true; // for testing
    this.obstacleHitBoxSix.debug = true; // for testing
    this.obstacleHitBoxSeven.debug = true; // for testing
    this.obstacleHitBoxEight.debug = true; // for testing
    this.obstacleHitBoxNine.debug = true; // for testing

    // add sprites to global group
    game.OBSTACLES.add(this.obstacleHitBoxOne);
    game.OBSTACLES.add(this.obstacleHitBoxTwo);
    game.OBSTACLES.add(this.obstacleHitBoxThree);
    game.OBSTACLES.add(this.obstacleHitBoxFour);
    game.OBSTACLES.add(this.obstacleHitBoxFive);
    game.OBSTACLES.add(this.obstacleHitBoxSix);
    game.OBSTACLES.add(this.obstacleHitBoxSeven);
    game.OBSTACLES.add(this.obstacleHitBoxEight);
    game.OBSTACLES.add(this.obstacleHitBoxNine);
  }
}
