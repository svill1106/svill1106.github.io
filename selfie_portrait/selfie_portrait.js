function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
noStroke();
}

function draw() {
  background(210, 235, 255); 
  // --- Neck ---//
  fill(255, 220, 180);
  rect(260, 350, 80, 120, 20);

  // --- Shirt ---//
  fill(50, 100, 200);
  rect(180, 460, 240, 200, 40);

  // --- Face ---//
  fill(255, 225, 190);
  ellipse(300, 280, 260, 300);

  // --- Ears ---//
  ellipse(175, 280, 50, 70);
  ellipse(425, 280, 50, 70);

  // Hair ---//
  fill(60, 40, 20); 
  for (let i = 0; i < 7; i++) {
    ellipse(180 + i * 50, 160, 130, 110);
  }
  ellipse(165, 330, 150, 280);  
  ellipse(435, 330, 150, 280);  
  ellipse(200, 440, 140, 140);
  ellipse(400, 440, 140, 140);

  // --- Eyes ---//
  fill(255);
  ellipse(245, 270, 70, 45);
  ellipse(355, 270, 70, 45);
fill(120, 70, 20); 
  ellipse(245, 270, 32, 32);
  ellipse(355, 270, 32, 32);
 fill(0); 
  ellipse(245, 270, 12, 12);
  ellipse(355, 270, 12, 12);

  // --- Eyebrows ---//
  stroke(60, 40, 20);
  strokeWeight(8);
  noFill();
  curve(210, 220, 220, 230, 280, 230, 300, 220);
  curve(320, 220, 330, 230, 390, 230, 410, 220);
  noStroke();

  // --- Nose ---//
  fill(255, 210, 170);
  triangle(300, 260, 280, 330, 320, 330);

  // --- Mouth ---//
  fill(180, 60, 80);
  arc(300, 360, 120, 80, 0, 180);

  // --- Glasses ---//
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(200, 245, 90, 70, 12);  
  rect(310, 245, 90, 70, 12);  
  line(290, 280, 310, 280);    
  noStroke();
}
