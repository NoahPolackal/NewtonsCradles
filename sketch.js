const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;

function setup() {
  canvas = createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum1 = new Pendulum(300,450,"gold");
  pendulum2 = new Pendulum(590,450,"silver");
  pendulum3 = new Pendulum(660,450,"gold");
  pendulum4 = new Pendulum(730,450,"silver");
  pendulum5 = new Pendulum(800,450,"gold");

  sling1 = new Sling(pendulum1.body,{x:520,y:100});
  sling2 = new Sling(pendulum2.body,{x:590,y:100});
  sling3 = new Sling(pendulum3.body,{x:660,y:100});
  sling4 = new Sling(pendulum4.body,{x:730,y:100});
  sling5 = new Sling(pendulum5.body,{x:800,y:100});
}

function draw() {
  background(0);
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}