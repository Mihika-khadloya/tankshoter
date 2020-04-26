const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var tankerBottom,tanker1,tanker2;
var ground;
var shooter;

function setup() {
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    shooter = new Shooter(135,320,35,PI/2);
    tankerBottom = new Tankerbottom(80,350,55);
    ground = new Ground(200,400,20,400);
    tanker1 = new Tanker1(80,370,115,40);
    tanker2 = new Tanker1(80,350,115,10);
}

function draw() {
background("black");
Engine.update(engine);

shooter.display();
tankerBottom.display();
ground.display();
tanker1.display();
tanker2.display();
}


