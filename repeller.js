class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 1500;
    this.blc;
  }
  
  rpower(f){
    this.power = f;
  }
  rblc(b){
    this.blc = b;
  }

  move(value) {
    this.position.y = height*noise(value/100*frameCount);
  }
  
  show() {
    noStroke();
    fill(40,100,200);
    circle(this.position.x, this.position.y, 5);
  }
  repel(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = (-this.blc * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}