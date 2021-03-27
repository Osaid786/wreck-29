
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5;
var stand1,stone,sling;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    ground = new Ground(200,350);
    stand1 = new Stand(250,300);
    stone = new Stone(150,100);
    sling = new launcher(stone.body, {x:150,y:100})
    block1 = new Box(250,0,PI/3);
    block2 = new Box(250,50,PI/4);
    block3 = new Box(250,100,PI/2);
    block4 = new Box(250,150,PI/6);
    block5 = new Box(250,200,PI/180);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  
 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  stand1.display();
  ground.display();
  stone.display();
  sling.display();
}



function mouseDragged(){
  
        
   Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){

  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
     sling.attach(stone.body);
  }

}