class Wall {
  constructor(rx, ry, rw, rh) {
    this.rx = rx;
    this.ry = ry;
    this.rw = rw;
    this.rh = rh;
  }
  draw() {
    rect(this.rx, this.ry, this.rw, this.rh);
  }
  isTouch(x, y) {
    var ret = false;
    if (
      this.rx <= x &&
      x <= this.rx + this.rw &&
      this.ry <= y &&
      y <= this.ry + this.rh
    ) {
      ret = true;
    }
    return ret;
  }
}