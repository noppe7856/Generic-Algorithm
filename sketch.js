var population;
var target;
var pGen;
var pMaxFit;
var generation = 0;
const rocketNum = 100;
const lifeSpan = 500;

var walls = [];
var wallsParams = [];
function setup() {
  createCanvas(400, 300);
  pGen = createP(generation + "世代");
  pMaxFit = createP("MaxFit:" + 0);

  target = new Target();
  population = new Population();

  makeWalls();
  for (var item of wallsParams) {
    walls.push(new Wall(item.x, item.y, item.w, item.h));
  }
  population.registerWalls(walls);
}
function makeWalls() {
  wallsParams.push({ x: 100,  y: 200, w: 150, h: 10 });
  wallsParams.push({ x: 0,    y: 100, w: 150, h: 10 });
  wallsParams.push({ x: 350,  y: 100, w: 50, h: 10 });
  // Around Walls
  wallsParams.push({ x: 0,    y: 0, w: 10, h: height }); //left wall
  wallsParams.push({ x: 0,    y: 0, w: width, h: 10 }); // top wall
  wallsParams.push({ x: 0,    y: height + 10, w: width, h: 10 }); // bottom wall
  wallsParams.push({ x: width - 10, y: 0, w: 10, h: height }); // right wall
}
function draw() {
  background(0);
  target.draw();
  population.draw();
  for (var wall of walls) {
    wall.draw();
  }
}

