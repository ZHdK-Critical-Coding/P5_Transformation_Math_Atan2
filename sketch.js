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
  // Each cross needs its own angle, computed from its own position
  const left = createVector(center.x / 2, center.y)
  const angleLeft = atan2(mouseY - left.y, mouseX - left.x);
  push()
    translate(left.x, left.y);  
    rotate(angleLeft);
    fill('red');
    rect(- (boxWidth / 2), - (boxHeight / 2), boxWidth, boxHeight);
    rect(- (boxHeight / 2), - (boxWidth / 2), boxHeight, boxWidth);
  pop()

  // Same but on the right side
  const right = createVector(center.x * 1.5, center.y)
  const angleRight = atan2(mouseY - right.y, mouseX - right.x);
  push()
    translate(right.x, right.y);  
    rotate(angleRight);
    fill('blue');
    rect(- (boxWidth / 2), - (boxHeight / 2), boxWidth, boxHeight);
    rect(- (boxHeight / 2), - (boxWidth / 2), boxHeight, boxWidth);
  pop()

  text(`Angle: ${round(angle)}`, 10, 20)
}