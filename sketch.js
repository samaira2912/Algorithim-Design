var movingRect,fixedRect;
var block,block2;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(300,300,100,100);
  block = createSprite(400,200,50,50);
  block2 = createSprite(100,200,50,50);
  block.velocityX = -2;
  block2.velocityX = 2;

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  block.shapeColor = "blue";
  block2.shapeColor = "yellow";

}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ){

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

} else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

}

if(block.x - block2.x < block.width/2 + block2.width/2 && 
   block2.x - block.x < block.width/2 + block2.width/2){
block.velocityX = -1*block.velocityX;
block2.velocityX = -1*block2.velocityX;
}
  drawSprites();
}