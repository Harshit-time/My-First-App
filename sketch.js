var zues,clouds,lightning;
var poseidon,water,shark;

var bolt,bolt_img;
var trident,trident_img;


var text1;
var textZues;
var textPoseidon;


var gameState = "begin";
function preload(){

  bolt_img = loadImage("../Images/Bolt.png");
  trident_img = loadImage("../Images/Trident.jpg");
  helmet_img = loadImage("../Images/Helmet.jpg");

}

function setup() {

  createCanvas(1200,400);

  bolt = createSprite(104,height/2,10,10);
bolt.addImage("Bolt",bolt_img);

trident = createSprite(1168,height/2,10,10);
trident.addImage("Trident",trident_img);
trident.scale = 0.3;





  start = new Begin();



  
}

function draw() {

  background(0);  
  
  
  stroke("red");
  strokeWeight(1.8);

  textSize(15);

  text1 = text("Which Quest Does thine want to take",480,10);

 textZues = text("Zues and The Lightning Thief",15,390);
 textPoseidon = text("Poseidon and The Ocean's Trident",357,390);


 if(mousePressedOver(bolt)){

  background(0);
  gameState = "play";
  

  
var zuesGame = new Zues();
  zuesGame.clear();
  //zuesGame.create();
  zuesGame.lightning();


}

  start.show();
  
  

  drawSprites();

}