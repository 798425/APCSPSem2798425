class Boids{
  constructor(id){
    this.loc = createVector(random(0, 200) * id, random(0, 200) * id);
    this.vel = createVector(random(-8, 8), random(-8, 8));
    this.acc = createVector(0, 0);
    this.clr = color(random(0, 255), random(0, 255), random(0, 255));
    this.id = id;
  }
  run(){
    this.render();
  //  this.update();
    this.checkEdges();
  }
  render(){
        stroke(this.clr);
        line(this.loc.x, this.loc.y, 400, 400);
  }
  update(){
    this.vel.add(this.acc);
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
