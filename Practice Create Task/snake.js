class Snake{
  constructor(x, y){
    this.head = createVector(x, y);
    this.clr = color(255, 255, 255);
    this.vel = createVector(0, 0);
    this.body = [];
  }

  run(){
    this.update();
    this.checkEdges();
    this.loadSegments();
    this.render();
    this.tangled();

  }
  update(){
    frameRate(10);
    for(var i = this.body.length - 1; i > 0; i--){
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }
    if(this.body.length > 0){
      this.body[0].y = this.head.y;
      this.body[0].x = this.head.x;
    }
    this.head.add(this.vel);
  }

  checkEdges(){
      if(this.head.x < 0){
        gameState = 3; //left
      }
      if(this.head.x > 800){
        gameState = 3; //right
      }
      if(this.head.y > 800){
        gameState = 3; //bottom
      }
      if(this.head.y < 0){
        gameState = 3;  //top
      }

    }


  render(){
    fill(this.clr);
    rect(this.head.x, this.head.y, w, w);
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, w, w);
    }
  }

  loadSegments(){
    if(this.body.length/2 < score){
      this.body.push(createVector(0, 0));
    }
  }

  tangled(){
    for(var i = 0; i < this.body.length; i++){
      if(this.head.x === this.body[i].x && this.head.y === this.body[i].y){
          gameState = 3;
      }
    }
  }
}
