const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload(){
  back = loadImage("snow1.jpg");

}

function setup(){
  createCanvas(900,500);
  engine = Engine.create();
  world = engine.world;

  var ops = {
    isStatic : true
  }
  ground = Bodies.rectangle(150,410,300,170,ops);
  World.add(world,ground);

  D = new TIGER(450,250,100,100);

  sling = new Slingshot(D.body,{x:450,y:250});
  

}

function draw(){
  background(back);
  Engine.update(engine);

  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,300,170);

  D.display();
  sling.display();

  
}
        

function mouseDragged(){
  if(gameState === "onSling"){
  Matter.Body.setPosition(D.body,{x:mouseX,y:mouseY})
  }
}

function mouseReleased(){
  sling.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(D.body);
      gameState = "onSling";
      Matter.Body.setPosition(D.body,{x:450,y:250})
      D.path = [];
  }
}