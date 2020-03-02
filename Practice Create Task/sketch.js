//  Miles Nguyen
// 	8/21/19
//  This is a comment
//  The setup function function is called once when your program begins

var score = 0;
var food;
var snake;
var gameState = 1;
var w = 20;

var bars = [];
var numBars, barWidth;
var balls = [];
var paddle;
var gameStat = 1;
var difficulty, health, score;
var win = 2;
var btnEasy, btnMedium, btnHard, btnInstructions;
var winScore;



function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
//loadObjects(100);
loadSnake();
loadStuff();
makeButtons();
}
function loadStuff(n){
  for (var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(0,200), random(-3,3), random(-3,3));
  }
  paddle = new Paddle(width/2, 700);
}
function runButtons(){
  btnEasy.run();
  btnMedium.run();
  btnHard.run();
  btnInstructions.run();
}
function startGam(){
  win = 2;
  runButtons();
  background(200,200,159);
  runButtons();
  textSize(90);
  fill(20,20,20);
  textFont('Georgia')
  text("Paddle Game",150,300);

}
function endGame(){
  fill(255);
  textFont('Times New Roman');
  textSize(90);
  if (win === 1){
    background(10, 200, 100);
    text("You won", 200, 200);
    btnMenu = new Button(250, 600, 300, 100, "Menu", color(10,255,10), 5);
    btnMenu.run();
    //smiley face
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(340, 300, 100, 100);
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(460, 300, 100, 100);
    fill(random(0,255), random(0,255), random(0,255));
    arc(400, 400, 80, 80, 0, PI, CHORD);
    }else{
      background(255, 20, 10);
      text("Game Over", 150, 200);
      btnMenu = new Button(250, 600, 300, 100, "Menu", color(10,255,10), 5);
      btnMenu.run();
      //frowny face
      fill(random(0,255), random(0,255), random(0,255));
      ellipse(340, 300, 100, 100);
      fill(random(0,255), random(0,255), random(0,255));
      ellipse(460, 300, 100, 100);
      fill(random(0,255), random(0,255), random(0,255));
      arc(400, 400, 80, 80, PI, 0, CHORD);

    }
  }
  function makeButtons(){
    btnEasy = new Button(50, 100, 100, 75, "Easy", color(1, 255, 1), 1);
    btnMedium = new Button(50, 300, 100, 75, "Medium", color(255, 255, 1), 2);
    btnHard = new Button(50, 500, 100, 75, "Hard", color(255, 1, 1), 3);
    btnInstructions = new Button(50, 700, 100, 75, "Instructions",color(0, 255, 255), 4);
  }
  //shows buttons
  //game code
  function playGame(){
    background(128, 128, 128, 50);
    runPaddle();
    removeBall();
    if (health <= 0){
      win = 0;
      gameState = 3;
    }
    if (win === 1){
      gameState = 3;
    }
  }
  function runPaddle(){
    for(var t = 0; t < pp.length; t++){
      pp[t].run();
    }
    fill(255);
    textSize(20);
    text("Score = "+ score, 20, 50);
    text("Health = "+ health, 700, 50);
    paddle.run();
  }
//  The draw function is called @ 30 fps
function draw() {
  background(0,0,0);
  if (gameStat === 1){
    startGam();
  }
  if (gameStat === 2){
    playGame();
  }
  if (gameStat === 3){
    endGame();
  }

if(gameState === 1){
  startGame();
}
if(gameState === 2){
  playSnake();
}
if(gameState === 3){
  textSize(45);
  text("Game Over",10, 200);
  }
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


//  function runObjects(){

function startGame(){
  // background(0, 0, 0);
  textSize(45);
  text("Snake Game, press 'SPACE' to play",10, 200);
  if(keyCode === 32){
    gameState = 2;
  }
}
function playSnake(){
  runSnake(); //runs snake head
  textSize(20);
  text("score = " + score, 10, 20);

  // background(0,0,0);
 }
 function removeBall(){
  for (var i = balls.length - 1; i >= 0; i--){
    if (balls[i].isColliding()){
      balls.splice(i,1);
      health = health -1;
    }
  }
}
