const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg,platform;

var check = true

var score = 0

var bgImg

var gameState = "sling"

function preload() {
    getTime()
dImg = loadImage("sprites/bg3.webp")
}

function setup(){
    
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600,height,1200,20);
    celing = new Ground(600, -500, 2400, 200)
    wall = new Ground(1300, 500, 200, 2000)
    wall2 = new Ground(0, 500, 10, 2000)
    platform = new Ground(150, 305, 300, 180);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,50);

    
    sling = new Slingshot(bird.body, {x:200, y:50})

}

function draw(){
    if(bgImg){
    background(bgImg);
    }
    else{
        background(dImg)
    }
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    sling.display()

    pig1.scoreIn()
    pig3.scoreIn()

    textSize(20)
    text("Score: " + score, 900, 50)

    console.log(bird.body.position.x)
    console.log(bird.body.position.y)
    
}

function mouseDragged() {
    if(gameState === "sling" && mouseX >= 0 && mouseX <= 250){
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY})
    }
}

function mouseReleased() {
    sling.fly()
    gameState = "fly"

}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
        Matter.Body.setPosition(bird.body, {x:100,y:50})
        sling.attach(bird.body)
        bird.bigarr = []
        gameState = "sling"
    }
}


async function getTime(){

var time = await fetch("http://worldtimeapi.org/api/timezone/America/Vancouver")
var Language = await time.json()
var slamp = Language.datetime
var clamp = slamp.slice(11,13)
console.log(clamp)

if(clamp >= 6 && clamp <= 18){
    bg = "sprites/bg.png"
}
else{
    bg = "sprites/bg2.jpg"  
}
bgImg = loadImage(bg);
}
