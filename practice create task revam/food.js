class Food{
  constructor(){
    this.loc = createVector(w*(int(random(0,40))), w*(int(random(0,40))));
    this.clr = color(255, 0 , 0);

  }
  run(){
    this.render();
    this.update();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, w, w);
  }
  update(){
    if(snake.head.x === this.loc.x && snake.head.y === this.loc.y){
      this.loc.x = w * int(random(0, 40));
      this.loc.y = w * int(random(0, 40));
      score = score + 1;

    }
  }
}
