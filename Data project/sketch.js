//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadplayerStats();
}

//  The draw function is called @ 30 fps
function draw() {
}

function loadPlayerStats(player) {
  var statsArray = stats.findRows(player, 2);
  if (statsArray.length === 0) {
    statsArray = findRows(player+"*", 2);
  }
}
