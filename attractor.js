class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 700;
  }
  
  move(value) {
    
    this.position.x = width*noise(value*frameCount/2);
    this.position.y = height*1.2*noise(value*frameCount/2);
  }
  


  show() {
    stroke(0);
    strokeWeight(2);
    fill(200, 130, 50);
    circle(this.position.x, this.position.y, 32);
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
