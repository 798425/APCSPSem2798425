//  Miles Nguyen
// 	8/21/19
//  This is a comment
//  The setup function function is called once when your program begins
var ships = [];
var score = 0;
var food;
var snake;
var gameState = 1;
var w = 20;
var attractor, repeller;
var bars = [];
var numBars, barWidth;


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
loadObjects(50);
loadSnake();
}

//  The draw function is called @ 30 fps
function draw() {
  background(0,0,0);
if(gameState === 1){
  startGame();
}
if(gameState === 2){
  playGame();
}
if(gameState === 3){
  textSize(45);
  text("Game Over",10, 200);
}
  runObjects();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    snake.vel.x = -w;
    snake.vel.y = 0;
  }
  if(keyCode === DOWN_ARROW){
    snake.vel.x = 0;
    snake.vel.y = w;
  }
  if(keyCode === RIGHT_ARROW){
    snake.vel.x = w;
    snake.vel.y = 0;
  }
  if(keyCode === UP_ARROW){
    snake.vel.x = 0;
    snake.vel.y = -w;
  }
}
function runSnake(){
  snake.run();
  food.run();
}
function loadSnake(){
  snake = new Snake(w,w); //the snake is a 20 by 20 square
  food = new Food();
}
function loadObjects(n){

  for(var i = 0; i < n; i++){
    ships[i] = new Ship(random(width), random(height), random(-1, 1), random(-1, 1),1);
  }
  for(var i = 0; i < n; i++){
    abs[i] = new abs(random(width), random(height), random(-1, 1), random(-1, 1),1);
  }
  attractor = new Ball (random(width/2), random(height/2), random(-.5, .5), random(-.5, .5), 0);
  repellor = new Ball (random(width/2), random(height/2), random(-.5, .5), random(-.5, .5) ,0);

}

  function runObjects(){
    for(var i = 0; i < ships.length; i++){
      ships[i].run();
      abs[i].run();
    }
    attractor.run();
    repellor.run();
}
function startGame(){
  // background(0, 0, 0);
  textSize(45);
  text("Snake Game, press 'SPACE' to play",10, 200);
  if(keyCode === 32){
    gameState = 2;
  }
}
function playGame(){
  runSnake(); //runs snake head
  textSize(20);
  text("score = " + score, 10, 20);

  // background(0,0,0);
 }
