function setup() { // runs once
  createCanvas(720, 720); //canvas is 720x720 pixels
  background (252, 250, 252); //rgb

}

function draw() { // runs in a loop
  //fill (0, 0, 200); //fills the next shape
  strokeWeight(0.5); //adjust stroke weight of the square
  translate (60,60); // resets origin point
  quad(0,0,
      300, 0,
      300,300,
      0, 300);
  quad(300,0, // move quad 300 pixels so it is in top right corner (moved in x direction)
      600, 0,
      600,300,
      300, 300);
  quad(0,300, //move the next two quads down
      300, 300,
      300,600,
      0, 600);
  quad(300,300,
      600, 300,
      600,600,
      300, 600);
}
