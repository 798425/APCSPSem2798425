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
    this.isPressed()
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
    if(this.id === 0){
      textSize(15);
      text("Snake Game", 100, 500);

    }else{
      textSize(15);
      text("Paddle Game",600, 500)

    }

  }
}
