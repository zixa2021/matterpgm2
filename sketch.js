const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,box3,box4;
var ground;
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(200,200,50,100);
    box2 = new Box(230,100,50,70);
  

    ground = new Ground(400,380,800,20);
   
}

function draw(){
 
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
   
    ground.display();
    
}










