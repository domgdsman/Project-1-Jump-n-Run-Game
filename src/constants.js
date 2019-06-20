const WIDTH = 1200;
const HEIGHT = 800;
const TIMES_PLAYINGFIELD = 20;
const SCENE_W = WIDTH * TIMES_PLAYINGFIELD;
const SCENE_H = 800;
const GRAVITY = 0.35;

function preload() {
  // health bar images
  health00 = loadImage("../assets/Objects/health/health00_150x48.png");
  health05 = loadImage("../assets/Objects/health/health05_150x48.png");
  health10 = loadImage("../assets/Objects/health/health10_150x48.png");
  health15 = loadImage("../assets/Objects/health/health15_150x48.png");
  health20 = loadImage("../assets/Objects/health/health20_150x48.png");
  health25 = loadImage("../assets/Objects/health/health25_150x48.png");
  health30 = loadImage("../assets/Objects/health/health30_150x48.png");

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

  // health packs
  healthPack = loadImage("../assets/Objects/hp/health_50x48.png");

  // clock
  timePlus = loadImage("../assets/Objects/timer/clock_45x50.png");

  // obstacles images ####### DELETE AFTER TESTING #########
  lightAmboss = loadImage(
    "../assets/Objects/grass terrain/light_grass_amboss_120x72.png"
  );
  darkAmboss = loadImage(
    "../assets/Objects/grass terrain/dark_grass_amboss_168x72.png"
  );
  smallBlock = loadImage(
    "../assets/Objects/grass terrain/grass_block_small48x48.png"
  );
  bigBlock = loadImage(
    "../assets/Objects/grass terrain/gras_block_big72x72.png"
  );
  lightAmbossVert = loadImage(
    "../assets/Objects/grass terrain/light_grass_amboss_vertical_72x120.png"
  );
  darkAmbossVert = loadImage(
    "../assets/Objects/grass terrain/dark_grass_amboss_vertical_72x168.png"
  );
}
