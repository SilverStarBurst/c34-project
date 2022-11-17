const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var basketball;
var basketball_img;
var ground;

function preload() {
  basketball_img = loadImage("basketball.png");

}

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;
  var basketball_options = {
    restitution: 1,
    isStatic: false,
  }
  var ground_options = {
    isStatic: true,
  }
  basketball = Bodies.circle(700,300,15,basketball_options);
  World.add(world,basketball);
  ground = Bodies.rectangle(500,530,1000,10,ground_options);
  World.add(world,ground);
}

function draw() 
{
  background("pink");
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1000,10,);
  image(basketball_img,basketball.position.x, basketball.position.y, 100, 100);
  if(keyCode==UP_ARROW&&basketball.position.y<511) {
    basketball.position.y = basketball.position.y-1;
  }
  console.log(basketball.position.y);
}

