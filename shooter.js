class Shooter{

    constructor(x,y,height,angle){
        var options={
            isStatic: true
        }
      this.body = Bodies.rectangle(x,y,70,height,options);
      this.width = 70;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world,this.body);
    }
    display(){
      rectMode(CENTER);
      fill("white")
      
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
  }
  