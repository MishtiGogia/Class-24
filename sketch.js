const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;



var myEngine, myWorld;

var box1,box2,box3,box4,box5;
var ground;
var log1,log2,log3,log4;
var pig1,pig2;
var bird;

function setup() {
  createCanvas(1200,400);
myEngine=Engine.create();    // myEngine.world
myWorld=myEngine.world;


box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);

log1 =new Log(810,260,300,PI/2);

pig1 =new Pig(810,350);

box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);

log2 =new Log(810,180,300,PI/2);

pig2 =new Pig(810,220);

box5 = new Box(810,160,70,70);

log3 =new Log(760,120,150,PI/7);
log4 =new Log(870,120,150,PI/-7);

bird =new Bird(600,100);

ground = new Ground(600,height,1200,40);

}

function draw() {
  background(0);
Engine.update(myEngine);
  

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   ground.display();
   log1.display();
   log2.display();
   log3.display();
   log4.display();
   pig1.display();
   pig2.display();
   bird.display();

}