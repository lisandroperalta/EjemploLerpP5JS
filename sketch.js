let posicionPrevia = 0;
let posicionActual = 0;
function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(0);

  fill(255);
  ellipse(mouseX, height / 2, 50, 50);

  posicionActual = lerp(posicionPrevia, mouseX, 0.25);
  ellipse(posicionActual, height / 2 + 100, 50, 50);
  posicionPrevia = posicionActual;
}
