class Attractor2 {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.speed = 100;
      this.val = 1;
      this.power = 1500;
      this.temp = 0.03;
    }
    
    apower(p){
      this.power = p;
    }

    atemp(t){
      this.temp = t;
    }

    move() {
      this.t =frameCount;
      this.position.y = this.speed * cos(this.temp * 0.03) + height/2;
      this.position.x = this.speed * tan(this.temp * 0.03) + width/2;
      this.speed += this.val
      if(this.speed>200 || this.speed <50){
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
  