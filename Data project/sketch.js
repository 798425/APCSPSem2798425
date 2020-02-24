//  Miles Nguyen
// 	2/08/20
//  This is a comment
//  The setup function function is called once when your program begins
var stats;
var statsArray = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadStats();
  loadPlayerStats("Kobe Bryant");
  console.log("Kobe Bryant");
  console.log(aggregateStats("Kobe Bryant", 3));
  console.log(aggregateStats("Kobe Bryant", 10));
}


//  The draw function is called @ 30 fps
function draw() {
  background(0, 0, 0);
  createPlayerSelectionList();
  getSelectedPlayers();
  rect(100, 100, 600, 600);
  fill(250, 0, 60);
  strokeWeight(10);
  text("position", 150, 350);
  fill(0, 200, 200);
  textFont("Georgia");
  textStyle("Bold")
  textSize(20);
  line(115, 101, 115, 700);
  color(255, 0, 0);

}
function loadPlayerStats(player) {
  statsArray = stats.findRows(player, 2);
  if (statsArray.length === 0) {
    statsArray = stats.findRows(player + "*", 2);
  }
}
function createPlayerSelectionList() {
playerSel = createSelect(true);
playerSel.position((windowWidth-width)/2 + 270, (windowHeight-height)/2 + 40); // locate at 270,40 in canvas coordinates playerSel.size(150,headerHeight-50);
}

// locate at 270,40 in canvas coordinates playerSel.size(150,headerHeight-50);

  function getSelectedPlayers() {
    chosenPlayers = [];
    for (var i = 0; i < playerSel.elt.selectedOptions.length; i++) {
      chosenPlayers.push(playerSel.elt.selectedOptions[i].value);
  }
}

function aggregateStats(player, stat) {
  var results = [];
  for (var i = 0; i < statsArray.length; i++) {
    results.push(statsArray[i].get(stat));
  }
  return results;
}
