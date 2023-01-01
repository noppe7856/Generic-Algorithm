class Individual {
  constructor(dna) {
    this.pos = createVector(width / 2, height);
    this.vel = createVector();
    this.acc = createVector();
    if (dna) {
      this.dna = dna;
    } else {
      this.dna = new DNA();
    }
    this.fitness = 0;
    this.compleated = false;
    this.crashed = false;
  }
  calcFitness() {
    var d = target.pos.dist(this.pos);
    this.fitness = map(d, 0, width, width, 0);
    if (this.compleated) {
      this.fitness *= 10;
    }
    if (this.crashed){
      this.fitness /= 10;  
    }
  }
  update() {
    if (this.isStopped()) {
      return;
    }
    this.applyForce(this.dna.getGean());
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(6);
    this.acc.mult(0);
  }
  isStopped() {
    var ret = false;
    if (this.compleated) {
      ret |= true;
    }
    if (this.crashed){
      ret |= true;  
    }
    return ret;
  }
  setCrashed(){
    this.crashed = true;
  }
  setCompleated(){
    this.compleated = true;
  }
  applyForce(force) {
    this.acc.add(force);
  }
  draw() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rect(0, 0, 20, 5);
    pop();
  }
}
