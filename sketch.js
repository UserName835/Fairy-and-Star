var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	isStatic: true
}

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);


	star.visible= true;
	fairy.visible= true;
	
  Engine.run(engine);
  keyPressed();

}


function draw() {
  background(bgImg);
  
  if(starBody.x>460&& starBody.position.y > 470){
	isStatic=true;
	  Body.setStatic(starBody,isStatic);
  }
  console.log(starBody.position.x);
  drawSprites();

}

function keyPressed() {
	//write code here 
	
	if(keyCode===LEFT_ARROW){
			fairy.x=fairy.x-20;
	}
	if(keyCode===RIGHT_ARROW){
		fairy.x=fairy.x+20;
	}
	if(keyCode===DOWN_ARROW){	
		isStatic=false;
	Body.setStatic(starBody,isStatic);
	star.x = starBody.position.x;
  star.y = starBody.position.y;
	
	}

}


