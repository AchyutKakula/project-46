var player, playerImage1;

function preload() {
playerImage1 = loadImage("images/background.gif");


}


function setup() {
  createCanvas(800,400);
  player = createSprite(300, 150);
  

}

function draw() {

  background(255,255,255);
  imageMode(CENTER);
 image(playerImage1, player.x, player.y);
  drawSprites();
}

