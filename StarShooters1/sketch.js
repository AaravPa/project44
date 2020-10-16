var playerShip, playerShipIMG, backGroundIMG;
var enemy1, enemy2, enemy3, enemy1IMG, enemy2IMG, enemy3IMG;

function preload() {
  playerShipIMG = loadImage("images/playerShip.png");	
  enemy1IMG = loadImage("images/enemy_1.png");	
  enemy2IMG = loadImage("images/enemy_2.png");	
  enemy3IMG = loadImage("images/enemy3.png");	
  backGroundIMG = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png");
}

function setup() {
  createCanvas(500, 700);

  bg = createSprite(200,350,500,1400);
  bg.addAnimation("background", backGroundIMG);
  bg.scale = 0.5;
  bg.velocityY = 2;
  bg.y = bg.height/2;

  playerShip = createSprite(200,200,50,50);
  playerShip.addImage("spaceship", playerShipIMG);
}


function draw() {
  
  background(0);
  if(bg.y > 350) {
    bg.y = bg.height/2;
  }

  drawSprites();
 
}



