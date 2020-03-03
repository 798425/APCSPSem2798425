class Bars{
  constructor(x, y){
    this.loc = createVector(x, y);
    this.clr = color(143,188,143);
    this.w = 8;
    this.h = height - this.loc.y;
  }

  run(){

    this.render();

  }

 render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
