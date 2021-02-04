class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajetry=[]
    this.smokeImg= loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x>0 && this.body.position.x>200){
      var pos=[this.body.position.x,this.body.position.y]
      this.trajetry.push(pos)  
    }
    super.display();
    for (var i=0;i<this.trajetry.length;i++){
    image(this.smokeImg,this.trajetry[i][0],this.trajetry[i][1])
    }

  }
}
