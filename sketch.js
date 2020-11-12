
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof1;
var bob1;
var bob2;
var bob3 , bob4 , bob5;
var sling1 , sling2 , sling3 , sling4 , sling5;
function preload()
{
	
}

function setup() {
	createCanvas(2000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	roof1 = new Ground(400 , 150 , 8000 ,50);
	//bob1 = new Bob()
	bob1 = new Bob(300 , 200 , 100);
	bob2 = new Bob(400,200,100);
	bob3 = new Bob (500,200,100);
	bob4 = new Bob(600,200,100);
	bob5 = new Bob(700,200,100);

	//sling1 = new chain(bob1 , {x:100,y:100});
	sling1 = new slingshot(bob1.body , {x:500 , y:100})
	sling2 = new slingshot(bob2.body , {x:600,y:100});
	sling3 = new slingshot(bob3.body , {x:700 , y:100});
	sling4 = new slingshot(bob4.body , {x:800 , y:100});
	sling5 = new slingshot(bob5.body , {x:900 , y:100});
}


function draw() {
Engine.update(engine);
  background(100);
  roof1.display();
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  keyPressed()
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 
