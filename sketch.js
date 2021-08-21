const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,mouth,ball,pipe,button;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  mouth = new BlowerMouth(500, 200, 120, 110);
  ball = new Ball(500, 100, 30);
 pipe = new BlowerPipe(355,238,170,30);

button=createButton("Click to Blow");
button.position(width/2,height-100);
button.class("blowButton");
button.mousePressed(blow);
 
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
     background("black");
       rectMode(CENTER);
    background(0);

    mouth.display();
    ball.display();
    pipe.display()

  }



function blow(){
  Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.01});
}
