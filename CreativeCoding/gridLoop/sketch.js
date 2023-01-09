function setup() { // runs once
  createCanvas(720, 720); //canvas is 720x720 pixels
  background (252, 250, 252); //rgb

}

function draw() { // runs in a loop
  fill (252, 250, 252); //fills the next shape
  strokeWeight(0.5); //adjust stroke weight of the square

for (var y = 0; y < 720; y = y+360){ //nested loop making grid
  for (var x = 0; x < 720; x = x+360){ // loop creates a row in the x direction (top two squares)
    quad(x,y,
        x+360, y,
        x+360,y+360,
        x, y+360);
  }
}

}
