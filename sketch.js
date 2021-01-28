
var fairyImg,starImg,bgImage;

var fairy,star;


function preload()
{
  bgImage= loadImage("images/starnight.png");
  fairyImg=loadImage("images/fairy1.png");
  starImg=loadImage("images/star.png");

}



function setup() {
  createCanvas(800, 750);
  
  fairy =  createSprite(200,700,20,60);
  fairy.addImage(fairyImg);
  fairy.scale=0.1;


  star= createSprite(700,100,20,20);
  star.addImage(starImg);
  star.scale=0.1;
}


function draw() {
  background(bgImage);

  if(keyDown("left"))
  {
    fairy.x=fairy.x-5;
  }
  if(keyDown("right"))
  {
    fairy.x=fairy.x+5;
  }

  if(keyDown("space"))
  {
    star.y=star.y+5;
  }

  drawSprites();

}
