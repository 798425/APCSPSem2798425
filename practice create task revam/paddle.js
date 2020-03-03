class Paddle{
  constructor(x, y){
    this.loc = createVector(mouseX, mouseY);
    this.clr = color(random(225), random(225), random(225));
    this.w = 150;
    this.h = 35;
    this.acc = createVector(0,0);
  }
//shows the balls and makes sure it moves and stays on the screen
  run(){
    this.render();
    this.checkEdges();
    this.update();
  }
//makes sure the paddle stays on the screen
  checkEdges(){
    if (this.loc.x < 0){
      this.loc.x = 0;
    }
    if ((this.loc.x + this.w) > width){
      this.loc.x = width - this.w;
    }
  }
  //makes the paddle move with the mouse
  update(){
    var mouseLoc = createVector(mouseX - 50, 650);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, 0.09);
  }
  //builds the paddle based on parameters
  render(){
    fill(this.clr);
    rect(this.loc.x, 650, this.w, this.h);
  }
}
