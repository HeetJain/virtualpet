//Create variables here
var dog,happyDog;
var foodS,foodStock;
var database;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250)
  dog.addImage(dogImg)
  dog.scale = 0.2
  database = firebase.database();
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
  }

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}

