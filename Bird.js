class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,100,100);
    this.image = loadImage("image.png");
   // this.image.scale = 15;
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

  
      var angle = this.body.angle;
     // push();
      //translate(this.body.position.x, this.body.position.y);
      //rotate(angle);
     // imageMode(CENTER);
      // image(this.image,this.body.position.x, this.body.position.y , this.width, this.height,400,400);
      //pop();
    




    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
