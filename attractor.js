class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    //{!1} How strong is the repeller?
    this.power = 200;
  }
  
  move(value) {
    randomSeed(2);
    this.position.x = width/2*noise(value*frameCount);
    this.position.y = height*0.8*noise(value*frameCount);
  }
  


  show() {
    stroke(0);
    strokeWeight(2);
    fill(200, 130, 50);
    circle(this.position.x, this.position.y, 32);
  }

  pull(particle) {
    //{!6 .code-wide} This is the same repel algorithm we used in Chapter 2: forces based on gravitational attraction.
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
