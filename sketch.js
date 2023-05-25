var girl;
var girlImg;
var backgroundImg;
var bg;
var tiger;
var tigerImg;
var invisibleGround

function preload(){
  girlImg = loadAnimation("Girl1.png","Girl2.png","Girl3.png","Girl4.png");

  backgroundImg = loadImage("Backround.png");

  tigerImg = loadAnimation("Tiger1.png","Tiger2.png","Tiger3.png","Tiger4.png","Tiger5.png")
}



function setup() {
  createCanvas(800,600);
  
  bg = createSprite(400,300,800,600);
  bg.addImage(backgroundImg);
  bg.velocityX = -2

  girl = createSprite(450, 500, 50, 50);
  girl.addAnimation("running",girlImg);
  girl.scale = 0.5;

  tiger = createSprite(200, 500, 50, 50);
  tiger.addAnimation("tiger_running",tigerImg);
  tiger.scale = 2;

  //creating invisible ground
  invisibleGround = createSprite(200,550,800,10);
  invisibleGround.visible = false;

}

function draw() {
  background("black");
  
  if(keyDown("RIGHT_ARROW")) {
    girl.x=girl.x+4
  }
  if(keyDown("space")&& girl.y >= 100) {
    girl.velocityY = -10;
  }
  
 girl.velocityY = girl.velocityY + 0.8

  //reseting the background
  if(bg.x < 200){
    bg.x = bg.width/2
  }

//stop girl from falling down
  girl.collide(invisibleGround);
  
  drawSprites();

}