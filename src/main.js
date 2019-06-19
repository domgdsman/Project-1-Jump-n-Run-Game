const game = new Game("yellow");

function setup() {
  frameRate(60);
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-area");
  game.setup();
}

function draw() {
  clear();
  game.draw();
  // TESTING AREA
  // image(smallBlock, 200, 500);
  // image(smallBlock, 300, 450);
  // image(bigBlock, 400, 400);
  // image(darkAmbossVert, 600, 300);
  // image(lightAmboss, 800, 400);
  // image(darkAmbossVert, 1050, 500);

  // STANDARDS
  // image(smallBlock, 200, 500);
  // image(bigBlock, 400, 400);
  // image(lightAmboss, 600, 400);
  // image(lightAmbossVert, 1000, 400);
  // image(darkAmboss, 500, 300);
  // image(darkAmbossVert, 500, 400);
}

// player controls
function keyPressed() {
  if (keyCode == 32) game.player.jump();
  else return;
}
