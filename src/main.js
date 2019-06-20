const game = new Game("red");

function setup() {
  frameRate(60);
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-area");

  // sound effects

  menuMusic = loadSound("../assets/sounds/Menu Music/happy.mp3");
  selectPlayer = loadSound("../assets/sounds/Player Select Sound/Rise03.mp3");
  diamondPickUp = loadSound(
    "../assets/sounds/Diamond Collect Sound/Coin01.mp3"
  );
  diamondPickUp.setVolume(0.6);
  healthPickup = loadSound(
    "../assets/sounds/Powerup Collect Sound/NFF-fruit-appearance.mp3"
  );
  healthPickup.setVolume(0.15);
  bulletTimeStart = loadSound(
    "../assets/sounds/bullet time/109210__benboncan__slowdown.mp3"
  );
  bulletTimeEnd = loadSound(
    "../assets/sounds/bullet time/123438__anomalous-underdog__slowdown-short-up.mp3"
  );
  rocketHit = loadSound(
    "../assets/sounds/Rocket Hit Sound/sfx_exp_various1.mp3"
  );
  gameOver = loadSound("../assets/sounds/Death Sound/NFF-lose.mp3");

  game.setup();
}

function draw() {
  clear();
  game.draw();
}

function keyPressed() {
  if (keyCode == 32) game.player.jump();
  else return;
}
