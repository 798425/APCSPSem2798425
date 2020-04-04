class Ball{
  constructor(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.clr = color(255, 0, 0);
  }

run(){
  this.checkEdges();
  this.update();
  this.render();
}

checkEdges(){
  if(this.x < 0){
    this.dx = -this.dx;
  }
  if(this.x > width){
    this.dx = -this.dx;
  }
    if(this.y < 0){
      this.dy = -this.dy;
    }
      if(this.y > height){
        this.dy = -this.dy;
      }
  }
  update(){
    frameRate(120);
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
}
render(){
  fill(this.clr);
  ellipse(this.x, this.y, 50, 50);
  }
}
