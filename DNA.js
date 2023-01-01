
class DNA {
  constructor(geans) {
    if (geans) {
      this.geanes = geans;
    } else {
      this.geanes = [];
      for (var i = 0; i < lifeSpan; i++) {
        this.geanes.push(p5.Vector.random2D().setMag(0.1));
      }
    }
    this.lifeTime = 0;
  }
  //交叉
  crossover(partner) {
    var newgeans = [];
    var mid = floor(random(this.geanes.length));
    for (var i = 0; i < this.geanes.length; i++) {
      if (i < mid) {
        newgeans[i] = this.geanes[i];
      } else {
        newgeans[i] = partner.geanes[i];
      }
    }
    return new DNA(newgeans);
  }
  // 突然変異
  mutation() {
    if (0.1 > random(1)) {
      this.geanes[random(this.geanes.length)] = p5.Vector.random2D().setMag(
        0.1
      );
    }
  }
  getGean() {
    if (this.isStopped()) {
      return createVector();
    } else {
      this.update();
      return this.geanes[this.lifeTime];
    }
  }
  update() {
    this.lifeTime++;
  }
  isStopped() {
    if (this.lifeTime > lifeSpan) {
      return true;
    } else {
      return false;
    }
  }
}
