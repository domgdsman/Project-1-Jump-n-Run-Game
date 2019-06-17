const game = new Game(); // "blue" change player color here over DOM manipulation

function setup() {
  frameRate(60); // for testing
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-area");
  game.setup();
}

function draw() {
  clear();
  game.draw();
}

// player controls
function keyPressed() {
  if (keyCode == 32) game.player.jump();
  else return;
}
