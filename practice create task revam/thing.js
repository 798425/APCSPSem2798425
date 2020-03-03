class Thing{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(random(225), random(225), random(225));
    this.w = 30;
    this.ballx = dx;
    this.acc = createVector(-0.05,0.05);
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
    this.isColliding();
  }
  //keeps the balls on the screen or teleport to the other side of the screen
  checkEdges(){
    if (this.loc.x < 0){
      this.loc.x = width;
    }
    if (this.loc.x > width){
      this.loc.x = 0;
    }
    if (this.loc.y < 0){
      this.vel.y = -(this.vel.y);
    }
    if (this.loc.y > height){
        this.vel.y = -(this.vel.y);
    }
    //checks to see if the ball touches the paddle and makes it bounce off
    if (this.loc.x > paddle.loc.x && this.loc.x < paddle.loc.x + paddle.w && this.loc.y >= paddle.loc.y - 10 && this.loc.y <= paddle.loc.y + paddle.h && this.vel.y > 0){
      this.vel.y = -(this.vel.y);
      score = score + 1;
      if (score === winScore){
        win = 1;
      }
    }
  }
  //allows the balls to move and accelerate
  update(){
    this.vel.add(this.acc);
    this.loc.y = this.vel.y + this.loc.y;
    this.loc.x = this.loc.x + this.ballx;
  }
  //creates the size and shape of the ball
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w)
  }
  //checks to see if the ball is touching the underside of the paddle
  isColliding(){
    if (this.loc.x > paddle.loc.x && this.loc.x < paddle.loc.x + paddle.w && this.loc.y > paddle.loc.y && this.loc.y < paddle.loc.y + paddle.h && this.vel.y < 0){
      return true;
    }else{
      return false;
    }
  }
}
