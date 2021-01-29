class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    this.bigarr = []

  }
display(){

//place = [x1,y1]
//this.bigarr=[[x1,y1],[x2,y2],..]
if(this.body.position.x > 200 && this.body.velocity.x > 10 && gameState === "fly"){
    var place = [this.body.position.x, this.body.position.y]
  this.bigarr.push(place)
}
  

  for(var i = 0; i < this.bigarr.length; i++){
  
    image(this.smoke, this.bigarr[i][0], this.bigarr[i][1])

  }

  super.display()



}
  
}
