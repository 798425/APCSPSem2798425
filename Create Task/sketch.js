//
// 	3/24/19

var balls = [];
var squares = [];
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(100);
}

//  The draw function is called @ 30 fps
function draw(){
  background(0, 0, 0);
  runSquares();
  runBalls();
}

function loadObjects(n){
  for(var i = 0; i < n; i++){
    squares[i] = new Squares(random(0, 800,), random(0, 800), random(-2, 2), random(-2, 2));
    balls[i] = new Ball(random(width), random(height), random(-3, 3), random(-3, 3));
  }
}

function runSquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].run();
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
