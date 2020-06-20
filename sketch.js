var bullet, wall;
var speed, weight;
var deformation;
var thickness;
function setup() {
  createCanvas(1600, 400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 70, 25);
  bullet.shapeColour = color("white");
  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColour = (80, 80, 80)
  bullet.velocityX = speed;
}

function draw() {
  background(0, 0, 0);  
  bullet.display();
  wall.display();
  Deformation();
  hasCollided();
}
function Deformation(){
  if(wall.x - bullet.x < (bullet.width + wall.width) / 2){
    bullet.velocityX = 0;
    deformation = 0.5 * weight * speed * speed / thickness * thickness * thickness;
    if(deformation > 10){
        bullet.shapeColour = color(255, 0, 0);
    }
    if(deformation < 10){
      bullet.shapeColour = color(0, 255, 0);
    }
  }
}

function hasCollided(){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false
}
