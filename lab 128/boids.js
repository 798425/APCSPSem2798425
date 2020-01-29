class Boids{
  constructor(){
    this.loc = createVector(random(0, 800) random(0, 800));
    this.vel = createVector(dx, dy);
    this.acc = createVector(dx, dy);
    this.clr = color(255, 0, 0);
  }
  run(){
    this.update();
    this.checkEdges();
    this.render();
  }
  update(){

  }
  checkEdges(){
    if (this.loc.x < 0){
      this.vel.x = -(this.vel.x);
    }
    if (this.loc.x > 800){
      this.vel.x = -(this.vel.x);
    }
    if (this.loc.y < 0){
      this.vel.y = -(this.vel.y);
    }
    if (this.loc.y > 800){
      this.vel.y = -(this.vel.y);
    }
  }
  render(){

  }
}
