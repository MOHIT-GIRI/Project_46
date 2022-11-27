var player ,player_running;
var ground;
var obstacle;

function preload(){
  
}

function setup() {
  createCanvas(800,400);
  

  player=createSprite(50,370,10,50)
  
  ground=createSprite(200,380,400,10)
  obsgroup = new Group();
}

function draw() {
  background(255,255,255); 

  player.collide(ground) 
 

  if(keyDown("space")){
    player.velocityY=-10
  }

  player.velocityY = player.velocityY+0.5

  ground.velocityX = -4

  if(ground.x<=0){
    ground.x=ground.width/2
  }
  if(obsgroup.isTouching(player)){
    obsgroup.setVelocityXEach(0);
   //obsgroup.destroyEach();
   obsgroup.setLifetimeEach(-1);
  }
  obstacle();

  drawSprites();
}
function obstacle(){
  if(frameCount%100 ==0){
    var obs=createSprite(380,Math.round(random(100,370)),50,50)
    obs.velocityX=-1
    obsgroup.add(obs)
  }
}