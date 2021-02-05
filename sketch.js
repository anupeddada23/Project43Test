var hr; 
var mn; 
var sc;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(degrees);

  translate(400,200);
  hrAngle = map(hr, 0 ,60, 0, 360);
  push();
  rotate(hrAngle);
  stroke("red")
  strokeWeight(7);
  line (0,0,100,0);
  pop();

  scAngle = map(sc, 0 ,60, 0, 360);
  push();
  rotate(scAngle);
  stroke("green")
  strokeWeight(7);
  line (0,0,100,0);
  pop();

  mnAngle = map(mn, 0 ,60, 0, 360);
  push();
  rotate(mnAngle);
  stroke("blue")
  strokeWeight(7);
  line (0,0,100,0);
  pop();
  

  circle(30,30,200)
  circle.position(400,200)

 
  drawSprites();
}
//function hour(){
 // hrAngle = map(hr, 0 ,60, 0, 360);
  //push();
  //rotate(hrAngle);
  //stroke(22,0,0)
  //strokeWeight(7);
  //line (0,0,100,0);
 ///pop();
//}
//function second(){
  //scAngle = map(sc, 0 ,60, 0, 360);
  //push();
  //rotate(scAngle);
  //stroke(22,0,0)
  //strokeWeight(7);
 // line (0,0,100,0);
 // pop();
//}
//function minute(){
 // mnAngle = map(mn, 0 ,60, 0, 360);
 /// push();
 // rotate(mnAngle);
  //stroke(22,0,0)
 // strokeWeight(7);
  //line (0,0,100,0);
 // pop();
//}