function preload() {
  // put preload code here
}

var myPalette1 = ["#A57548", "#FCD7AD", "#F6C28B", "#5296A5", "#82DDF0"];

var myPalette2 = ["#E3D8F1", "#DABECA", "#BF8B85", "#AD8A64", "#5D5F71"];

var myPalette3 = ["#38023B", "#A288E3", "#BBD5ED", "#CEFDFF", "#CCFFCB"];

var myPalette4 = ["#D6F6DD", "#DAC4F7", "#F4989C", "#EBD2B4", "#ACECF7"];

function setup() {}

function draw() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  background("#FFFFF");
  noStroke();

  for (var y = 10; y < windowHeight; y += 10) {
    for (var x = 10; x < windowWidth; x += 10) {
      if (mouseX < windowWidth / 2 && mouseY < windowHeight / 2) {
        var index = floor(random() * myPalette1.length);
        var colorHex = myPalette1[index];
        fill(color(colorHex));
      } else if (mouseX > windowWidth / 2 && mouseY < windowHeight / 2) {
        var index = floor(random() * myPalette2.length);
        var colorHex = myPalette2[index];
        fill(color(colorHex));
      } else if (mouseX < windowWidth / 2 && mouseY > windowHeight / 2) {
        var index = floor(random() * myPalette3.length);
        var colorHex = myPalette3[index];
        fill(color(colorHex));
      } else if (mouseX > windowWidth / 2 && mouseY > windowHeight / 2) {
        var index = floor(random() * myPalette4.length);
        var colorHex = myPalette4[index];
        fill(color(colorHex));
      }

      ellipse(x - 5, y - 5, 8, 8);
      //text
      noStroke();
      textFont("Roboto Mono");
      fill("BLACK");
      textSize(15);
      text("slide to change the wallpaper", mouseX, mouseY);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



