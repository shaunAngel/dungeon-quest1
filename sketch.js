var prince, prince2, prince3
var princess
var vampire, zombie 
var bg

function preload(){
princeImage = loadImage("prince/prince.png");
prince2Image = loadImage("prince/prince_run.png");
prince3Image = loadImage("prince/prince_gameover.png");
princessImage = loadImage("princess/princess.png");
vampireImage = loadImage("vampires/vamp1.png");
zombieImage = loadImage("zombies/zombie2.png");
bgImage = loadImage("bg.png");
restartImage = loadImage("restartimg.jpg");


}
function setup(){
  createCanvas(1000,200);


}
function draw(){
background(bgImage);

drawSprites();
}