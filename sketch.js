
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,ground,bananaGroup,survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  monkey=createSprite(80,315,20,40);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,400,10);
  //ground.addImage(monkey_running);
  ground.velocityX=-3;
  ground.x=ground.width/2;
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  

  
}


function draw() {
background("white");
  
  stroke("black");
  textSize(20);
  fill("white");
  text("score:" + score,400,50);
  
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space"))
    {
      monkey.velocityY=-10;
    }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  food();
  obstacles();
  drawSprites();
}
function food()
{
  if(frameCount%80===0)
    {
  banana=createSprite(400,150,20,10);
      banana.addImage("banana",bananaImage);
      banana.scale=0.1;
      banana.velocityX=-4;
      banana.y=Math.round(random(120,200));
      bananaGroup.add(banana);
      banana.lifetime=100;
    }
}
function obstacles()
{
   if (frameCount % 300 === 0){

  obstacle=createSprite(400,350,20,10);
      obstacle.addImage("obc",obstacleImage);
      obstacle.scale=0.1;
      obstacle.velocityX=-3;
      obstacleGroup.add(obstacle);
      obstacle.lifetime=100;
   }
  
}






