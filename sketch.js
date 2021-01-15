var mrect,frect
function setup() {

  createCanvas(800,400);
 mrect=createSprite(30,20,60,75)
 mrect.shapeColor="blue"
 mrect.debug=true

 frect=createSprite(400,200,25,65)
 frect.shapeColor="blue"
 frect.debug=true
}
function draw() {
  background(210,230,220);
  mrect.x=mouseX
  mrect.y=mouseY
  if(mrect.x-frect.x<mrect.width/2+frect.width/2&&
    frect.x-mrect.x<mrect.width/2+frect.width/2&&
    mrect.y-frect.y<mrect.height/2+frect.height/2
    && frect.y-mrect.y<mrect.height/2+frect.height/2){
      mrect.shapeColor="orange"
      frect.shapeColor="orange"
    }
    else{
      mrect.shapeColor="blue"
      frect.shapeColor="blue" 
    }
  drawSprites();
}