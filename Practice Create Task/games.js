class Games{
  constructor(x, y, w, h, clr){
  this.loc = createVector(x, y);
  this.h = h;
  this.w = w;
  this.clr = color(random(0, 255), random(0, 255), random(0, 255));
  }
  run(){
    render();
    update();
  }
  render(){
    fill(this.clr);
    rect(200, 500, 200, 300);
    
  }
}
