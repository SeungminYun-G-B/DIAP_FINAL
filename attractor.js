class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.speed = 27;
    this.val = 1;
    this.power = 3200;
  }
  
  apower(f){
    this.power = f;
  }



  move() {
    this.t =frameCount;
    this.position.y = this.speed * cos(this.t * 0.07)+ height/2;
    this.position.x = -this.speed * sin(this.t * 0.07)+ width/2;

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
