//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var boids = []
var boi = 10
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(10);


}
function draw(){
  runBoids();
}
function loadBoids(){
  for(var i = 0; i < boi; i++){
    boids[i] = new Boids(random(width), random(height), random(-1, 1), random(-1, 1), random(0, 255));
  }
}

function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}
