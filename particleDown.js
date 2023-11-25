class ParticleDown {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.velocity = createVector(random(-2, 2), random(-1, 0));
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
  
    pull() {
        let force = p5.Vector.sub(this.position, Particle.position);
        let distance = force.mag();
        distance = constrain(distance, 5, 50);
        let strength = this.power / (distance * distance);
        force.setMag(strength);
        this.acceleration.add(force);
      }

    isDead() {
      return this.lifespan < 0.0;
    }
  }
  