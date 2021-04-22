var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music= loadSound(music.mp3);
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(5,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";
//create two more blocks i.e. block3 and block4 here
    block3 = createSprite(505,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(715,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=2;
    ball.velocityY=2;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
        ball.bounceOff(block1);
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX=0;
        ball.velocityY=0;
        //write code to stop music
        music.play=false;
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) &&ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play(); 
        ball.bounceOff(block3);
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) &&ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
        ball.bounceOff(block4);
    }
    bounceOff(ball,block1);
    
    bounceOff(ball,block4);
    bounceOff(ball,block3);


    drawSprites();
}
function bounceOff(Object1,Object2){ 
  if (Object1.x - Object2.x < Object2.width/2 + Object1.width/2 && Object2.x - Object1.x < Object2.width/2 + Object1.width/2) { 
      Object1.velocityX = Object1.velocityX * (-1); 
      Object2.velocityX = Object2.velocityX * (-1); 
  } 
  if (Object1.y - Object2.y < Object2.height/2 + Object1.height/2 && Object2.y - Object2.y < Object2.height/2 + Object1.height/2) {
       Object1.velocityY = Object1.velocityY * (-1); 
       Object2.velocityY = Object2.velocityY * (-1); 
      }
  }

    function isTouching(Object1,Object2){
      if(Object2.x-Object1.x < Object1.width/2+Object2.width/2 && Object1.x-Object2.x < Object1.width/2+Object2.width/2 && Object2.y-Object1.y < Object1.height/2+Object2.height/2 &&Object1.y-Object2.y < Object1.height/2+Object2.height/2){
       return true;
       
      }else{
        return false;
      }
    }
     