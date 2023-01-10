//create a program that can customize the number of squares in a grid

let gif;

function preload(){ //preload image or gif
  gif = loadImage('assets/ai_background.gif');
}

function setup() { // runs once
  createCanvas(windowWidth, windowWidth); //canvas is 720x720 pixels
  background (252, 250, 252); //rgb

}

function draw() { // runs in a loop
  fill (252, 250, 252); //fills the next shape
  strokeWeight(1); //adjust stroke weight of the square

  var num = 20; //number of squares in the array
  var sideLength = windowWidth/num;

translate (-150, -150); //gives bleeding effect

  for (var y = 0; y < 2 * windowWidth; y = y+sideLength){
    for (var x = 0; x < 2 * windowWidth; x = x+sideLength){ // loop creates a row in the x direction (top two squares)
      image (gif, x, y, windowWidth/num, windowWidth/num);
    }
  }
}

function windowResized(){ //resizes and refreshes design
  resizeCanvas(windowWidth, windowHeight);
}
