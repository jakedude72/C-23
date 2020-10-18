const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, box1, box2, ground;

function setup() {
    createCanvas(600, 600)

    engine = Engine.create()
    world = engine.world

    box1 = new Box(100,140, 50,50); 
    box2 = new Box(140,100, 50,50);

    ground = new Ground(300, height, 800, 20);
}

function draw() {
    background(255, 255, 255)
    Engine.update(engine)

    box1.display()
    box2.display()

    ground.display()
}