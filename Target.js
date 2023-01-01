class Target {
  constructor() {
    this.pos = createVector(width / 2, height / 8);
  }
  draw() {
    circle(this.pos.x, this.pos.y, 20);
  }
}