class Games{
  constructor(x, y, w, h, clr, id){
  this.loc = createVector(x, y);
  this.h = h;
  this.w = w;
  this.clr = color(random(0, 255), random(0, 255), random(0, 255));
  this.id = id;
  }
  run(){
    this.render();
    this.isTouched();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
    if(this.id === 0){
      textSize(15);
      text("Snake Game", 100, 500);
      textSize(15);
      text("Paddle Game",600, 500)
    }
  }
  isTouched(){
    if (mouseX > this.loc.x && mouseX < this.loc.x + this.w && mouseY > this.loc.y && mouseY < this.loc.y + this.h && mouseIsPressed){
      if(this.id == 1){
        jugar = 1;
      }
      if(this.id == 2){
        jugar = 2
      }
      if(this.id == 3){
        jugar = 3
      }
    }
  }
}
