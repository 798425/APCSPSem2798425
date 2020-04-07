class Squares{
  constructor(x, y, dx, dy){
      this.loc = createVector(random(0, 800), random(0, 800));
      this.vel = createVector(random(-8, 8), random(-8, 8));
      this.acc = createVector(0, 0);
      this.clr =  color (random (0, 255), random(0, 255),random(0, 255));
      this.w = random(0, 69);
    }

  run(){
    this.checkEdges();
    this.update();
    this.render();
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
  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }

  render(){
    rectMode(CENTER);
    fill(this.clr);
    rect(this.loc.x, this.loc.y, random(0, 69),random(0, 69));
  }
}
