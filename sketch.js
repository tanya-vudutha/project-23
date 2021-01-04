var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redBox1, redBox2, redBox3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800,700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
	var pos = packageBody.position;
	var angle= packageBody.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    pop();
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 630, width, 19 , {isStatic:true} );
 	World.add(world, ground);

	redBox1 = new RedBox(400,650,200,20);
	redBox2 = new RedBox(300,610,20,100);
	redBox3 = new RedBox(500,610,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
	
  redBox1.display();
  redBox2.display();
  redBox3.display();
	
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	
  }
}



