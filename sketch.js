let haze;
let line;
let x;
let y;
let l = 0;
let s;
let mode = 0;
let r;
let c=0;

function preload() {
  haze = loadImage("hazeWh.png");
  line = loadImage("line.png");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER);
  colorMode(HSB, 360,1,1,1)
}

function draw() {
 // background(0,10);
  // translate(-width/2, -height/2);
  if (mode == 0) {
    blendMode(ADD);
  } else if (mode == 1) {
    blendMode(MULTIPLY);
}else{
  blendMode(DIFFERENCE);
}
c=c+1;
for (let i = 0; i < 1
     ; i++) {
r=random(1);
if(r<.98){
  tint(c,1,1,1);
}else{
  tint(66,200,200);
}
  // background(0);
  x = random(width);
  y = random(height);
  s = random(5, 128);
 // image(haze, x, y, s, s);
  image(haze, mouseX,mouseY, s, s);
  
  //image(line, width/2,l);
  // }
  // l++;
  // if(l>height){
  //   l=0;
  // }
}
  if(c>360){
    c=0;
  }
  print(c);

}

function mousePressed() {
  mode++;
  if (mode > 2) {
    mode = 0;
  }

}