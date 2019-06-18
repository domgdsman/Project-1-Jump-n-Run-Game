const game = new Game("green");

function setup() {
  frameRate(60);
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
