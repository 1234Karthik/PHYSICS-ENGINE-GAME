const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

function setup() {

  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(140, 250, 20, 20);

  block1 = new Block(450, 100, 30, 40);
  block2 = new Block(480, 100, 30, 40);
  block3 = new Block(510, 100, 30, 40);
  block4 = new Block(460, 70, 30, 40);
  block5 = new Block(490, 70, 30, 40);
  block6 = new Block(480, 50, 30, 40);
  // block4 = new Block(650, 100, 30, 40);
  // block5 = new Block(700, 100, 30, 40);

  slingshot = new SlingShot(ball.body,{x:140, y:250});

  stand1 = new Stand(450, 290, 200, 20);
  //stand2 = new Stand(600, 190, 100, 20);
  
 // Engine.run(engine);

}

function draw() {

  background("orange"); 

  Engine.update(engine);

  ball.display();

  block1.display();
  block2.display();
  block3.display();  
  block4.display();
  block5.display();
  block6.display();

  slingshot.display();

  stand1.display();
  //stand2.display();

  drawSprites();

}

function mouseDragged(){

  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

  
}

function mouseReleased(){

  slingshot.fly();

}

// function detectCollision(lball,lblock){
// 	blockBodyPosition=lball.body.position
// 	ballBodyPosition=lball.body.position
// 	var distance=dist(ballBodyPosition.x,ballBodyPosition.y,blockBodyPosition.x,blockBodyPosition.y);

// 	if(distance<=lblock.r+lball.r){
// 		Matter.Body.setStatic(lblock.body,false);

//   }

// }

function keyPressed(){

  if(keyCode === 32){
    // Matter.Body.setPosition(ball.body, {x: 200, y: 50});
   slingshot.attach(ball.body);
  }
}
