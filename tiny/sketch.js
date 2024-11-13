/*
----- Coding Tutorial by Patt Vira ----- 
Name: Intro to textToPoints function
Video Tutorial: https://youtu.be/eZHclqx2eJY?si=hlW5FjSn0s6LLygX

p5js Reference: https://p5js.org/reference/#/p5.Font/textToPoints

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let font;
let points = [];
let r = 15; let angle = 0;

function preload() {
  font = loadFont("./Roboto-Regular.ttf");
}

function setup() {
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("sketch");
  points = font.textToPoints("A", 100, 300, 300, {
    sampleFactor:0.1,
    simplifyThreshold: 0
  });
  angleMode(DEGREES);
}

function draw() {
  background(220);
  for (let i=0; i<points.length; i++) {
    ellipse(points[i].x + r*sin(angle + i*25), points[i].y, 10, 10);
  }
  angle += 10;
}