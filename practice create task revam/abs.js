
class abs{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(random(225), random(225), random(225));
    this.angle = 0;
    this.acc = createVector(0,0);
    this.id = id;
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.loc.x < 0){
      this.loc.x = width;
    }
    if(this.loc.x > width){
      this.loc.x = 0;
    }
    if(this.loc.y < 0){
      this.loc.y = height;
    }
    if(this.loc.y > height){
      this.loc.y = 0;
    }
  }
  update(){
    var disToAttractor;
    var disToRepellor;
    disToAttractor = this.loc.dist(attractor.loc);
    disToRepellor = this.loc.dist(repellor.loc);
    if(disToAttractor !== 0){
      this.acc = p5.Vector.sub(attractor.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.1);
    }
    if(disToRepellor < 150){
      this.acc = p5.Vector.sub(repellor.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(-0.5);
      }
    this.vel.limit(4);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    }

  render(){
    fill(this.clr);
    this.angle = this.vel.heading() + 360;
    this.angle = this.angle +0.1;
    push();
      translate(this.loc.x,this.loc.y);
      rotate(this.angle);
      ellipse(10, 50, 10, 10, 0, -8);
    pop();
    }

}
