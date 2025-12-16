let currentTool = 1;
let sillyDog;

// preload dog image//
function preload() {
  sillyDog = loadImage("sillydog.jpg");
}

function setup() {
  createCanvas(900, 600);
  background(255);
  imageMode(CENTER);
}

function draw() {
  if (mouseIsPressed) {
    useTool(currentTool);
  }
}

function keyPressed() {
  if (key >= "0" && key <= "9") {
    currentTool = int(key);
  }
}


function useTool(t) {
  switch (t) {
    case 1: toolPen(); break;
    case 2: toolSpray(); break;
    case 3: toolSillyDog(); break;
    case 4: toolSquare(); break;
    case 5: toolCircle(); break;
    case 6: toolErase(); break;
    case 7: toolThickLine(); break;
    case 8: toolNoiseBrush(); break;
    case 9: toolRainbow(); break;
    case 0: toolCorners(); break;
  }
}

//Brush1//
function toolPen() {
  stroke(0);
  strokeWeight(2);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

//Spar Brush 2//
function toolSpray() {
  noStroke();
  for (let i = 0; i < 20; i++) {
    let angle = random(TWO_PI);
    let r = random(15);
    fill(0, 40);
    circle(mouseX + cos(angle)*r, mouseY + sin(angle)*r, 3);
  }
}

// Silly Dof Brush//
function toolSillyDog() {
  push();
  translate(mouseX, mouseY);
  rotate(random(-0.3, 0.3));
  let s = random(50, 120);   // random size
  image(sillyDog, 0, 0, s, s);
  pop();
}

//Square Brush//
function toolSquare() {
  noFill();
  stroke(50);
  rect(mouseX, mouseY, 30, 30);
}

//Circle Brush//
function toolCircle() {
  noStroke();
  fill(150, 50);
  circle(mouseX, mouseY, 40);
}

//Eraser Brush//
function toolErase() {
  stroke(255);
  strokeWeight(40);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

//Thick Line Brush//
function toolThickLine() {
  stroke(0);
  strokeWeight(10);
  line(pmouseX, pmouseY, mouseX, mouseY);
}
//Brush 8//
function toolNoiseBrush() {
  let n = noise(frameCount * 0.05) * 255;
  fill(n, 0, 200, 80);
  noStroke();
  circle(mouseX, mouseY, 25);
}

//Rainbow Brush//
function toolRainbow() {
  strokeWeight(12);
  stroke(color(frameCount % 255, 150, 200));
  line(pmouseX, pmouseY, mouseX, mouseY);
}

//Brush 10//
function toolCorners() {
  noStroke();
  fill(0);
  square(mouseX - 10, mouseY - 10, 20);
}
