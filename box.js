class Box{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.width = width ;
        this.height = height;
     }

     display(){
         var position = this.body.position;
         var angle = this.body.angle;
         push();
         translate(position.x,position.y);
         rotate(angle)
         rectMode(CENTER);
         rect(0,0,this.width,this.height);
         pop();
     }
}