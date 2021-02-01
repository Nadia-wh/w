//Engine  
const Engine=Matter.Engine;
//World
const World=Matter.World;
//Bodies
const Bodies=Matter.Bodies;

var engine,world;
var object;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  var g_options={
    isStatic:true
  }

  object=Bodies.rectangle(400, 390, 800, 30,g_options);
  World.add(world, object) ;
  console.log(object)
 
}

function draw() {
  background(25,255,255); 
  Engine.update(engine) ; 
   rectMode(CENTER);
   rect(object.position.x,object.position.y,800,30);
}