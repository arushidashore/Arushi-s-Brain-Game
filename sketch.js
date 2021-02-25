var player_still, player_run
var player_still_left, player_run_left
var player_jump, player_shoot, player_punch, player_beginning
var player_jump_left, player_shoot_left, player_punch_left
var neuron_image, neuron2_image, spark_image
var background_image
var player, background_img


function preload(){
  player_still = loadAnimation("../images/player_still.png");
  player_run = loadAnimation("../images/player_run1.png","../images/player_run2.png","../images/player_run3.png");
  player_still_left = loadImage("../images/player_still_left.png");
  player_run_left = loadAnimation("../images/player_run1_left.png","../images/player_run2_left.png","../images/player_run3_left.png");
  player_jump = loadImage("../images/player_jump.png");
  player_shoot = loadImage("../images/player_shoot.png");
  player_punch = loadImage("../images/player_punch.png");
  player_jump_left = loadImage("../images/player_jump_left.png");
  player_shoot_left = loadImage("../images/player_shoot_left.png");
  player_punch_left = loadImage("../images/player_punch_left.png");
  player_beginning = loadImage("../images/player_beginning.png");
  neuron_image = loadImage("../images/neuron_image.png");
  neuron2_image = loadImage("../images/neuron_image_two.png");
  spark_image = loadImage("../images/spark_image.png");
  background_image = loadImage("../images/background_image.png");
}
function setup() {
  createCanvas(1200,800);
  background_img = createSprite(displayWidth/2,displayHeight/2-100,1200,displayHeight);
  background_img.x = background_img.width/2; 
  background_img.addImage(background_image);
  background_img.scale = 3.0;
  player = createSprite(300,200,15,15);
  player.addAnimation("still_player",player_still);
  player.addAnimation("player_motion",player_run);
  player.scale = 2.0

}

function draw() {
  background(0); 
  background_img.velocityX = -2

  if (background_img.x<400){
    background_img.x = background_img.width/2+200; 
  }

  if (keyDown("RIGHT_ARROW")){
    player.changeAnimation("player_motion",player_run);
  }
drawSprites();
}

