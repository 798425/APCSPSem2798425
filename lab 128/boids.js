class Boids{
  constructor(x, y, dx, dy){
    this.loc = createVector(random(0, 800), random(0, 800));
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0);
    this.clr = color(random(0, 255), random(0, 255), random(0, 255));
  }
  run(){
    this.render();
    this.update();
    this.checkEdges();
  }
  render(){
    stroke(100);
    strokeWeight(3);


  }
  update(){
    this.loc.add(this.vel);
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
}
