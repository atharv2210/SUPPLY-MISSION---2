var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var RightRect, CenterRect, LeftRect, RightBody, LeftBody, CenterBody;

function preload() {
  helicopterIMG = loadImage("helicopter.png");
  packageIMG = loadImage("package.png");
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);

  packageSprite = createSprite(width / 2, 80, 10, 10);
  packageSprite.addImage(packageIMG);
  packageSprite.scale = 0.2;

  helicopterSprite = createSprite(width / 2, 200, 10, 10);
  helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale = 0.6;

  groundSprite = createSprite(width / 2, height - 35, width, 10);
  groundSprite.shapeColor = color(255);

  engine = Engine.create();
  world = engine.world;

  packageBody = Bodies.circle(width / 2, 200, 5, {
    restitution: 0,
    isStatic: true,
  });
  World.add(world, packageBody);

  var options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(width / 2, 650, width, 10, options);
  World.add(world, ground);

  LeftRect = createSprite(300, 610, 20, 100);
  LeftRect.shapeColor = color(255, 0, 0);

  CenterRect = createSprite(400, 650, 200, 20);
  CenterRect.shapeColor = color(255, 0, 0);

  CenterBody = Bodies.rectangle(400, 635, 200, 20, options);
  World.add(world, CenterBody);

  RightRect = createSprite(500, 610, 20, 100);
  RightRect.shapeColor = color(255, 0, 0);

  RightBody = Bodies.rectangle(500, 610, 20, 100, options);
  World.add(world, RightBody);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  drawSprites();
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}

