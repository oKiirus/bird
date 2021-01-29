class Slingshot{

    constructor(bodyA, pointB){
      var options = {
          bodyA : bodyA,
          pointB : pointB,
          stiffness : 0.05,
         length : 10
      }
      this.sling = Constraint.create(options)
      this.pointB = pointB
      this.sling1 = loadImage("sprites/sling1.png")
      this.sling2 = loadImage("sprites/sling2.png")
      this.sling3 = loadImage("sprites/sling3.png")
      
      World.add(world,this.sling)
    }

    fly(){
       this.sling.bodyA =  null
       
    }

    attach(body){
        this.sling.bodyA = body
    }


    display(){
        image(this.sling1, 200, 20)
        image(this.sling2, 170, 20)
        push()
        if(this.sling.bodyA ){

            if(this.sling.bodyA.position.x < 220){
                
            
           
        
        strokeWeight(5)
            stroke(84, 39, 15)
        line(this.sling.bodyA.position.x - 20, this.sling.bodyA.position.y, this.pointB.x + 20, this.pointB.y)
        line(this.sling.bodyA.position.x - 20, this.sling.bodyA.position.y, this.pointB.x - 20, this.pointB.y)
        image(this.sling3,this.sling.bodyA.position.x - 30, this.sling.bodyA.position.y - 10, 15, 30)
            }

            else{
                strokeWeight(5)
                stroke(84, 39, 15)
            line(this.sling.bodyA.position.x + 20, this.sling.bodyA.position.y, this.pointB.x + 20, this.pointB.y)
            line(this.sling.bodyA.position.x + 20, this.sling.bodyA.position.y, this.pointB.x - 20, this.pointB.y)
            image(this.sling3,this.sling.bodyA.position.x + 25, this.sling.bodyA.position.y - 10, 15, 30) 
            }
    }
        pop()
        
    }


}