class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-8, 8), random(-2, 2));
    this.acceleration = createVector(0, 0);
    this.lifespan = 255.0;
  }

  run() {
    this.update();
    this.show();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }


  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1.5;
    this.acceleration.mult(0);
  }


  show() {
    noStroke();
    fill(20, this.lifespan);
    circle(this.position.x, this.position.y, 3);
  }


  isDead() {
    return this.lifespan < 0.0;
  }
}
