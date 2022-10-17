// sfondo
let b1;
let b2;

//myPalette
const myPalette = ["#993955", "#AE76A6", "#A3C3D9", "#CCD6EB", "#E9ECF5"];
const myPalette2 = ["#ED6A5A", "#F4F1BB", "#9BC1BC", "#5CA4A9", "#E6EBE0"];

//costanti texture
const a = 40;
const b = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(27);
  frameRate(1.6);

  // sfondo
  b1 = color("#C8D5B9");
  b2 = color("#68B0AB");
}

function draw() {
  //bg

  background(color(random(myPalette)));

  if (mouseIsPressed) {
    background(color(random(myPalette2)));
  }

  for (let x = a; x <= width; x += a * 1.75) {
    for (let y = a; y <= height; y += a * 1.75) {
      if (mouseX < windowWidth / 2) {
        stroke(color(random(myPalette)));
        noFill();
      } else {
        fill(color(random(myPalette)));
        noStroke();
      }

      if (mouseIsPressed) {
        fill(color(random(myPalette2)));
        stroke(color(random(myPalette2)));
      }

      ellipse(x, y, a);
    }
  }

  for (let x = b; x <= width; x += b * 2) {
    for (let y = b; y <= height; y += b * 2) {
      if (mouseX < windowHeight / 2) {
        fill(color(random(myPalette)));
        noStroke();
      } else {
        stroke(color(random(myPalette)));
        noFill();
      }

      if (mouseIsPressed) {
        fill(color(random(myPalette2)));
        stroke(color(random(myPalette2)));
      }
    }
  }

  //text
  noStroke();
  textFont("Roboto Mono");
  fill("BLACK");
  textSize(23);
  text("slide or click to change the wallpaper", mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

