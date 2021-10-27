var tom1,tom2,tom3
var tom
var jerry1,jerry2,jerry3
var jerry
var bg
function preload() {
    tom1=loadAnimation("images/cat1.png")
    tom2=loadAnimation("images/cat2.png","images/cat3.png")
    tom3=loadAnimation("images/cat4.png")
    jerry1=loadAnimation("images/mouse1.png")
    jerry2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerry3=loadAnimation("images/mouse4.png")
    bg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600)
    tom.addAnimation("tomSlepping",tom1)
    tom.scale=0.2
    jerry=createSprite(200,600)
    jerry.addAnimation("jerryStanding",jerry1)
    jerry.scale=0.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
     tom.velocityX=0;
     tom.addAnimation("tomlastimage",tom3)
     tom.changeAnimation("tomlastimage")
     tom.x=300;
     tom.scale=0.2;
     jerry.addAnimation("jerrylastimage",jerry3)
     jerry.changeAnimation("jerrylastimage")
     jerry.scale=0.15
     
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    jerry.addAnimation("jerryTeasing",jerry2)
    jerry.framDelay=25;
    jerry.changeAnimation("jerryTeasing")
    tom.velocityX=-7
    tom.addAnimation("tomRunning",tom2)
    tom.changeAnimation("tomRunning")
     
  }


}
