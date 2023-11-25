
class EmitterDown {

    constructor(x, y) {
      this.origin = createVector(x, y);
      this.particles = [];
    }
  
    addParticle() {
      this.particles.push(new ParticleDown(this.origin.x, this.origin.y));
    }
  
    applyForce(force) {
      for (let particleDown of this.particles) {
        particleDown.applyForce(force);
      }
    }
  
  
    
    applyAttractor(attractor) {
      for (let particleDown of this.particles) {
        let force = attractor.pull(particle);
        particleDown.applyForce(force);
      }
    }
  
    run() {
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const particle = this.particles[i];
        particle.run();
        if (particle.isDead()) {
          this.particles.splice(i, 1);
        }
      }
    }
  }