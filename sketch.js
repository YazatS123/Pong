var paddle, ball;
var serve = "wait";
var PLAY = "play";
var WAITc = "wait";
var topEdge, rightEdge, leftEdge;
var losses = 0;
function setup() { 
  createCanvas(400, 400);
  ball = createSprite(200, 200, 20, 20);
  paddle = createSprite(200, 380, 100, 10);
  paddle.shapeColor = "white";
  ball.shapeColor = "white";
  topEdge = createSprite(200, 0.25, 400, 0.5);
  leftEdge = createSprite(0.25, 200, 0.5, 400);
  rightEdge = createSprite(399.75, 200, 0.5, 400);
  rightEdge.shapeColor = "lightgray";
  leftEdge.shapeColor = "lightgray";
  topEdge.shapeColor = "lightgray";
}
function draw() {
  background("lightgray");
  ball.bounceOff(topEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(paddle);
  if(serve === PLAY){
    paddle.x = mouseX;
  }
  if(ball.y > 400){
    losses = losses + 1;
    serve = WAITc;
  }
  if(serve === WAITc){
    textSize(30);
    if(losses > 0){
      text("Game over.", 50, 150);
    }
    text("Press space to serve.", 50, 180);
    if(keyDown("space")){
      serve = PLAY;
      ball.velocityX = 12;
      ball.velocityY = 9;
      ball.x = 200;
      ball.y = 200;
    }
  }
  drawSprites();
}
