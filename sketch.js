var box1, box2, box3, box4;


function setup() {
  createCanvas(800,400);
  box1=createSprite(750, 200, 50, 50);
  box1.shapeColor=("green")
  box1.velocityX=-3
  box1.debug=true;
  box2=createSprite(50,200,50,50);
  box2.shapeColor=("blue");
  box2.velocityX=3
  box3=createSprite(400,350,50,50);
  box3.shapeColor=("yellow")
  box3.velocityY=-3
  box4=createSprite(400,50,50,50);
  box4.shapeColor= "orange";
  box4.velocityY=3

}




function draw() {
  background(94, 182, 187);

   
  bounceOff(box1,box2);
  bounceOff(box3,box4);



  
  drawSprites();
}
function bounceOff(object1, object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2 + object2.width/2)
    {
      object1.velocityX=object1.velocityX*-1;
      object2.velocityX=object2.velocityX*-1;
    }
    if ( object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object2.height/2){
      object1.velocityY=object1.velocityY*-1;
      object2.velocityY=object2.velocityY*-1
  }
}

