const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;

function setup(){
    canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(200,200)

    ground = new Ground(200,400,400,20)
}
    function draw(){
        background(0);
        Engine.update(engine);
        box1.display();
        ground.display();
        

    }
    function keyPressed(){
        
        if (keyCode===39)
        {
            
            box1.speed = 6
            
        }
    }
    