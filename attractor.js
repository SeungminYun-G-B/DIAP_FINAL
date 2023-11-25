class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.speed = 100;
    this.val = 1;
    this.power = 2000;
  }
  
  move() {
    this.t =frameCount;
    this.position.y = this.speed * sin(this.t * 0.1) + height/2;
    this.position.x = this.speed * cos(this.t * 0.1) + width/2;
    this.speed += this.val
    if(this.speed>250 || this.speed <50){
      this.val*= -1;
    }
  }
  
  

  show() {
    noStroke();
    fill(200, 130, 50);
    circle(this.position.x, this.position.y, 15);
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
