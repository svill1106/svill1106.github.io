// VARIABLES
let playerX = 300;
let playerY = 560;
let playerSize = 50;

// Blocks
let blockX, blockY;
let block2X, block2Y;
let block3X, block3Y;

let blockSize = 40;
let speed = 4;
let score = 0;

let gameState = "L1";

// Background
let bg;

function preload() {
  bg = loadImage("background.jpg");
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  resetBlocks();
}

function resetBlocks() {
  blockX = random(blockSize / 2, width - blockSize / 2);
  blockY = -50;

  block2X = random(blockSize / 2, width - blockSize / 2);
  block2Y = -150;

  block3X = random(blockSize / 2, width - blockSize / 2);
  block3Y = -250;
}

// DRAW LOOP
function draw() {
  image(bg, 0, 0, width, height);

  fill(255);
  text("Score: " + score, width / 2, 40);

  if (gameState === "GAMEOVER") {
    textSize(40);
    text("GAME OVER!", width / 2, height / 2);
    textSize(20);
    text("Press R to Restart", width / 2, height / 2 + 40);
    return;
  }

  if (gameState === "L1") levelOne();
  else if (gameState === "L2") levelTwo();
  else if (gameState === "L3") levelThree();
}

// LEVELS
function levelOne() {
  text("LEVEL 1", width / 2, height - 20);
  drawPlayer();
  movePlayer();

  drawBlock(blockX, blockY, color(255, 0, 0));
  blockY += speed;
  checkCollision(blockX, blockY);

  if (blockY > height + blockSize) {
    blockY = -50;
    blockX = random(blockSize / 2, width - blockSize / 2);
    score++;
  }

  if (score >= 10) {
    gameState = "L2";
    speed = 6;
    block2Y = -50;
  }
}

function levelTwo() {
  text("LEVEL 2", width / 2, height - 20);
  drawPlayer();
  movePlayer();

  drawBlock(blockX, blockY, color(255, 0, 0));
  blockY += speed;
  checkCollision(blockX, blockY);

  drawBlock(block2X, block2Y, color(255, 150, 0));
  block2Y += speed;
  checkCollision(block2X, block2Y);

  if (blockY > height + blockSize) {
    blockY = -50;
    blockX = random(blockSize / 2, width - blockSize / 2);
    score++;
  }

  if (block2Y > height + blockSize) {
    block2Y = -50;
    block2X = random(blockSize / 2, width - blockSize / 2);
    score++;
  }

  if (score >= 25) {
    gameState = "L3";
    speed = 8;
    blockSize = 50;
    block3Y = -50;
  }
}

function levelThree() {
  text("LEVEL 3", width / 2, height - 20);
  drawPlayer();
  movePlayer();

  drawBlock(blockX, blockY, color(255, 0, 0));
  blockY += speed;
  checkCollision(blockX, blockY);

  drawBlock(block2X, block2Y, color(255, 150, 0));
  block2Y += speed;
  checkCollision(block2X, block2Y);

  drawBlock(block3X, block3Y, color(255, 220, 0));
  block3Y += speed;
  checkCollision(block3X, block3Y);

  if (blockY > height + blockSize) {
    blockY = -50;
    blockX = random(blockSize / 2, width - blockSize / 2);
    score++;
  }

  if (block2Y > height + blockSize) {
    block2Y = -50;
    block2X = random(blockSize / 2, width - blockSize / 2);
    score++;
  }

  if (block3Y > height + blockSize) {
    block3Y = -50;
    block3X = random(blockSize / 2, width - blockSize / 2);
    score++;
  }

  if (score >= 60) {
    textSize(40);
    text("YOU WIN!", width / 2, height / 2);
    noLoop();
  }
}

// PLAYER
function drawPlayer() {
  rectMode(CENTER);
  fill(0, 100, 255);
  rect(playerX, playerY, playerSize, playerSize);
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) playerX -= 5;
  if (keyIsDown(RIGHT_ARROW)) playerX += 5;
  playerX = constrain(playerX, playerSize / 2, width - playerSize / 2);
}

// BLOCKS
function drawBlock(x, y, c) {
  rectMode(CENTER);
  fill(c);
  rect(x, y, blockSize, blockSize);
}

// COLLISION
function checkCollision(x, y) {
  let d = dist(playerX, playerY, x, y);
  if (d < playerSize / 2 + blockSize / 2) {
    gameState = "GAMEOVER";
  }
}

// RESTART
function keyPressed() {
  if (key === 'r' || key === 'R') {
    score = 0;
    speed = 4;
    blockSize = 40;
    gameState = "L1";
    resetBlocks();
    loop();
  }
}
