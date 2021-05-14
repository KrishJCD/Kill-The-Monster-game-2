const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
const Body=Matter.Body;

var engine,world;

var backImg;
var sling1;
var ground1,monster1,hero1;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var ground2;
function preload() {
//preload the images here
  backImg=loadImage("gbg.png");
}
//var camera;
function setup() {

  engine=Engine.create();
  world=engine.world;
  createCanvas(1366, 600);
  ground1=new Ground(0,500,1500,15,true);
  ground2=new Ground(900,420,50,15,false);
  monster1=new Monster(900,410,100,100);
  hero1=new Hero(200,200,120);
  sling1=new SlingShot(hero1.body,{x:200,y:200});
  //camera=createCamera();


  box1 = new Block(600, 100, 40, 40);
  box2 = new Block(400, 100, 40, 40);
  box3 = new Block(400, 100, 40, 40);
  box4 = new Block(400, 100, 40, 40);
  box5 = new Block(400, 100, 40, 40);
  box6 = new Block(400, 100, 40, 40);
  box7 = new Block(500, 100, 40, 40);
  box8 = new Block(500, 100, 40, 40);
  box9 = new Block(500, 100, 40, 40);
  box10 = new Block(500, 100,40, 40);
  box11 = new Block(500, 100, 40, 40);
  box12 = new Block(500, 100, 40, 40);
  box13 = new Block(500, 100, 40, 40);
  box14 = new Block(500, 100, 40, 40);
  box15 = new Block(600, 100, 40, 40);
  box16 = new Block(600, 100, 40, 40);
  box17 = new Block(600, 100, 40, 40);
  box18 = new Block(600, 100, 40, 40);
  box19 = new Block(600, 100, 40, 40);
  box20 = new Block(600, 100, 40, 40);
  box21 = new Block(700, 100, 40, 40);
  box22 = new Block(700, 100, 40, 40);
  box23 = new Block(700, 100, 40, 40);
  box24 = new Block(700, 100, 40, 40);
  box25 = new Block(700, 100, 40, 40);
  box26 = new Block(700, 100, 40, 40);

}

function draw() {
  background(backImg);
  Engine.update(engine)
  hero1.display();
  ground1.display();
  monster1.display();
  sling1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()

}

function mouseDragged()
{
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY});
}

