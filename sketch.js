var bg,cat,mouse
function preload() {
    //load the images here
  bg=loadImage("images/garden.png");
  cat1=loadAnimation("images/cat1.png");
  cat2=loadAnimation("images/cat2.png","images/cat3.png");
  cat3=loadAnimation("images/cat4.png");
  mouse1=loadAnimation("images/mouse1.png");
  mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
  mouse3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat=createSprite(800,700)
   cat.addAnimation("sleeping",cat1);
   cat.scale=0.2;

   mouse=createSprite(150,700)
   mouse.addAnimation("eating",mouse1);
   mouse.scale=0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
 if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    mouse.addAnimation("happy",mouse3);
    mouse.changeAnimation("happy");
    cat.addAnimation("standing",cat3);
    cat.changeAnimation("standing");
   cat.velocityX=0;
   cat.x=250
 }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode===LEFT_ARROW){
  mouse.addAnimation("teasing",mouse2);
  mouse.changeAnimation("teasing");
  mouse.frameDelay=25;
  cat.addAnimation("running",cat2);
 cat.changeAnimation("running");
 cat.velocityX=-5;
 }
 
}
