//  Miles Nguyen
// 	8/21/19
//  This is a comment
//  The setup function function is called once when your program begins
var ships = [];
var attractor, repeller;


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
loadObjects(100)
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20);
  runObjects();
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
