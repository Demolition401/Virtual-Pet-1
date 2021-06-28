//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{

	//load images here
  dog = loadImage("dogImg.png")
  happyDog = loadImage("dogImg1.png")
} 

function setup() {

  database=firebase.database()

	createCanvas(500, 500);
  dog = createSprite(100,100,20,20)
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  

  background(46,139,87)
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage( "happy" ,happyDog);
  }
textSize(50)
  text(foodS, 200, 200)
  
  drawSprites();

  dog.scale=0.3
  // background(46,139,87)
  // //add styles here

  // if(keyWentDown(UP_ARROW)){
  //   writeStock(foodS);
  //   dog.addImage( "happy" ,happyDog);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



