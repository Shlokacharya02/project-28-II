
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy;
var tree,mango1,mango2,mango3,mango4,mango5;
var stone;
var launcher;

function preload()
{
	boy = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(width/2,590,width,20);
 tree = new Tree(1050,340,450,500);
mango1 = new Mango(1000,200,40);	
mango2 = new Mango(900,230,40);	
mango3 = new Mango(960,140,30);
mango4 = new Mango(1200,260,40);
mango5 = new Mango(1100,200,50)
stone = new Stone(235,420,30);
launcher = new Launcher(stone.body,{x:235,y:420})

}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)

 ground.display();
 image(boy,200,340,200,300)
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 stone.display();
 launcher.display();
 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY})
}


function mouseReleased(){

    launcher.fly()
}

function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.radius+lstone.radius)
{
  Matter.Body.setStatic(lmango.body,false);
}
}

