const WIDTH = 1200;
const HEIGHT = 800;
const TIMES_PLAYINGFIELD = 10;
const SCENE_W = WIDTH * TIMES_PLAYINGFIELD; // = WIDTH * i in the background.js  (set to 20 in the end with 5 crystals each) + empty starting area
const SCENE_H = 800;

const GRAVITY = 0.35;
let jumpCounter = 0;

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

  allPlayersJump = loadSpriteSheet(
    "../assets/Dino Sprites/particles/jump_x6_28x28.png",
    28,
    28,
    6
  );
  allPlayersLand = loadSpriteSheet(
    "../assets/Dino Sprites/particles/landing_x4_44x32.png",
    44,
    32,
    4
  );
}
