const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;

function setup() {
  createCanvas(1200,600);
 
  engine = Engine.create();
  world = engine.world;
  
box1 = new Box (700,520,70,70)  
box2 = new Box (900,520,70,70)
box3 = new Box (700,440,70,70)
box4 = new Box (900,440,70,70)
box5 = new Box (800,360,70,70)

pig1 = new Pig (800,520)
pig2 = new Pig (800,440)

log1 = new Log (800,460,300,PI/2)
log2 = new Log (800,380,300,PI/2)
log3 = new Log (760,320,150,PI/7)
log4 = new Log (870,320,150-PI/7)

bird = new Bird (150,150)


ground = new Ground (600,height,1200,15)


}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode (CENTER)
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  pig1.display()
  pig2.display()
ground.display()
 log1.display()
 log2.display()
 log3.display()
log4.display()
bird.dispaly()
}