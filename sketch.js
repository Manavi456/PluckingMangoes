
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 const Constraint = Matter.Constraint;

var tree, stone;
var ground, boy, launcherObject;
var world;
var launchingForce = 100;
var mango1, mango2, mango3, mango4, mango5, mango6;

function preload(){
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone = new Stone(235,420,30);

	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	mango6 = new Mango(1000,230,30);

	tree = new Tree(1050,580);

	ground = new Ground(width/2,600,width,20);

   launcherObject= new Launcher(stone.body,{x:235,y:420});


	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  fill("darkgray");
  textSize(25);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 50,50);

  image(boy,200,340,200,300);

  drawSprites();
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display(); 
  mango3.display();
  mango4.display(); 
  mango5.display();
  mango6.display();
  launcherObject.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	launcherObject.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235, y:420});

		launcherObject.attach(stone.body);
		
	}
}

function detectCollision(Astone,Amango){
	stoneBodyPosition = Astone.body.position;
	mangoBodyPosition = Amango.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= Amango.r + Astone.r){
		Matter.Body.setStatic(Amango.body, false);
	}
}

