var meteorX = 500;
var meteorY = -500;
var meteorSpeed = 10;
var score = 0;
let img;

function setup() {
  canvas = createCanvas(1000,1000);
  rectMode(CENTER);
  colorMode(RGB,255,255,255,1);
  imageMode(CENTER);
  textSize(20);
  img = loadImage('meteoor2.png');
  img2 = loadImage('Aarde.webp')
  img3 = loadImage('ufo.webp')
  img4 = loadImage('warning.png')
}

function draw() {
  background('black');

  let flugzeugX = constrain(mouseX,75,925);
  let flugzeugY = constrain(mouseY,90,930);
  
  for (let i = 100; i>0; i--) {
    ster(random(0,1000),random(0,1000));
  }
  
  image(img2, 640, 450, 200, 200);
  image(img3, 840, 920, 200, 200);
  
  fill(246, 241, 213);
  ellipse(30, 700, 400, 400);
  
  fill(193,68,14);
  ellipse(150,200,120,120);

  fill(253,184,19);
  ellipse(975,0,400,400);

  image(img, meteorX, meteorY, 400, 400);

  push();
  flugzeug(flugzeugX,flugzeugY);
  pop();

  if(meteorX + 100 > flugzeugX - 75 && meteorX - 100 < flugzeugX + 75) {
    if(meteorY + 100 > flugzeugY - 90 && meteorY - 100 < flugzeugY + 70) {
      fill(255,0,0,0.5);
      rect(500,500,1000,100);
      textAlign(CENTER,CENTER);
      fill('white');
      textSize(100);
      text("Game Over",500,500);
      textSize(20);
      text("Press space to restart",500,570)
      image(img4, 150, 500, 80, 80);
      image(img4, 850, 500, 80, 80);
      noLoop();
    }
  }

  if(meteorY - 100 > 1000) {
    while(meteorY > -100) {
      meteorY = meteorY - 2; 
    }
    
    if(meteorSpeed < 29.9) {
      meteorSpeed += 0.2;
    }
      
    if(meteorSpeed < 20) {
      meteorSpeed += 0.5;
    }

    if(meteorSpeed < 25) {
      meteorSpeed += 0.3;
    }
    
    meteorX = random(100,900);
  }

  textAlign(LEFT,CENTER);
  fill('white');
  text("Score: " + score,10,30);
  
  meteorY = meteorY + meteorSpeed;
  score ++;
}

function ster(x,y) {
  noStroke();
  fill(255,255,255,0.5);
  ellipse(x,y,2.5,2.5);
}

function flugzeug(x,y) {
  translate(x,y);
  
  //Geweer
  fill(192, 192, 192);
  rect(0, -65, 10, 50);
  
  //Staart
  fill(0, 230, 230);
  triangle(0, 30, 50, 70, -50, 70);

  //Basis
  rect(0, 0, 50, 100);

  //Vleugels
  triangle(-25, 10, -25, -20, -75, 20);
  triangle(25, 10, 25, -20, 75, 20);

  //Neus
  ellipse(0, -50, 50, 50);
  noStroke();
}

function keyPressed(){
  if (key == ' ') {
    loop();
    while(meteorY > -100) {
      loop();
      meteorY = meteorY - 2;
      loop();
    }
  score = 0;
  meteorSpeed = 10;
  }  
}
