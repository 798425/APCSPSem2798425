class Boids{
  constructor(){
    this.loc = createVector(random(0, 800) random(0, 800));
    this.vel = createVector(dx, dy);
    this.acc = createVector(dx, dy);
    this.clr = color(255, 0, 0);
  }
}
