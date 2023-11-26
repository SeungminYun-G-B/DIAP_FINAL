class Repeller {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.speed = 300;
      this.val = 1;
      this.power = 1500;
    }
    
    move() {
      this.t =frameCount;
      this.position.x = -this.speed * sin(this.t * 0.06)+ width/2;
      this.position.y = -this.speed * cos(this.t * 0.06)+ height/2;
      this.speed += this.val
      if(this.speed>500 || this.speed <250){
        this.val*= -1;
      }
    }
  
  
    show() {
      noStroke();
      fill(40,100,200);
      circle(this.position.x, this.position.y, 15);
    }
  
    repel(particle) {
      let force = p5.Vector.sub(this.position, particle.position);
      let distance = force.mag();
      distance = constrain(distance, 5, 50);
      let strength = (-1 * this.power) / (distance * distance);
      force.setMag(strength);
      return force;
    }
  }
  