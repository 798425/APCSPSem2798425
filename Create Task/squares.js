class Squares{
  constructor(x, y, dx, dy){
      this.loc = createVector(random(0, 800), random(0, 800));
      this.vel = createVector(random(-8, 8), random(-8, 8));
      this.acc = createVector(0, 0);
      this.clr = color(0, 255, 0);
      this.w = 50;
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
    if(mouseX === this.loc.x){
      score = score + 1 
    }
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.w);
  }
}
