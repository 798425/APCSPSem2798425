//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var stats;
var statsArray = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadPlayerStats("Kobe Bryant");
  console.log("kobe bryant");
  console.log(aggregateStats("Kobe Bryant", ));
}

//  The draw function is called @ 30 fps
function draw() {
  createPlayerSelectionList();
  getSelectedPlayers();
}

function loadPlayerStats("Kobe Bryant") {
  var statsArray = stats.findRows(player, 2);
  if (statsArray.length === 0) {
    statsArray = findRows(player + "*", 2);
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

function aggregateStats("Kobe Bryant", height) {
  results = [];
  for (var i =0; i<statsArray.length; i++) {

  }
}
