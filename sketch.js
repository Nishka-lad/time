function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  drawSprites();
  translate(200,200);
  rotate(-90);

  let hr=hour();
  let mn=minute();
  let sc=second();
  
  strokeWeight(8);
  noFill();

  stroke("YellowGreen");
  let sec = map(sc,0,60,0,360);
  arc(0,0,300,300,0,sec);
  push();
  rotate(sec);
  line(0,0,105,0);
  pop();
  
  stroke("OliveDrab");
  let min = map(mn,0,60,0,360);
  arc(0,0,280,280,0,min);
  push();
  rotate(min);
  line(0,0,80,0);
  pop();

  stroke("DarkOliveGreen");
  let hor = map(hr %12 ,0,12,0,360);
  arc(0,0,260,260,0,hor);
  push();
  rotate(hor);
  line(0,0,55,0);
  pop();

}