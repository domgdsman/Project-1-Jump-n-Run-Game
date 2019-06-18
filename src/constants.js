const WIDTH = 1200;
const HEIGHT = 800;
const TIMES_PLAYINGFIELD = 10; // TIMES_PLAYINGFIELD + starting area !!!
const SCENE_W = WIDTH * TIMES_PLAYINGFIELD; // = WIDTH * i in the background.js  (set to 20 in the end with 5 crystals each) + empty starting area
const SCENE_H = 800;
const GRAVITY = 0.35;

function preload() {
  // player("blue")
  bluePlayerIdle = loadSpriteSheet(
    "../assets/Dino Sprites/blue/blue_idle_x4_72x72.png",
    72,
    72,
    4
  );
  bluePlayerRun = loadSpriteSheet(
    "../assets/Dino Sprites/blue/blue_running_x6_72x72.png",
    72,
    72,
    6
  );
  bluePlayerHurt = loadSpriteSheet(
    "../assets/Dino Sprites/blue/blue_hurt_x4_72x72.png",
    72,
    72,
    4
  );

  // player("red")
  redPlayerIdle = loadSpriteSheet(
    "../assets/Dino Sprites/red/red_idle_x4_72x72.png",
    72,
    72,
    4
  );
  redPlayerRun = loadSpriteSheet(
    "../assets/Dino Sprites/red/red_running_x6_72x72.png",
    72,
    72,
    6
  );
  redPlayerHurt = loadSpriteSheet(
    "../assets/Dino Sprites/red/red_hurt_x4_72x72.png",
    72,
    72,
    4
  );

  // player("green")
  greenPlayerIdle = loadSpriteSheet(
    "../assets/Dino Sprites/green/green_idle_x4_72x72.png",
    72,
    72,
    4
  );
  greenPlayerRun = loadSpriteSheet(
    "../assets/Dino Sprites/green/green_running_x6_72x72.png",
    72,
    72,
    6
  );
  greenPlayerHurt = loadSpriteSheet(
    "../assets/Dino Sprites/green/green_hurt_x4_72x72.png",
    72,
    72,
    4
  );

  // player("yellow")
  yellowPlayerIdle = loadSpriteSheet(
    "../assets/Dino Sprites/yellow/yellow_idle_x4_72x72.png",
    72,
    72,
    4
  );
  yellowPlayerRun = loadSpriteSheet(
    "../assets/Dino Sprites/yellow/yellow_running_x6_72x72.png",
    72,
    72,
    6
  );
  yellowPlayerHurt = loadSpriteSheet(
    "../assets/Dino Sprites/yellow/yellow_hurt_x4_72x72.png",
    72,
    72,
    4
  );

  // health bar images
  health00 = loadImage("../assets/Objects/health/health00_150x48.png");
  health05 = loadImage("../assets/Objects/health/health05_150x48.png");
  health10 = loadImage("../assets/Objects/health/health10_150x48.png");
  health15 = loadImage("../assets/Objects/health/health15_150x48.png");
  health20 = loadImage("../assets/Objects/health/health20_150x48.png");
  health25 = loadImage("../assets/Objects/health/health25_150x48.png");
  health30 = loadImage("../assets/Objects/health/health30_150x48.png");

  // diamond("green")
  greenDiamond = loadAnimation(
    "../assets/Objects/crystals/crystal_green_64x64.png"
  );

  // diamond("red")
  redDiamond = loadAnimation(
    "../assets/Objects/crystals/crystal_red_64x64.png"
  );

  // diamond("blue")
  blueDiamond = loadAnimation(
    "../assets/Objects/crystals/crystal_blue_64x64.png"
  );

  // diamond("yellow")
  yellowDiamond = loadAnimation(
    "../assets/Objects/crystals/crystal_yellow_64x64.png"
  );

  // rockets
  rocketRotate = loadAnimation(
    "../assets/Objects/rockets/projectile/rocket1_64x44.png",
    "../assets/Objects/rockets/projectile/rocket2_64x44.png",
    "../assets/Objects/rockets/projectile/rocket3_64x44.png",
    "../assets/Objects/rockets/projectile/rocket4_64x44.png"
  );
  rocketExplosion = loadAnimation(
    "../assets/Objects/rockets/explosion/rockets_explosion1_x7_192x192.png",
    "../assets/Objects/rockets/explosion/rockets_explosion2_x7_192x192 2.png",
    "../assets/Objects/rockets/explosion/rockets_explosion3_x7_192x192 3.png",
    "../assets/Objects/rockets/explosion/rockets_explosion4_x7_192x192 4.png",
    "../assets/Objects/rockets/explosion/rockets_explosion5_x7_192x192 5.png",
    "../assets/Objects/rockets/explosion/rockets_explosion6_x7_192x192 6.png",
    "../assets/Objects/rockets/explosion/rockets_explosion7_x7_192x192 7.png"
  );
}
