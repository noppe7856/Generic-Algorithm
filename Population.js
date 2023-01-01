class Population {
  constructor() {
    this.individuals = [];
    for (var i = 0; i < rocketNum; i++) {
      this.individuals.push(new Individual());
    }
    this.matingPool = [];
    this.walls = [];
  }
  registerWalls(walls){
    this.walls = walls;
  }
  calcEvaluation() {
    for (var item of this.individuals) {
      item.calcFitness();
    }
    var maxFit = 0;
    for (var item of this.individuals) {
      if(maxFit < item.fitness){
        maxFit = item.fitness;   
      }
    }
    
    pMaxFit.html("MaxFit:" + maxFit);
    for (var item of this.individuals) {
      item.fitness /= maxFit;
    }
    this.matingPool = [];
    for (var item of this.individuals) {
      var n = item.fitness * 100;
      for (var i = 0; i < n; i++) {
        this.matingPool.push(item);
      }
    }
  }
  // 選択
  selection() {
    var parentA = random(this.matingPool).dna;
    var parentB = random(this.matingPool).dna;
    var child = parentA.crossover(parentB);
    child.mutation();
    return child;
  }
  draw() {
    this.calcCrashed();
    this.calcCompleated();
    for (var rocket of this.individuals) {
      rocket.update();
      rocket.draw();
    }
    if (0 == (frameCount%lifeSpan)) {
      generation++;
      pGen.html(generation + "世代");
      this.calcEvaluation();

      // Create OffSprings;
      this.individuals = [];
      for (var i = 0; i < rocketNum; i++) {
        this.individuals.push(new Individual(this.selection()));
      }
    }
  }
  calcCrashed() {
    for (var item of this.individuals) {
      for(var wall of this.walls){
        if(wall.isTouch(item.pos.x,item.pos.y)){
             item.setCrashed();
        }
      }
    }       
  }
  calcCompleated() {
    for (var item of this.individuals) {
      let d = target.pos.dist(item.pos);
      if (d < 10) {
        item.setCompleated();
      }
    }
  }
}
