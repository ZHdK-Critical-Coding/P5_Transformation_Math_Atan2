const boxWidth = 100
const boxHeight = 10

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // makes it easier to read
}

function draw() {
  background(220);
  noStroke();
  const center = createVector(width / 2 , height / 2)
  const angle = atan2(mouseY - center.y, mouseX - center.x);

  // Center point
  push()
    translate(center.x, center.y);  
    rotate(angle);
    fill('green');
    rect(- (boxWidth / 2), - (boxHeight / 2), boxWidth, boxHeight);
    rect(- (boxHeight / 2), - (boxWidth / 2), boxHeight, boxWidth);
  pop()

  // Same but on the left side
  push()
    translate(center.x / 2, center.y);  
    rotate(angle);
    fill('red');
    rect(- (boxWidth / 2), - (boxHeight / 2), boxWidth, boxHeight);
    rect(- (boxHeight / 2), - (boxWidth / 2), boxHeight, boxWidth);
  pop()

  // Same but on the right side
  push()
    translate(center.x * 1.5, center.y);  
    rotate(angle);
    fill('blue');
    rect(- (boxWidth / 2), - (boxHeight / 2), boxWidth, boxHeight);
    rect(- (boxHeight / 2), - (boxWidth / 2), boxHeight, boxWidth);
  pop()

  text(`Angle: ${round(angle)}`, 10, 20)
}