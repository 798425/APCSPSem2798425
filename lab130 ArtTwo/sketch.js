//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var boids = []
var boi = 4;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBoids();


}
function draw(){
  background(5, 5, 5);
  runBoids();
}
function loadBoids(){
  boids[0] = new Boids(1);
  boids[1] = new Boids(2);
  boids[2] = new Boids(3);
  boids[3] = new Boids(4);
}

function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}
