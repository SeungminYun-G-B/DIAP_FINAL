class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 2000;
  }
  
  move(value) {
    this.position.y = height*noise(value/150*frameCount);
  }
  

  show() {
    noStroke();
    fill(200, 130, 50);
    circle(this.position.x, this.position.y, 5);
  }

  pull(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
