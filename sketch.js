const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    getBgImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingshot = new Slingshot(polygon.body,{x:100,y:200});

    ground = new Ground(600,height,1200,20);
   stand = new Ground(390,300,250,20);
   box1=new Box(300,275,30,40);
   box7=new Box(330,275,30,40);
   box2=new Box(360,275,30,40);
   box3=new Box(390,275,30,40);
   box4=new Box(420,275,30,40);
   box5=new Box(450,275,30,40);
   box6=new Box(480,275,30,40);
   //level2
   box8=new Box(330,235,30,40);
   box9=new Box(360,235,30,40);
   box10=new Box(390,235,30,40);
   box11=new Box(420,235,30,40);
   box12=new Box(450,235,30,40);
   //level3
   box13=new Box(360,195,30,40);
   box14=new Box(390,195,30,40);
   box15=new Box(420,195,30,40);
   //level4
   box16=new Box(390,155,30,40);
   
   stand2 = new Ground(700,195,200,20);
   box17=new Box(630,180,30,40);
   box18=new Box(660,180,30,40);
   box19=new Box(690,180,30,40);
   box20=new Box(720,180,30,40);
   box21=new Box(750,180,30,40);
   //level 2
   box22=new Box(690,170,30,40);
   box23=new Box(660,170,30,40);
   box24=new Box(720,170,30,40);
   //level 3
   box25=new Box(690,160,30,40);


   // bird = new Bird(200,50);
    //log6 = new Log(230,180,80, PI/2);
   // slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("black");
    Engine.update(engine);

    imageMode(CENTER);

    image(polygon_img,polygon.position.x,polygon.position.y,40,40);


    //strokeWeight(4);
   ground.display();
   stand.display();
   fill("yellow");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box15.display();
  box14.display();
  box16.display();
stand2.display();
fill("yellow");
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
    //log6.display();
      
}

function mouseDragged(){
  //  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  //  slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
 async function getBgImage(){
  var response= await fetch("http://worldclockapi.com/api/json/est/now");
  var rj= await response.json()
  var dt=rj.currentDateTime;
  var hour=dt.slice(11,13)
  if(hour=>6 && hour<=17){
    
  }
}