var bg
var tom1,tom2,tom3,tom4
var jerry1,jerry2,jerry3,jerry4
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    tom1=loadAnimation("images/cat1.png")
    tom2=loadAnimation("images/cat2.png","images/cat3.png")
    tom4=loadAnimation("images/cat4.png")
    jerry1=loadAnimation("images/mouse1.png")
    jerry2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerry4==loadAnimation("images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom3=createSprite(870,600)
    tom3.addAnimation("tomsleeping",tom1)
    tom3.scale=0.2
    jerry3=createSprite(200,600)
    jerry3.addAnimation("jerrystanding",jerry1)
    jerry3.scale=0.2
}

function draw() {
   
    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom3.x - jerry3.x < (tom3.width - jerry3.width)/2){
        tom3.velocityX=0
        tom3.addAnimation("tomstoping",tom4)
        tom3.x=300
        tom3.scale=0.2
        tom3.changeAnimation("tomstoping")
        jerry3.addAnimation("jerrystoping",jerry4)
        jerry3.scale=0.15
        jerry3.changeAnimation("jerrystoping")
    }
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
   tom3.velocityX=-5
   tom3.addAnimation("tomrunning",tom2)
   tom3.changeAnimation("tomrunning") 
   jerry3.addAnimation("jerryteasing",jerry2)
   jerry3.changeAnimation("jerryteasing")
}
  //For moving and changing animation write code here


}

